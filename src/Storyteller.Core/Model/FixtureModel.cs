using System.Linq;

namespace Storyteller.Core.Model
{
    public class FixtureModel : GrammarModel
    {
        public string title;
        public readonly string key;

        public GrammarModel[] grammars;

        public GrammarModel FindGrammar(string key)
        {
            return grammars == null ? null : grammars.FirstOrDefault(x => x.key == key);
        }

        public FixtureModel(string key) : base("fixture")
        {
            this.key = key;
        }
    }
}