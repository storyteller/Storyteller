using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline.Reflection;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using StoryTeller.Util;

namespace StoryTeller.Grammars
{
    internal static class GrammarBuilder
    {
         private static readonly IList<IGrammarBuilder> _builders = new List<IGrammarBuilder>
         {
             new ProgrammaticGrammarBuilder(),
             new FactMethodBuilder(),
             new FactMethodWithInputsBuilder(),
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

                method.ForAttribute<HiddenAttribute>(_ => grammar.IsHidden = true);

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

    internal class FactMethodBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.HasReturn() && method.ReturnType == typeof(bool) && !method.GetParameters().Any();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new FactMethod(method, fixture);
        }
    }

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