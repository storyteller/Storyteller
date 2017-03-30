using System.Reflection;
using Baseline.Reflection;

namespace StoryTeller.Grammars
{
    internal class GrammarAttributeBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.HasAttribute<GrammarAttribute>();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return method.GetAttribute<GrammarAttribute>().Build(method, fixture);
        }
    }
}