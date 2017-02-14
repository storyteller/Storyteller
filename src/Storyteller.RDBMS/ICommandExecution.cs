using System.Data;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace Storyteller.RDBMS
{
    public interface ICommandExecution
    {
        Cell[] ToCells(CellHandling cellHandling, Fixture fixture);
        void Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context);
    }
}