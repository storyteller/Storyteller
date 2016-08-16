using Xunit;

namespace StoryTeller.Testing.Grammars
{
    
    public class GrammarBuilderTester
    {
        private readonly GrammarTargetFixture theFixture = new GrammarTargetFixture();

        [Fact]
        public void processes_hidden_for_programmatic_grammars()
        {
            theFixture.GrammarFor("NotHidden").IsHidden.ShouldBeFalse();
            theFixture.GrammarFor("Hidden").IsHidden.ShouldBeTrue();
        }

        [Fact]
        public void determines_hidden_for_actions()
        {
            theFixture.GrammarFor("VisibleAction").IsHidden.ShouldBeFalse();
            theFixture.GrammarFor("HiddenAction").IsHidden.ShouldBeTrue();
        }

        [Fact]
        public void determines_hidden_for_assertions()
        {
            theFixture.GrammarFor("VisibleAssertion").IsHidden.ShouldBeFalse();
            theFixture.GrammarFor("HiddenAssertion").IsHidden.ShouldBeTrue();
        }

        [Fact]
        public void determines_hidden_for_facts()
        {
            theFixture.GrammarFor("VisibleFact").IsHidden.ShouldBeFalse();
            theFixture.GrammarFor("HiddenFact").IsHidden.ShouldBeTrue();
        }
    }

    public class GrammarTargetFixture : Fixture
    {
        public IGrammar NotHidden()
        {
            return new StubGrammar();
        }

        [Hidden]
        public IGrammar Hidden()
        {
            return new StubGrammar();
        }

        public void VisibleAction()
        {
            
        }

        [Hidden]
        public void HiddenAction()
        {
            
        }

        public string VisibleAssertion()
        {
            return null;
        }

        [Hidden]
        public string HiddenAssertion()
        {
            return null;
        }

        public bool VisibleFact()
        {
            return true;
        }

        [Hidden]
        public bool HiddenFact()
        {
            return true;
        }
    }
}