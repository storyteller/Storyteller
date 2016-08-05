using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.ObjectBuilding
{
    public class ConfigureObjectGrammar<TObject, TInput> : LineGrammar
    {
        private Cell _cell;
        private readonly string _format;
        private readonly Action<TObject, TInput> _configure;
        private readonly string _key;

        public ConfigureObjectGrammar(string format, Action<TObject, TInput> configure)
        {
            var keys = format.ParseTemplateKeys();
            if (keys.Any())
            {
                _format = format;
                _key = keys.Single();
            }
            else
            {
                _key = format;
                _format = "Configure {0} with {1} = {{{1}}}".ToFormat(typeof (TObject).Name, _key);
            }

            _configure = configure;

            CellModifications = new CellModifications();
        }

        public CellModifications CellModifications { get; private set; }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var input = values.Get(_key).As<TInput>();

            var @object = context.State.CurrentObject.As<TObject>();

            _configure(@object, @input);

            return Enumerable.Empty<CellResult>();
        }

        protected override string format()
        {
            return _format;
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cell = new Cell(cellHandling, _key, typeof (TInput));

            CellModifications.Apply(_cell);

            return new[] {_cell};
        }
    }

}