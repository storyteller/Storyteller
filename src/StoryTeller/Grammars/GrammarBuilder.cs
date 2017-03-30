using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline.Reflection;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;

namespace StoryTeller.Grammars
{
    public static class GrammarBuilder
    {
         private static readonly IList<IGrammarBuilder> _builders = new List<IGrammarBuilder>
         {
             new GrammarAttributeBuilder(),
             new ProgrammaticGrammarBuilder(),
             new GrammarSourceBuilder(),
             new FactMethodBuilder(),
             new FactMethodWithInputsBuilder(),
             new VoidMethodActionBuilder(),
             new ValueCheckMethodBuilder()
         };

        public static void AddPolicy(IGrammarBuilder builder)
        {
            _builders.Insert(0, builder);
        }

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
                method.ForAttribute<PerfLimitAttribute>(
                    _ => grammar.MaximumRuntimeInMilliseconds = _.MaximumRuntimeInMilliseconds);

                return grammar;
            }
            catch (Exception e)
            {
                return new ErrorGrammar(method.Name, e.ToString());
            }
        }
    }
}