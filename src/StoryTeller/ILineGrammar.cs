using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller
{
    public interface ILineGrammar : IGrammar
    {
        IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);
        Task<IEnumerable<CellResult>> ExecuteAsync(StepValues values, ISpecContext context);

        bool IsAsync();

        
    }
}