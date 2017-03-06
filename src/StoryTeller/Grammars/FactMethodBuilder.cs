using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using StoryTeller.Grammars.Reflection;

namespace StoryTeller.Grammars
{
    internal class FactMethodBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.HasReturn() && (method.ReturnType == typeof(bool) || method.ReturnType == typeof(Task<bool>)) && !method.GetParameters().Any();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new FactMethod(method, fixture);
        }
    }
}