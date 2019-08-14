using System.Threading.Tasks;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public interface ISystemUnderTest
    {
        FixtureLibrary Library { get; }
        Task<IExecutionContext> CreateContext(Specification specification);

        // Does all the afters, reports the results, builds out SpecResults
        Task Complete(IExecutionContext context);
    }
}