using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Engine
{
    public class FactAssertion : LineGrammar
    {
        private readonly MethodInfo _method;
        private readonly Cell _returnCell;
        private readonly object _target;

        public FactAssertion(MethodInfo method, object target)
            : base(method.GetTemplate())
        {
            _method = method;
            _target = target;

            if (method.ReturnType != typeof (bool))
            {
                throw new ApplicationException(
                    "'{0}' cannot be marked as an Assertion.  Only methods that return a boolean can be assertions".
                        ToFormat(method.Name));
            }
            _returnCell = _method.GetReturnCell();
        }

        public override string Description { get { return string.Empty; } }

        public override void Execute(IStep step, ITestContext context)
        {
            step.Set(_returnCell.Key, true);
            context.ResultsFor(step).SetActual(_returnCell.Key, false);
            _method.Call(_target, step, context,
                         value => _returnCell.RecordActual(value, step, context));
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>(_method.GetArgumentCells())
            {
                _returnCell
            };
        }

        public static FactAssertion Create<T>(Expression<Func<T, bool>> expression, T target)
        {
            return new FactAssertion(FubuCore.Reflection.ReflectionHelper.GetMethod(expression), target);
        }
    }
}