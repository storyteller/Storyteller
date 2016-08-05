using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Reflection
{
    public class ActionMethodGrammar : LineGrammar
    {
        private readonly MethodInfo _method;
        private readonly MethodInvocation _invocation;

        public ActionMethodGrammar(MethodInfo method, object fixture)
        {
            _method = method;

            _invocation = new MethodInvocation(method, fixture);
        }

        public static ActionMethodGrammar Create<T>(Expression<Action<T>> expression, T target)
        {
            return new ActionMethodGrammar(ReflectionHelper.GetMethod(expression), target);
        }

        public static ActionMethodGrammar Create<T>(Expression<Func<T, object>> expression, T target)
        {
            return new ActionMethodGrammar(ReflectionHelper.GetMethod(expression), target);
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            return _invocation.Invoke(values);
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _invocation.Compile(fixture, cellHandling);
            return _invocation.Cells;
        }

        protected override string format()
        {
            return _method.DeriveFormat();
        }
    }
}