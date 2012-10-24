using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public class CreateObjectGrammar<TObject, TInput> : LineGrammar
    {
        private readonly Cell _cell;
        private readonly Func<TInput, TObject> _creator;

        public CreateObjectGrammar(string key, Func<TInput, TObject> creator)
            : base("")
        {
            _creator = creator;
            _cell = Cell.For<TInput>(key);
        }

        public string DefaultValue { get { return _cell.DefaultValue; } set { _cell.DefaultValue = value; } }

        public override string Description { get { return "CreateObjectGrammar"; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _cell.ReadArgument(context, containerStep, x => createObject(x, context));
        }

        private void createObject(object x, ITestContext context)
        {
            var arg = (TInput) x;
            context.CurrentObject = _creator(arg);
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                _cell
            };
        }
    }
}