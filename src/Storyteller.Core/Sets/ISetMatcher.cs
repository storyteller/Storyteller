using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Sets
{
    public interface ISetMatcher
    {
        SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expected, IEnumerable<StepValues> actual);
    }
}