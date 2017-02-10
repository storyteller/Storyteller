using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.RDBMS
{
    public class DbCommandGrammar : LineGrammar
    {
        public ParameterCell[] Parameters { get; private set; }
        private readonly CommandType _commandType;
        private readonly string _sql;
        private readonly MethodInfo _method;

        public DbCommandGrammar(CommandType commandType, string sql, MethodInfo method)
        {
            _commandType = commandType;
            _sql = sql;
            _method = method;
        }

        protected void configureCommand(IDbCommand command, StepValues values)
        {
            command.CommandText = _sql;
            command.CommandType = _commandType;

            foreach (var parameter in Parameters)
            {
                parameter.AddParameter(command, values);
            }
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var runner = context.Service<CommandRunner>();
            var cmd = runner.NewCommand();

            configureCommand(cmd, values);

            runner.Execute(cmd);

            return Parameters.Where(x => x.IsChecked()).Select(x => x.ToResult(values, cmd));
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            Parameters = ParameterCell.ParseCells(_method, cellHandling, fixture);
            return Parameters.Select(x => x.Cell);
        }

        // TODO -- have some way to short circuit the format/title/heading
        protected override string format()
        {
            return _sql;
        }
    }
}