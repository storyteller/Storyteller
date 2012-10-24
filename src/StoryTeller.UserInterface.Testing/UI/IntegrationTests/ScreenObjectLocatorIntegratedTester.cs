using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Examples;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Tests;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.IntegrationTests
{
    [TestFixture, Explicit]
    public class ScreenObjectLocatorIntegratedTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            ProjectPersistor.DeleteHistoryFile();
            Bootstrapper.Restart();

            _objectLocator = ObjectFactory.GetInstance<IScreenObjectLocator>();
            factory = ObjectFactory.GetInstance<IScreenFactory>();

            DataMother.LoadMathProject();
        }

        [TearDown]
        public void TearDown()
        {
            ObjectFactory.ResetDefaults();
        }

        #endregion

        private IScreenObjectLocator _objectLocator;
        private IScreenFactory factory;

        [Test, Explicit]
        public void can_create_screen_for_a_test()
        {
            var test = new Test("the test");
            var subject = _objectLocator.BuildSubject(test).ShouldBeOfType<ScreenLocator<Test>>();
            var presenter = subject.CreateScreen(factory).ShouldBeOfType<TestScreen>();

            presenter.Test.ShouldBeTheSameAs(test);
        }


        [Test]
        public void can_create_screen_for_fixturelibrary()
        {
            var library = new FixtureLibrary();
            var subject = _objectLocator.BuildSubject(library).ShouldBeOfType<FixtureNodeSubject>();

            subject.Subject.ShouldBeTheSameAs(library);
            var presenter = subject.CreateScreen(factory).ShouldBeOfType<FixtureNodePresenter>();
            presenter.Subject.ShouldBeTheSameAs(library);
        }


        [Test, Ignore("until 3/20")]
        public void can_create_screen_for_hierarchy()
        {
            var hierarchy = new Hierarchy("the suite");
            ObjectFactory.Inject(hierarchy);

            var subject = _objectLocator.BuildSubject(hierarchy).ShouldBeOfType<ScreenLocator<Hierarchy>>();
            var presenter = subject.CreateScreen(factory).ShouldBeOfType<SuitePresenter>();

            presenter.Subject.ShouldBeTheSameAs(hierarchy);
        }

        [Test]
        public void can_create_screen_for_suite()
        {
            var suite = new Suite("the suite");
            var subject = _objectLocator.BuildSubject(suite).ShouldBeOfType<ScreenLocator<Suite>>();
            var presenter = subject.CreateScreen(factory).ShouldBeOfType<SuitePresenter>();

            presenter.Subject.ShouldBeTheSameAs(suite);
        }

        [Test]
        public void can_get_a_screen_subject()
        {
            _objectLocator.BuildSubject<QueueSubject>().ShouldBeOfType<QueueSubject>();
        }

        [Test]
        public void can_get_contextual_commands_for_a_TreeNode()
        {
            var node = new TreeNode(new Test("test1"));
            IEnumerable<IContextualAction> actions = _objectLocator.BuildActions(node);

            actions.Count(x => x is CollapseAllCommand).ShouldEqual(1);
            actions.Count(x => x is ExpandAllCommand).ShouldEqual(1);
        }
    }
}