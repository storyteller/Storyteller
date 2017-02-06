using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
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
            _invocation = MethodInvocation.For(method, target);
        }



        public Cell ReturnCell => _invocation.ReturnCell;

        public override Task<IEnumerable<CellResult>> ExecuteAsync(StepValues values, ISpecContext context)
        {
            return _invocation.InvokeAsync(values);
        }

        public override bool IsAsync()
        {
            return _invocation.IsAsync();
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