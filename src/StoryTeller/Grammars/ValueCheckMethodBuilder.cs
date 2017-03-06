using System.Reflection;
using StoryTeller.Grammars.Reflection;

namespace StoryTeller.Grammars
{
    internal class ValueCheckMethodBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.HasReturn();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new ValueCheckMethod(method, fixture);
        }
    }
}