using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Reflection
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

        private readonly MethodInfo _method;
        private readonly MethodInvocation _invocation;

        public ValueCheckMethod(MethodInfo method, object target)
        {
            _method = method;
            _invocation = new MethodInvocation(method, target);
        }

        public Cell ReturnCell { get; private set; }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var actual = _invocation.Invoke(values);
            yield return ReturnCell.Check(values, actual);
        }

        protected override string format()
        {
            return _method.DeriveFormat();
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            foreach (var cell in _method.GetParameters().Select(x => Cell.For(cellHandling, x)))
            {
                yield return cell;
            }

            ReturnCell = Cell.For(cellHandling, _method.ReturnParameter);
            ReturnCell.output = true;
            if (ReturnCell.Key.IsEmpty())
            {
                ReturnCell.Key = format().ParseTemplateKeys().LastOrDefault() ?? "returnValue";
            }

            yield return ReturnCell;
        }
    }
}