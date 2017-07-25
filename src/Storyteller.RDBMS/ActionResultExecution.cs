using System.Data;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;
using System;

namespace StoryTeller.RDBMS
{
    public class ActionResultExecution<T> : ICommandExecution
    {
        private Cell _result;
        private readonly Action<T> _action;

        public ActionResultExecution(Action<T> action)
        {
            _action = action;
        }

        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            return new Cell[0];
        }

        public CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            var result = runner.Execute<T>(command);

            _action.Invoke(result);

            return null;
        }
    }
}
