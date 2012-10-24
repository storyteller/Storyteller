using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class HolderTagTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void should_not_show_the_add_grammar_text_for_single_selection()
        {
            var fixture = new FixtureStructure();
            fixture.Policies.SelectionMode = SelectionMode.Single;

            new HolderTag(fixture).ToString().ShouldNotContain(fixture.Policies.AddGrammarText);
        }

        [Test]
        public void should_not_show_the_add_grammar_text_for_mandatory_auto_selection()
        {
            var fixture = new FixtureStructure();
            fixture.Policies.SelectionMode = SelectionMode.MandatoryAutoSelect;

            new HolderTag(fixture).ToString().ShouldNotContain(fixture.Policies.AddGrammarText);
        }


        [Test]
        public void should_show_the_add_grammar_text_for_non_single_selection()
        {
            var fixture = new FixtureStructure();
            fixture.Policies.SelectionMode = SelectionMode.Any;

            new HolderTag(fixture).ToString().ShouldContain(fixture.Policies.AddGrammarText);
        }
    }
}