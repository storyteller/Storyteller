using System.Data;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.RDBMS
{
    public class NonQueryExecution : ICommandExecution
    {
        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            return new Cell[0];
        }

        public CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            runner.Execute(command);
            return null;
        }
    }
}
