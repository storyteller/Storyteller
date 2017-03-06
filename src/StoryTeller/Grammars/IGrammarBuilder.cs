using System.Reflection;

namespace StoryTeller.Grammars
{
    public interface IGrammarBuilder
    {
        bool Matches(MethodInfo method);
        IGrammar Build(MethodInfo method, Fixture fixture);
    }
}