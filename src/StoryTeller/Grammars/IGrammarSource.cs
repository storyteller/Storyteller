using System.Linq;
using System.Reflection;
using Baseline;

namespace StoryTeller.Grammars
{
    public interface IGrammarSource
    {
        IGrammar ToGrammar(MethodInfo method, Fixture fixture);
    }

    public class GrammarSourceBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.ReturnType != null && method.ReturnType.CanBeCastTo<IGrammarSource>();
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            var parameters = method.GetParameters()
                .Select(x => typeof(DefaultValue<>).CloseAndBuildAs<IDefault>(x.ParameterType).Value())
                .ToArray();

            var source = method.Invoke(fixture, parameters).As<IGrammarSource>();

            return source.ToGrammar(method, fixture);
        }

        public interface IDefault
        {
            object Value();
        }

        public class DefaultValue<T> : IDefault
        {
            public object Value()
            {
                return default(T);
            }
        }
    }
}