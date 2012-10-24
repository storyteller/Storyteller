using System;
using System.Windows;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Eventing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Testing.UI.Exploring;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.IntegrationTests
{
    [TestFixture]
    public class BootstrapperTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            ProjectHistory history = DataMother.HistoryPointingToMathProject();
            new ProjectPersistor().SaveHistory(history);


            Bootstrapper.BootstrapShell(false);
            shell = (Shell) ObjectFactory.GetInstance<IApplicationShell>();


            ObjectFactory.Configure(x =>
            {
                x.For<Window>().Use(() =>
                {
                    window = new Window();
                    window.Show();

                    return window;
                });
            });
        }

        [TearDown]
        public void TearDown()
        {
            if (window != null)
            {
                window.Close();
                window = null;
            }
        }

        #endregion

        private Window window;

        private Shell shell;

        [Test]
        public void can_get_the_shell_parts()
        {
            ObjectFactory.GetInstance<IApplicationShell>().ShouldNotBeNull();
            ObjectFactory.GetInstance<IScreenCollection>().ShouldNotBeNull();
        }

        [Test]
        public void can_request_the_errors_screen()
        {
            DataMother.LoadMathProject();
            var factory = ObjectFactory.GetInstance<IScreenFactory>();
            ObjectFactory.GetInstance<GrammarErrorsSubject>().CreateScreen(factory).ShouldNotBeNull();
        }

        [Test, Explicit]
        public void has_the_suite_and_test_nodes_for_the_math_project()
        {
            shell.HierarchyNode.Text.ShouldEqual("Math");
            shell.HierarchyNode.ShouldNotBeNull();
            new TreeNodeSpecification(
                @"
workspacesuite:Adding
test:Adding/Bad Add 1
test:Adding/Good Add 1
test:Adding/Good Add 2
workspacesuite:EmptySuite
workspacesuite:Mixed
suite:Mixed/SubMixed
test:Mixed/SubMixed/Sub Mixed 1
test:Mixed/SubMixed/Sub Mixed 2
test:Mixed/SubMixed/SubMixedThatThrows
test:Mixed/Mixed 1
workspacesuite:Multiplication
test:Multiplication/Bad Multiply 1
test:Multiplication/Good Multiply 1
test:Multiplication/Good Multiply 2
test:Bad Add at Top
test:Good Add at Top
")
                .AssertMatch(shell.HierarchyNode);
        }

        [Test]
        public void register_all_types_that_implement_an_IListener_interface_with_the_event_aggregator()
        {
            var listener = ObjectFactory.GetInstance<AListener>();
            var aggregator = ObjectFactory.GetInstance<IEventAggregator>() as EventAggregator;

            aggregator.HasListener(listener).ShouldBeTrue();
        }

        [Test]
        public void register_all_types_that_implement_iclosable_interface_with_the_event_aggregator()
        {
            var closeable = ObjectFactory.GetInstance<Closeable>();
            var aggregator = ObjectFactory.GetInstance<IEventAggregator>() as EventAggregator;

            aggregator.HasListener(closeable).ShouldBeTrue();
        }

        [Test]
        public void register_all_types_that_implement_the_ITestListener_interface_with_the_event_aggregator()
        {
            var stub = ObjectFactory.GetInstance<ExecutionEngineIntegratedTester.StubTestListener>();
            var aggregator = ObjectFactory.GetInstance<IEventAggregator>() as EventAggregator;

            aggregator.HasListener(stub).ShouldBeTrue();
        }


        [Test]
        public void should_have_the_test_explorer_and_fixture_explorer_registered_as_listeners()
        {
            var fixtures = ObjectFactory.GetInstance<FixtureExplorer>();
            var tests = ObjectFactory.GetInstance<ITestExplorer>();

            var aggregator = SpecificationExtensions.As<EventAggregator>(ObjectFactory.GetInstance<IEventAggregator>());

            aggregator.HasListener(fixtures).ShouldBeTrue();
            aggregator.HasListener(tests).ShouldBeTrue();
        }

        [Test]
        public void smoke_test_the_dialog_auto_registration()
        {
            var launcher = ObjectFactory.GetInstance<IDialogLauncher>();
            var command = ObjectFactory.With(new Suite("suite")).GetInstance<IAddTestCommand>();
            launcher.ShouldBeOfType<DialogLauncher>().BuildDialog(command).ShouldNotBeNull();
        }
    }

    public class Closeable : ICloseable
    {
        #region ICloseable Members

        public void AddCanCloseMessages(CloseToken token)
        {
            throw new NotImplementedException();
        }

        public void PerformShutdown()
        {
            throw new NotImplementedException();
        }

        #endregion
    }

    public class AListener : IListener<string>
    {
        #region IListener<string> Members

        public void Handle(string message)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}