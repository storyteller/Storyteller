using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.Json
{
    public class CheckJsonGrammar<T> : LineGrammar
    {
        private readonly JsonComparisonFixture _fixture;
        private readonly string _path;
        private string _key;
        private Cell _cell;
        private string _format;
        private CellHandling _cellHandling;

        public CheckJsonGrammar(JsonComparisonFixture fixture, string path, string key)
        {
            _fixture = fixture;
            _path = path;
            _key = key;

            _format = $"{path} should be {{{key}}}";
        }

        public CheckJsonGrammar<T> Format(string format)
        {
            _format = format;
            var substitutions = TemplateParser.GetSubstitutions(format).ToArray();
            if (substitutions.Count() != 1)
            {
                throw new ArgumentOutOfRangeException($"'{format}' does not have just a single key");
            }

            _key = substitutions.FirstOrDefault();

            return this;
        }

        public CellModifications CellCustomization { get; } = new CellModifications();

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cellHandling = cellHandling;
            _cell = new Cell(cellHandling, _key, typeof(T));

            return new [] {_cell};
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var actual = default(T);
            var token = _fixture.JObject.SelectToken(_path);
            if (token != null)
            {
                if (typeof(T).IsSimple())
                {
                    actual = _cellHandling.Conversions.Convert(typeof(T), token.ToString()).As<T>();
                }
                else
                {
                    actual = token.ToObject<T>(JsonSerializer.Create(_fixture.JsonSerializerSettings));
                }

            }

            yield return _cell.Check(values, actual);
        }


        protected override string format()
        {
            return _format;
        }
    }
}