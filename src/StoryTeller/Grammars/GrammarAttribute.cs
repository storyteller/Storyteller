using System;
using System.Reflection;

namespace StoryTeller.Grammars
{
    [AttributeUsage(AttributeTargets.Method)]
    public abstract class GrammarAttribute : Attribute
    {
        public abstract IGrammar Build(MethodInfo method, Fixture fixture);
    }
}