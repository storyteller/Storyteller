using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Storyteller.Core.Grammars
{
    public static class GrammarBuilder
    {
         private static readonly IList<IGrammarBuilder> _builders = new List<IGrammarBuilder>
         {
             new ProgrammaticGrammarBuilder()
         };

        public static IGrammar BuildGrammar(MethodInfo method, Fixture fixture)
        {
            var builder = _builders.FirstOrDefault(x => x.Matches(method));
            if (builder == null)
            {
                // TODO -- see the following code
                throw new NotImplementedException("Haven't built the I cannot build a grammar for this method functionality");
            }

            return builder.Build(method, fixture);
        }
    }

    public interface IGrammarBuilder
    {
        bool Matches(MethodInfo method);
        IGrammar Build(MethodInfo method, Fixture fixture);
    }

    public class ProgrammaticGrammarBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.ReturnType == typeof (IGrammar);
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return (IGrammar) method.Invoke(fixture, new object[0]);
        }
    }
}