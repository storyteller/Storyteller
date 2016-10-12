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
    }
}
