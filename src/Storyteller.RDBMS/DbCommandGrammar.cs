using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.RDBMS
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


        public DbCommandGrammar(DatabaseFixture fixture, MethodInfo method, CommandType commandType, string sql)
        {
            _fixture = fixture;
            _method = method;
            _commandType = commandType;
            _sql = sql;

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

            // Maybe have this done as part of the dialect
            return _sql;
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