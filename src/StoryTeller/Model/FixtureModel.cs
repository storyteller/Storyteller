using System.Collections.Generic;
using System.Linq;
using Baseline;

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
                section.AddComment("## " + grammar.key);
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
            var model = new FixtureModel(key) {implementation = implementation};

            var over = grammar as FixtureModel;
            if (over == null)
            {
                model.title = title;
                model.grammars = grammars.Select(x => x.ApplyOverrides(null)).ToArray();
                return model;
            }

            model.title = over.title.IsNotEmpty() ? over.title : title;
            model.grammars = grammars.Select(g =>
            {
                var match = over.grammars.FirstOrDefault(x => x.key == g.key);
                return g.ApplyOverrides(match);
            }).ToArray();

            var keys = model.grammars.Select(x => x.key).ToList();
            var missing = over.grammars.Where(x => !keys.Contains(x.key));
            missing.Each(x =>
            {
                model.AddGrammar(x.ApplyOverrides(null));
            });

            return model;
        }
    }
}
