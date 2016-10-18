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

        public void RemoveGrammar(GrammarModel grammar)
        {
            _grammars.Remove(grammar);
        }

        public override GrammarModel Copy()
        {
            var model = new FixtureModel(key);
            model.title = title;
            model.implementation = implementation;
            model.grammars = grammars.Select(x => x.Copy()).ToArray();
            return model;
        }

        public override void ApplyOverrides(GrammarModel grammar)
        {
            var fixture = grammar as FixtureModel;
            if (fixture == null) return;

            title = fixture.title;
            grammars.Each(g =>
            {
                var match = fixture.grammars.FirstOrDefault(x => x.key == g.key);
                match?.ApplyOverrides(g);
            });
        }
    }
}
