using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using Storyteller.Core.Grammars.Reflection;
using Storyteller.Core.Grammars.Tables;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    internal static class GrammarBuilder
    {
         private static readonly IList<IGrammarBuilder> _builders = new List<IGrammarBuilder>
         {
             new ProgrammaticGrammarBuilder(),
             new VoidMethodActionBuilder(),
             new ValueCheckMethodBuilder()
         };

        public static IGrammar BuildGrammar(MethodInfo method, Fixture fixture)
        {
            var builder = _builders.FirstOrDefault(x => x.Matches(method));
            if (builder == null)
            {
                // TODO -- see the following code
                throw new NotImplementedException("Haven't built the I cannot build a grammar for this method functionality");
            }

            try
            {
                var grammar = builder.Build(method, fixture);

                method.ForAttribute<ExposeAsTableAttribute>(att =>
                {
                    grammar = grammar.AsTable(att.Label).LeafName(att.LeafName);
                });

                return grammar;
            }
            catch (Exception e)
            {
                return new ErrorGrammar(method.Name, e.ToString());
            }
        }
    }

    internal interface IGrammarBuilder
    {
        bool Matches(MethodInfo method);
        IGrammar Build(MethodInfo method, Fixture fixture);
    }

    internal class ProgrammaticGrammarBuilder : IGrammarBuilder
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