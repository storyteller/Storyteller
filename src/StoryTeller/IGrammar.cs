using StoryTeller.Model;

namespace StoryTeller
{
    public interface IGrammar
    {
        IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false);

        GrammarModel Compile(Fixture fixture, CellHandling cells);

        string Key { get; set; }

        bool IsHidden { get; set; }

        long MaximumRuntimeInMilliseconds { get; set; }
    }
}