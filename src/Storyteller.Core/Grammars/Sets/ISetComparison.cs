using System.Threading.Tasks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Sets
{
    public interface ISetComparison
    {
        Task<StepValues[]> Fetch(ISpecContext context);
        Cell[] BuildCells(CellHandling handling, Fixture fixture);
    }
}