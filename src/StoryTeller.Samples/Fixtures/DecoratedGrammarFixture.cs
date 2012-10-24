using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class DecoratedGrammarFixture : Fixture
    {
        public DecoratedGrammarFixture()
        {
            this["GoSlowly"] = new DecoratedLineGrammar(this["Go"].As<LineGrammar>())
            {
                Suffix = " slowly"
            };

            this["MustGoQuickly"] = new DecoratedLineGrammar(this["Go"].As<LineGrammar>())
            {
                Prefix = "Must ",
                Suffix = " quickly"
            };
        }


        public void Go(string activity)
        {
        }
    }
}