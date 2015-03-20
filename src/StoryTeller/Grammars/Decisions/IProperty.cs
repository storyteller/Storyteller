using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Decisions
{
    public interface IProperty
    {
        CellResult ProcessStep(StepValues step, ISpecContext context, object target);
        Cell CompileCell(CellHandling cellHandling, Fixture fixture);
    }
}