using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using StoryTeller.Engine.Reflection;


namespace StoryTeller.Engine
{
    public class ActionMethodGrammar : ReflectionGrammar
    {
        private readonly List<Cell> _cells;

        public ActionMethodGrammar(MethodInfo method, object target)
            : base(method, target)
        {
            _cells = new List<Cell>(_method.GetArgumentCells());
        }

        public override IList<Cell> GetCells()
        {
            return _cells;
        }

        public static ActionMethodGrammar Create<T>(Expression<Action<T>> expression, T target)
        {
            return new ActionMethodGrammar(FubuCore.Reflection.ReflectionHelper.GetMethod(expression), target);
        }

        public static ActionMethodGrammar Create<T>(Expression<Func<T, object>> expression, T target)
        {
            return new ActionMethodGrammar(FubuCore.Reflection.ReflectionHelper.GetMethod(expression), target);
        }
    }
}