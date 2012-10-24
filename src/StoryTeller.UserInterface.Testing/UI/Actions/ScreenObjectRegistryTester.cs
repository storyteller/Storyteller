using System.Linq;
using System.Windows;
using System.Windows.Input;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Screens;
using StoryTeller.Workspace;
using StructureMap.AutoMocking;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.UserInterface.Testing.UI.Actions
{
    [TestFixture]
    public class when_removing_transient_actions : InteractionContext<ScreenObjectRegistry>
    {
        private int initial;
        private Window window;

        protected override void beforeEach()
        {
            window = new Window();
            Services.Inject(window);

            ClassUnderTest.Action("old").Bind(Key.F2).PublishEvent<ForceBinaryRecycle>().Permanent();
            initial = ClassUnderTest.Actions.Count();
            ClassUnderTest.Action("new").Bind(Key.F1).PublishEvent<ForceBinaryRecycle>();

            ClassUnderTest.Actions.Count().ShouldEqual(initial + 1);
            ClassUnderTest.ClearTransient();
        }


        [Test]
        public void clear_removes_the_additional_shortcuts()
        {
            ClassUnderTest.Actions.FirstOrDefault(x => x.Name == "new").ShouldBeNull();
            ClassUnderTest.Actions.Count().ShouldEqual(initial);
        }

        [Test]
        public void the_transient_actions_are_removed_from_the_windows_input_bindings()
        {
            window.InputBindings.Count.ShouldEqual(initial);
        }
    }

    [TestFixture]
    public class ScreenObjectRegistryTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            container = new AutoMockedContainer();
            shell = container.GetInstance<IApplicationShell>();
            registry = new ScreenObjectRegistry(new Window(), container, shell);
        }

        #endregion

        private AutoMockedContainer container;
        private ScreenObjectRegistry registry;
        private IApplicationShell shell;

        [Test]
        public void adding_additional_shortcut_should_not_be_permanent()
        {
            registry.Action("new").Bind(Key.F1).PublishEvent<ForceBinaryRecycle>();
            registry.Actions.First(x => x.Name == "new").IsPermanent.ShouldBeFalse();
        }

        [Test]
        public void clear_objects_from_the_explorer_pane()
        {
            var leftObject1 = new object();
            var leftObject2 = new object();

            registry.PlaceInExplorerPane(leftObject1, "some text");
            registry.PlaceInExplorerPane(leftObject2, "some text");

            registry.ClearTransient();

            shell.AssertWasCalled(x => x.RemoveFromExplorerPane(leftObject1));
            shell.AssertWasCalled(x => x.RemoveFromExplorerPane(leftObject2));
        }

        [Test]
        public void place_an_object_into_the_explorer_pane()
        {
            var leftObject = new object();

            registry.PlaceInExplorerPane(leftObject, "some text");

            shell.AssertWasCalled(x => x.PlaceInExplorerPane(leftObject, "some text"));
        }

        [Test]
        public void register_a_command_for_opening_a_screen()
        {
            var subject = new SingletonScreenSubject<QueuePresenter>();
            container.Inject(subject);

            registry.CommandForScreen<QueuePresenter>().Execute(null);

            container.GetInstance<IScreenConductor>().AssertWasCalled(x => x.OpenScreen(subject));
        }

        [Test]
        public void registering_a_command_for_a_dialog_command()
        {
            registry.CommandForDialog<AddTestCommand>().Execute(null);

            container.GetInstance<IDialogLauncher>().AssertWasCalled(x => x.LaunchForCommand<AddTestCommand>());
        }

        [Test]
        public void registering_a_command_for_raising_event()
        {
            registry.CommandForEvent<ReloadTestsMessage>().Execute(null);

            container.GetInstance<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new ReloadTestsMessage()),
                                                                      x => x.Constraints(Is.NotNull()));
        }
    }
}