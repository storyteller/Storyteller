namespace Storyteller.Core.Model
{
    public class FixtureModel : GrammarModel
    {
        public string title;
        public readonly string key;

        public GrammarModel[] grammars; 

        public FixtureModel(string key) : base("fixture")
        {
            this.key = key;
        }
    }
}