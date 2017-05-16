using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using Newtonsoft.Json.Linq;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;

namespace StoryTeller.Json
{
    public class JsonValueChecks : ISetComparison
    {
        private readonly string _path;
        private readonly string _title;
        private readonly JsonComparisonFixture _parent;
        private readonly IList<IJsonFieldCheck> _checks = new List<IJsonFieldCheck>();

        public JsonValueChecks(string path, string title, JsonComparisonFixture parent)
        {
            _path = path;
            _title = title;
            _parent = parent;
        }

        // This should use the path as the 
        public ICellExpression Check<T>(string path, string cell = null)
        {
            // TODO -- not sure this is going to work w/ the reserved values in the path
            cell = cell ?? path;

            var check = new JsonFieldCheck<T>(path, cell);
            _checks.Add(check);

            return check.Customize;
        }

        Cell[] ISetComparison.BuildCells(CellHandling handling, Fixture fixture)
        {
            return _checks.Select(x => x.BuildCell(handling, fixture)).ToArray();
        }


        Task<StepValues[]> ISetComparison.Fetch(ISpecContext context)
        {
            return Task.Factory.StartNew(() =>
            {
                var token = _parent.JObject.SelectToken(_path);
                StoryTellerAssert.Fail(token == null, $"Could not find a JSON array at {_path}\n\nJson: \n\n_parent.JObject.ToString()");

                return token.Children().Select(createActualValues).ToArray();
            });
        }

        private StepValues createActualValues(JToken element)
        {
            var values = new StepValues("actual");

            foreach (var check in _checks)
            {
                check.Store(_parent, values, element);
            }

            return values;
        }

        public interface IJsonFieldCheck
        {
            Cell BuildCell(CellHandling handling, Fixture fixture);
            void Store(JsonComparisonFixture fixture, StepValues values, JToken element);
        }

        public class JsonFieldCheck<T> : IJsonFieldCheck
        {
            private readonly string _path;
            private readonly string _key;

            public JsonFieldCheck(string path, string key)
            {
                _path = path;
                _key = key;
            }

            public Cell Cell { get; private set; }

            public readonly CellModifications Customize = new CellModifications();
            public Cell BuildCell(CellHandling handling, Fixture fixture)
            {
                Cell = new Cell(handling, _key, typeof(T));
                Customize.Apply(Cell);

                return Cell;
            }

            public void Store(JsonComparisonFixture fixture, StepValues values, JToken element)
            {
                var token = element.SelectToken(_path);
                if (token == null)
                {
                    values.Store(_key, null);
                }
                else
                {
                    var value = fixture.deserialize<T>(token);
                    values.Store(_key, value);
                }
            }
        }

        internal IGrammar ToGrammar()
        {
            return new SetVerificationGrammar(_title, "tokens", this);
        }
    }
}