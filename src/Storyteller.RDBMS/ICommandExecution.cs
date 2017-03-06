using System.Data;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.RDBMS
{
    public interface ICommandExecution
    {
        Cell[] ToCells(CellHandling cellHandling, Fixture fixture);
        CellResult Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context);
    }
}