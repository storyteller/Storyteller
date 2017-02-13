using System.Reflection;

namespace StoryTeller
{
    public interface MethodAwareGrammar
    {
        void Apply(MethodInfo method, Fixture fixture);
    }
}