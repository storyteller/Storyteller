using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine.Constraints;

namespace StoryTeller.Testing.Engine.Constraints
{
    [TestFixture]
    public class PoliciesTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            model = new Policies();
        }

        #endregion

        private Policies model;
        private readonly IStep[] emptySteps = new IStep[0];

        [Test]
        public void can_choose_fixture_is_always_false_if_it_is_private()
        {
            var test = new Test("something");

            model.IsPrivate = false;
            model.CanChooseFixture(test).ShouldBeTrue();

            model.IsPrivate = true;
            model.CanChooseFixture(test).ShouldBeFalse();
        }

        [Test]
        public void hide_grammars()
        {
            model.CanChooseGrammar("grammar1", emptySteps).ShouldBeTrue();

            model.HideGrammar("grammar1");

            model.CanChooseGrammar("grammar1", emptySteps).ShouldBeFalse();


            model.CanChooseGrammar("grammar2", emptySteps).ShouldBeTrue();
        }

        [Test]
        public void tag_and_retrieve_by_grammar()
        {
            model.Tag("a", "1");
            model.Tag("a", "2");
            model.Tag("a", "3");
            model.Tag("b", "4");
            model.Tag("b", "4");
            model.Tag("b", "5");
            model.Tag("c", "1");

            model.Tags("a").ShouldHaveTheSameElementsAs("1", "2", "3");
            model.Tags("b").ShouldHaveTheSameElementsAs("4", "5");
        }

        [Test]
        public void tag_and_retrieve_the_main()
        {
            model.Tag("a");
            model.Tag("a");
            model.Tag("a");
            model.Tag("b");
            model.Tag("c");
            model.Tag("c");

            model.Tags().ShouldHaveTheSameElementsAs("a", "b", "c");
            model.Tags().Count().ShouldEqual(3);
        }
    }
}