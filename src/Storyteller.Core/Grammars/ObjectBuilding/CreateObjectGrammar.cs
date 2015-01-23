using System;
using System.Collections.Generic;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.ObjectBuilding
{
    public class CreateObjectGrammar<TObject, TInput> : LineGrammar
    {
        private Cell _cell;
        private readonly string _key;
        private readonly Func<TInput, TObject> _creator;

        public CreateObjectGrammar(string key, Func<TInput, TObject> creator)
        {
            _key = key;
            _creator = creator;
        }

        public string DefaultValue { get; set; }

        public CreateObjectGrammar<TObject, TInput> Default(string defaultValue)
        {
            DefaultValue = defaultValue;
            return this;
        } 

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling)
        {
            _cell = new Cell(cellHandling, _key, typeof(TInput));
            _cell.DefaultValue = DefaultValue;

            return new[] {_cell};
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var input = (TInput) values.Get(_key);
            var @object = _creator(input);
            context.State.CurrentObject = @object;

            return new[] {CellResult.Ok(_key)};
        }

        protected override string format()
        {
            return "Create {0} as {{{1}}}".ToFormat(typeof (TObject).Name, _key);
        }
    }
}