using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using FubuCore.Reflection;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public class CheckPropertyGrammar : LineGrammar
    {
        private readonly Accessor _accessor;

        public CheckPropertyGrammar(Accessor accessor)
            : base("")
        {
            _accessor = accessor;
            Cell cell = GetCell();
            Template = string.Format("{0} should be {{{0}}}", cell.Key);
        }

        public CheckPropertyGrammar(Accessor accessor, string template) : base(template)
        {
            _accessor = accessor;
        }

        public override string Description { get { return "checks a single property on an object"; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            Cell cell = GetCell();
            object target = context.CurrentObject;

            try
            {
                object actual = _accessor.GetValue(target);
                cell.RecordActual(actual, containerStep, context);
            }
            catch (Exception e)
            {
                context.ResultsFor(containerStep).MarkExceptionField(e.ToString(), cell.Key);
                context.IncrementExceptions();
            }
        }


        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                GetCell()
            };
        }


        public static CheckPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            Accessor accessor = ReflectionHelper.GetAccessor(expression);
            return new CheckPropertyGrammar(accessor);
        }

        public Cell GetCell()
        {
            return new Cell(_accessor.Name, _accessor.PropertyType)
            {
                IsResult = true
            };
        }
    }
}