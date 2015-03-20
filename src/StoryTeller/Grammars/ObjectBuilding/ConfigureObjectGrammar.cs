using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.ObjectBuilding
{
    public class ConfigureObjectGrammar<TObject, TInput> : LineGrammar
    {
        private Cell _cell;
        private readonly string _key;
        private readonly Action<TObject, TInput> _configure;

        public ConfigureObjectGrammar(string key, Action<TObject, TInput> configure)
        {
            _key = key;
            _configure = configure;
        }

        public string DefaultValue { get; set; }


        public ConfigureObjectGrammar<TObject, TInput> Default(string defaultValue)
        {
            DefaultValue = defaultValue;
            return this;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var input = values.Get(_key).As<TInput>();

            var @object = context.State.CurrentObject.As<TObject>();

            _configure(@object, @input);

            return Enumerable.Empty<CellResult>();
        }

        protected override string format()
        {
            return "Configure {0} with {{{0}}}".ToFormat(_cell);
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cell = new Cell(cellHandling, _key, typeof (TInput)) {DefaultValue = DefaultValue};

            return new[] {_cell};
        }
    }

}