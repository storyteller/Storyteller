namespace Storyteller.Core.Testing.Samples.Fixtures
{
    public class DecoratedGrammarFixture : Fixture
    {
        // TODO -- maybe bring this back
        /*
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
         */


        public void Go(string activity)
        {
        }
    }
}