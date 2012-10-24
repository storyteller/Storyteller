using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Examples;

namespace StoryTeller.UserInterface.Testing.UI.Examples
{
    [TestFixture]
    public class when_activating_the_fixture_node_presenter : InteractionContext<FixtureNodePresenter>
    {
        private FixtureStructure fixture;

        protected override void beforeEach()
        {
            fixture = new FixtureStructure("Math");
            Services.Inject<IFixtureNode>(fixture);


            ThePresenter.Activate(null);
        }

        public FixtureNodePresenter ThePresenter { get { return ClassUnderTest; } }


    }

}