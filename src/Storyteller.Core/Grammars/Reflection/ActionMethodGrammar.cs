using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Reflection
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
            _invocation.Invoke(values);
            return Enumerable.Empty<CellResult>();
        }

        protected override IEnumerable<Cell> cells(Conversions conversions)
        {
            return _method.GetParameters().Select(x => Cell.For(conversions, x));
        }

        protected override string format()
        {
            return _method.DeriveFormat();
        }
    }
}