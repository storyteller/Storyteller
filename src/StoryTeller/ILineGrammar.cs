using System.Collections.Generic;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller
{
    public interface ILineGrammar : IGrammar
    {
        IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);
    }
}