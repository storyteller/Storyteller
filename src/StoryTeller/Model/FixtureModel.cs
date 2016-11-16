using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
    public class FixtureModel : GrammarModel
    {
        private readonly IList<GrammarModel> _grammars = new List<GrammarModel>();

        public string title;
        public string key;
        public string implementation;

        public GrammarModel[] grammars
        {
            get { return _grammars.ToArray(); }
            set
            {
                _grammars.Clear();
                if (value != null)
                {
                    _grammars.AddRange(value);
                }
            }
        }

        [JsonProperty("missingCount")]
        public int MissingCount
        {
            get { return _grammars.Count(x => x.IsMissing); }
        }

        public string missingCode => ToMissingCode();

        public override string ToMissingCode()
        {
            if (!IsMissing || MissingCount == 0) return "";

            var missing = IsMissing ? _grammars.Where(x => x.IsMissing && x.key != "TODO") : _grammars.Where(x => x.key != "TODO");

            return $@"
    public class {key}Fixture
    {{
        {missing.Select(x => x.ToMissingCode()).Join("\n\n")}              
    }}
";

        }

        public Specification sample => ToSampleSpecification();

        public Specification ToSampleSpecification()
        {
            var spec = new Specification
            {
                name = $"Sample Specification for {key}"
            };

            var section = spec.AddSection(key);

            CreateSampleSteps(section);

            return spec;
        }

        public void CreateSampleSteps(Section section)
        {
            section.AddComment($"Implemented by {implementation}");

            foreach (var grammar in grammars.OrderBy(x => x.key))
            {
                if (IsMissing)
                {
                    section.AddComment($"## {grammar.key} (*Missing in code*)");
                }
                else
                {
                    section.AddComment("## " + grammar.key);
                }
                section.Children.Add(grammar.ToSampleStep());
            }
        }

        public FixtureModel(string key) : base("fixture")
        {
            this.key = key;
        }

        public GrammarModel FindGrammar(string key)
        {
            return grammars?.FirstOrDefault(x => x.key == key);
        }

        public void AddGrammar(GrammarModel grammar)
        {
            _grammars.Add(grammar);
        }

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            if (!(grammar is FixtureModel)) return this;

            var model = new FixtureModel(key) {implementation = implementation};
            var over = grammar.As<FixtureModel>();

            model.title = over.title.IsNotEmpty() ? over.title : title;

            foreach (var existing in _grammars)
            {
                var overridden = over.FindGrammar(existing.key);
                model.AddGrammar(overridden == null ? existing : existing.ApplyOverrides(overridden));
            }

            foreach (var specified in over.grammars.Where(x => !grammars.Any(_ => _.key == x.key)))
            {
                specified.IsMissing = true;
                model.AddGrammar(specified);
            }

            return model;
        }

        public override string ToString()
        {
            return $"Fixture: {key}";
        }

        public static FixtureModel BuildFromKeyOrTitle(string keyOrTitle)
        {
            if (keyOrTitle.Contains(" "))
            {
                var key = keyOrTitle.Replace("-", " ").Replace(":", "").Replace("  ", " ")
                    .Split(' ').Select(x => x.Capitalize()).Join("");

                return new FixtureModel(key) {title = keyOrTitle};

                
            }
            else
            {
                return new FixtureModel(keyOrTitle)
                {
                    title = keyOrTitle.SplitPascalCase()
                };
            }
        }
    }
}
