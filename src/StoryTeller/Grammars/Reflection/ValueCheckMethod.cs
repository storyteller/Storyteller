using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Reflection
{
    public class ValueCheckMethod : LineGrammar
    {
        public static ValueCheckMethod For<T>(T target, Expression<Func<T, object>> expression)
        {
            var method = ReflectionHelper.GetMethod(expression);
            var grammar = new ValueCheckMethod(method, target);

            grammar.Compile(new Fixture(), CellHandling.Basic());

            return grammar;
        }

        private readonly MethodInvocation _invocation;

        public ValueCheckMethod(MethodInfo method, object target)
        {
            _invocation = new MethodInvocation(method, target);
        }

        public Cell ReturnCell
        {
            get { return _invocation.ReturnCell; }
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            return _invocation.Invoke(values);
        }

        protected override string format()
        {
            return _invocation.Format;
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _invocation.Compile(fixture, cellHandling);

            return _invocation.Cells;
        }
    }


}