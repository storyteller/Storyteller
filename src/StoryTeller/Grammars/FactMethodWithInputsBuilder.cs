using System.Linq;
using System.Reflection;
using Baseline.Reflection;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Util;

namespace StoryTeller.Grammars
{
    internal class FactMethodWithInputsBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            if (!method.HasReturn()) return false;
            if (method.ReturnType != typeof (bool)) return false;

            var format = method.DeriveFormat();
            var key = "returnValue";
            method.ReturnParameter.ForAttribute<AliasAsAttribute>(att => key = att.Alias);

            if (TemplateParser.GetSubstitutions(format).Contains(key)) return false;

            return true;
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new FactCheckMethod(method, fixture);
        }
    }
}