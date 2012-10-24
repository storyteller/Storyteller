using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller
{
    public interface IGrammar
    {
        string Description { get; }
        void Execute(IStep containerStep, ITestContext context);

        GrammarStructure ToStructure(FixtureLibrary library);
    }
}