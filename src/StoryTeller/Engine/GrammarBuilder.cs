using System.Reflection;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Engine
{
    public static class GrammarBuilder
    {
        public static IGrammar BuildGrammar(MethodInfo method, object target)
        {
            if (method.ReturnsGrammar())
            {
                return (IGrammar) method.Invoke(target, null);
            }

            IGrammar basicGrammar = method.HasReturn()
                                        ? (IGrammar) new ValueCheckMethod(method, target)
                                        : new ActionMethodGrammar(method, target);

            var tableAtt = method.GetAttribute<ExposeAsTableAttribute>();
            return tableAtt == null
                       ? basicGrammar
                       : new TableGrammar(basicGrammar.As<IGrammarWithCells>(), tableAtt.LeafName)
                       {
                           LabelName = tableAtt.Label
                       };
        }

        public static IGrammar BuildGrammar<T>(T target, string methodName)
        {
            MethodInfo method = typeof (T).GetMethod(methodName);
            return BuildGrammar(method, target);
        }
    }
}