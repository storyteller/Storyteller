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
    public class DbCommandGrammar : LineGrammar, MethodAwareGrammar
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
                }).ToArray();
        }

        public ParameterCell[] Parameters { get; private set; }
        private readonly CommandType _commandType;
        private readonly string _sql;
        private MethodInfo _method;

        public DbCommandGrammar(CommandType commandType, string sql)
        {
            _commandType = commandType;
            _sql = sql;
        }

        public ICommandExecution Execution { get; set; } = new NonQueryExecution();


        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var runner = context.Service<CommandRunner>();
            var cmd = runner.NewCommand();

            cmd.CommandText = _sql;
            cmd.CommandType = _commandType;

            foreach (var parameter in Parameters)
            {
                parameter.AddParameter(cmd, values);
            }

            Execution.Execute(cmd, runner, values, context);

            return Parameters.Where(x => x.IsChecked()).Select(x => x.ToResult(values, cmd));
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            Parameters = ParseCells(_method, cellHandling, fixture);
            return Parameters.Select(x => x.Cell);
        }

        // TODO -- have some way to short circuit the format/title/heading
        protected override string format()
        {
            // Maybe have this done as part of the
            return _sql;
        }

        public void Apply(MethodInfo method, Fixture fixture)
        {
            _method = method;
        }
    }
}