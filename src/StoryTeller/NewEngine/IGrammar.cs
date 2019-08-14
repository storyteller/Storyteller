using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    // This should go away soon
    public interface IGrammar
    {

        void CreatePlan(ExecutionPlan plan, StepValues step, FixtureLibrary library, bool inTable = false);

        GrammarModel Compile(Fixture fixture, CellHandling cells);

        string Key { get; set; }

        bool IsHidden { get; set; }

        long MaximumRuntimeInMilliseconds { get; set; }
    }
}
