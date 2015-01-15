using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface ILineGrammar : IGrammar
    {
        IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);
    }
}