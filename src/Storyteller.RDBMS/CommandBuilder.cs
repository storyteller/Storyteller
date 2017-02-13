using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller;
using StoryTeller.Grammars;

namespace Storyteller.RDBMS
{
    public class CommandBuilder : IGrammarBuilder
    {
        public bool Matches(MethodInfo method)
        {
            return method.ReturnType == typeof(Command);
        }

        public IGrammar Build(MethodInfo method, Fixture fixture)
        {
            var parameters = method.GetParameters()
                .Select<ParameterInfo, object>(x => typeof(DefaultValue<>).CloseAndBuildAs<IDefault>(x.ParameterType).Value())
                .ToArray();

            var command = method.Invoke(fixture, parameters).As<Command>();

            return command.BuildGrammar(fixture);

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