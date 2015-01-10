namespace Storyteller.Core.Model
{
    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;

        public EmbeddedSection(string key) : base("embedded-section")
        {
        }
    }
}