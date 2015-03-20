using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public interface ISetComparison
    {
        Task<StepValues[]> Fetch(ISpecContext context);
        Cell[] BuildCells(CellHandling handling, Fixture fixture);
    }
}