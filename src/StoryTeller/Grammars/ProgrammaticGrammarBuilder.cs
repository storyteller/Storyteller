using System.Reflection;

namespace StoryTeller.Grammars
{
    internal class ProgrammaticGrammarBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.ReturnType == typeof (IGrammar);
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            var grammar = (IGrammar) method.Invoke(fixture, new object[0]);
            (grammar as MethodAwareGrammar)?.Apply(method, fixture);

            return grammar;
        }
    }
}