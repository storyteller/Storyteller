using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller.Redux
{
    /// <summary>
    /// Marks a void method to be a line grammar that sends json messages to the running Redux store
    /// </summary>
    public class SendJsonAttribute : GrammarAttribute
    {
        private readonly string _type;

        /// <summary>
        /// Marks the method as a signature to send a matching object to the Redux store system
        /// </summary>
        /// <param name="type">The 'type' property in the Redux action you're sending here</param>
        public SendJsonAttribute(string type)
        {
            _type = type;
        }

        /// <summary>
        /// Optionally override the format of the grammar display in HTML
        /// </summary>
        public string Format { get; set; }

        public override IGrammar Build(MethodInfo method, Fixture fixture)
        {
            return new SendJsonGrammar(_type, method, fixture.As<ReduxFixture>()) {Format = Format};
        }
    }

    public class SendJsonGrammar : LineGrammar
    {
        private readonly string _type;
        private readonly MethodInfo _method;
        private readonly ReduxFixture _fixture;

        public SendJsonGrammar(string type, MethodInfo method, ReduxFixture fixture)
        {
            _type = type;
            _method = method;
            _fixture = fixture;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            throw new NotSupportedException();
        }

        public override async Task<IEnumerable<CellResult>> ExecuteAsync(StepValues values, ISpecContext context)
        {
            var dict = new Dictionary<string, object> {{"type", _type}};

            foreach (var cell in _cells)
            {
                dict.Add(cell.Key, values.Get(cell.Key));
            }

            await _fixture.sendAction(dict).ConfigureAwait(false);

            return new CellResult[0];
        }

        public override bool IsAsync()
        {
            return true;
        }

        public string Format { get; set; }

        protected override string format()
        {
            if (Format.IsNotEmpty())
            {
                return Format;
            }

            var keys = _method
                .GetParameters()
                .Select(param => $"\"{param.Name}\": {{{param.Name}}}").Join(", ");

            return $"Send type: \"{_type}\", {keys}";
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cells = _method.GetParameters().Select(param => Cell.For(cellHandling, param, fixture)).ToArray();

            return _cells;
        }
    }
}