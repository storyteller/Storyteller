using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using Newtonsoft.Json.Linq;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Lines;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.Json
{
    public static class JsonStateExtensions
    {
        public static void StoreJson(this State state, string json)
        {
            var jobject = JObject.Parse(json);
            state.Store(jobject);
        }
    }

    public class JsonComparisonFixture : Fixture
    {
        public JObject JObject => Context.State.Retrieve<JObject>();

        [ExposeAsTable("Check Values within the JSON Document")]
        [return: Header("Value")]
        public string CheckValues([Header("Json Path")]string path)
        {
            return JObject.SelectToken(path)?.ToString();
        }

        /// <summary>
        /// Check a single value inside of the Json structure by the type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="path"></param>
        /// <param name="format"></param>
        /// <returns></returns>
        protected CheckJsonGrammar<T> CheckValue<T>(string path, string format)
        {
            return new CheckJsonGrammar<T>(this, path, path).Format(format);
        }
    }

    public class JsonValueChecks
    {
        // This should use the path as the 
        public ICellExpression Check<T>(string path, string cell = null)
        {
            // TODO -- not sure this is going to work w/ the reserved values in the path
            cell = cell ?? path;

            throw new NotImplementedException();
        }

        
    }

// TODO -- do a different one for arrays?

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
                // TODO -- check first if there is a converter for the type. If not, deserialize it

                // let's say this cannot be an array at the moment
                actual = _cellHandling.Conversions.Convert(typeof(T), token.ToString()).As<T>();

            }

            yield return _cell.Check(values, actual);
        }

        protected override string format()
        {
            return _format;
        }
    }

    public class JsonComparison : IGrammarSource
    {
        public string Path { get; }

        public IGrammar ToGrammar(MethodInfo method, Fixture fixture)
        {
            throw new System.NotImplementedException();
        }

        public string CellKey { get; set; } = "path";

        public JsonComparison(string path)
        {
            Path = path;
        }
    }
}