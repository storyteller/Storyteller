namespace Storyteller.Core.Model
{
    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;
        public string collection;

        public EmbeddedSection() : base("embedded-section")
        {
        }
    }
}