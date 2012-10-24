using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public class ConfigureObjectGrammar<TObject, TInput> : LineGrammar
    {
        private readonly Cell _cell;
        private readonly Action<TObject, TInput> _configure;

        public ConfigureObjectGrammar(string cellName, Action<TObject, TInput> configure)
            : base("")
        {
            _configure = configure;
            _cell = Cell.For<TInput>(cellName);
        }

        public string DefaultValue { get { return _cell.DefaultValue; } set { _cell.DefaultValue = value; } }

        public override string Description { get { return "ConfigureObjectGrammar"; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _cell.ReadArgument(context, containerStep, x => configure(x, context));
        }

        private void configure(object rawValue, ITestContext context)
        {
            var value = (TInput) rawValue;
            var target = (TObject) context.CurrentObject;

            _configure(target, value);
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