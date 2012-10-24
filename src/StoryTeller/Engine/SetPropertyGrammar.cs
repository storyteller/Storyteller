using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using FubuCore;
using FubuCore.Reflection;
using StoryTeller.Assertions;
using StoryTeller.Domain;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Engine
{
    public class SetPropertyGrammar : LineGrammar
    {
        private readonly Accessor _accessor;

        public SetPropertyGrammar(Accessor accessor)
            : base("")
        {
            _accessor = accessor;
            Template = "{0} = {{{0}}}".ToFormat(_accessor.Name);
        }

        public override string Description { get { return "sets a single property on the current object"; } }

        public string DefaultValue { get; set; }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            object currentObject = context.CurrentObject;
            StoryTellerAssert.Fail(() => currentObject == null,
                                   "Test Error:  Expected an object of type '{0}' on ITestContext.CurrentObject".
                                       ToFormat(_accessor.DeclaringType.AssemblyQualifiedName));

            cell().ReadArgument(context, containerStep, x => _accessor.SetValue(currentObject, x));
        }


        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                cell()
            };
        }

        public static SetPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            return new SetPropertyGrammar(expression.ToAccessor());
        }

        private Cell cell()
        {
            return new Cell(_accessor.Name, _accessor.PropertyType, DefaultValue);
        }
    }
}