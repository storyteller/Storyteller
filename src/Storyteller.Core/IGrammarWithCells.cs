using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IGrammarWithCells : IGrammar
    {
        IEnumerable<Cell> BuildCells(Conversions conversions);
    }
}