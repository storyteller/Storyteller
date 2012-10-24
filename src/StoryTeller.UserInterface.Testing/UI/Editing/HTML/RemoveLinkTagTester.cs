using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class RemoveLinkTagTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void should_have_the_delete_step_class()
        {
            new RemoveLinkTag(new FixtureStructure()).ShouldHaveClass(GrammarConstants.DELETE_STEP);
        }

        [Test]
        public void text_for_multiple_selection_mode_should_be_delete()
        {
            var fixture = new FixtureStructure();
            fixture.Policies.SelectionMode = SelectionMode.Any;

            var tag = new RemoveLinkTag(fixture);
            tag.Text().ShouldEqual("delete");
        }

        [Test]
        public void text_for_single_selection_fixture_should_be_change()
        {
            var fixture = new FixtureStructure();
            fixture.Policies.SelectionMode = SelectionMode.Single;

            var tag = new RemoveLinkTag(fixture);
            tag.Text().ShouldEqual("change");
        }
    }
}