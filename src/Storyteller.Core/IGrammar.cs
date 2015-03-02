using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IGrammar
    {
        IExecutionStep CreatePlan(Step step, FixtureLibrary library);

        GrammarModel Compile(Fixture fixture, CellHandling cells);

        string Key { get; set; }
    }
}