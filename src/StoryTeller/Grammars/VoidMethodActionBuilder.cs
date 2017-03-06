using System.Reflection;
using StoryTeller.Grammars.Reflection;

namespace StoryTeller.Grammars
{
    internal class VoidMethodActionBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return !method.HasReturn();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new ActionMethodGrammar(method, fixture);
        }
    }
}