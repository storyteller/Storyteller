using System.Collections.Generic;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public interface ISetMatcher
    {
        SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expectedValues, IEnumerable<StepValues> actualValues);
    }
}