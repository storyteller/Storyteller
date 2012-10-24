using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Testing.UI.Actions
{
    [TestFixture]
    public class when_clearing_transient_commands : InteractionContext<ShellService>
    {
        private ScreenAction[] actions;

        protected override void beforeEach()
        {
            actions = new[]
            {
                new ScreenAction(),
                new ScreenAction(),
                new ScreenAction()
            };

            MockFor<IScreenObjectRegistry>().Expect(x => x.Actions).Return(actions).Repeat.Any();


            ClassUnderTest.ClearTransient();
        }

        [Test]
        public void should_clear_transient_commands_out_of_shortcut_registry()
        {
            MockFor<IScreenObjectRegistry>().AssertWasCalled(x => x.ClearTransient());
        }

        [Test]
        public void should_replace_the_options()
        {
            MockFor<IOptionsMenu>().AssertWasCalled(x => x.Refill(actions));
        }

        [Test]
        public void should_reset_the_command_bar()
        {
            MockFor<ICommandBar>().AssertWasCalled(x => x.Refill(actions));
        }
    }


    [TestFixture]
    public class when_resetting_the_menu_options : InteractionContext<ShellService>
    {
        private ScreenAction[] actions;

        protected override void beforeEach()
        {
            actions = new[]
            {
                new ScreenAction(),
                new ScreenAction(),
                new ScreenAction()
            };

            MockFor<IScreenObjectRegistry>().Expect(x => x.Actions).Return(actions).Repeat.Any();


            ClassUnderTest.ActivateScreen(MockFor<IScreen>());
        }

        [Test]
        public void should_clear_previous_transient_commands_from_action_registry()
        {
            MockFor<IScreenObjectRegistry>().AssertWasCalled(x => x.ClearTransient());
        }

        [Test]
        public void should_have_the_screen_rebuild_the_menus()
        {
            var registry = MockFor<IScreenObjectRegistry>();
            MockFor<IScreen>().AssertWasCalled(x => x.Activate(registry));
        }

        [Test]
        public void should_replace_the_options()
        {
            MockFor<IOptionsMenu>().AssertWasCalled(x => x.Refill(actions));
        }

        [Test]
        public void should_reset_the_command_bar()
        {
            MockFor<ICommandBar>().AssertWasCalled(x => x.Refill(actions));
        }
    }
}