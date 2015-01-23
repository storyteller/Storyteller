using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Decisions
{
    public interface IProperty
    {
        CellResult ProcessStep(StepValues step, ISpecContext context, object target);
        Cell CompileCell(CellHandling cellHandling);
    }
}