using System.Data;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.RDBMS
{
    public interface ICommandExecution
    {
        Cell[] ToCells(CellHandling cellHandling, Fixture fixture);
        CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context);
    }
}
