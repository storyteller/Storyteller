using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.RDBMS
{
    public class DbCommandGrammar : LineGrammar
    {
        public static ParameterCell[] ParseCells(MethodInfo method, CellHandling cellHandling, Fixture fixture)
        {
            var dialect = fixture.As<DatabaseFixture>().Dialect;

            return method.GetParameters()
                .Select(param =>
                {
                    var cell = Cell.For(cellHandling, param, fixture);


                    var parameter = cell.result ? ParameterDirection.Output : ParameterDirection.Input;
                    return dialect.ToParameterCell(cell, parameter);
                })
                .ToArray();
        }

        public ParameterCell[] Parameters { get; private set; }
        private readonly CommandType _commandType;
        private readonly string _sql;
        private readonly DatabaseFixture _fixture;
        private readonly MethodInfo _method;
        private string _format;


        public readonly IList<ExternalParameter> External = new List<ExternalParameter>();


        public DbCommandGrammar(DatabaseFixture fixture, MethodInfo method, CommandType commandType, ExternalParameter[] externals, string sql)
        {
            _fixture = fixture;
            _method = method;
            _commandType = commandType;
            _sql = sql;
            External.AddRange(externals);

        }

        public ICommandExecution Execution { get; set; } = new NonQueryExecution();


        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var runner = _fixture.Runner;

            var cmd = runner.NewCommand();

            cmd.CommandText = _sql;
            cmd.CommandType = _commandType;

            foreach (var parameter in Parameters)
            {
                parameter.AddParameter(cmd, values);
            }

            foreach (var externalParameter in External)
            {
                externalParameter.AddParameter(cmd, context);
            }

            var returnResult = Execution.Execute(cmd, runner, values, context);
            if (returnResult != null) yield return returnResult;

            foreach (var cell in Parameters.Where(x => x.IsChecked()))
            {
                yield return cell.ToResult(values, cmd);
            }
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            Parameters = ParseCells(_method, cellHandling, fixture);

            foreach (var parameter in Parameters)
            {
                yield return parameter.Cell;
            }

            foreach (var cell in Execution.ToCells(cellHandling, fixture))
            {
                yield return cell;
            }
        }

        // TODO -- have some way to short circuit the format/title/heading
        protected override string format()
        {
            if (_format.IsNotEmpty()) return _format;

            if (_commandType == CommandType.StoredProcedure)
            {
                var format = $"{_sql}({Parameters.Select(x => x.FormattedName()).Join(", ")})";
                var missing = Cells.Where(x => Parameters.All(p => p.Cell != x)).ToArray();

                if (missing.Any())
                {
                    format += missing.Select(x => x.ShouldBeFormat()).Join(", ");
                }

                return format;
            }
            else
            {
                var format = _sql;

                foreach (var parameter in Parameters)
                {
                    format = parameter.ReplaceWithCellInput(format);
                }

                return format;
            }
        }


        public DbCommandGrammar Format(string format)
        {
            _format = format;
            return this;
        }

        public DbCommandGrammar CheckResult<T>(string cell = "result")
        {
            Execution = new CheckResultExecution<T>();

            return this;
        }
    };
}
