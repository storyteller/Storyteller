using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.Screens
{
    public class StubTestScreen : IScreen<Test>
    {
        private readonly Test _test;

        public StubTestScreen(Test test)
        {
            _test = test;
        }

        #region IScreen<Test> Members

        public object View { get { throw new NotImplementedException(); } }

        public string Title { get { throw new NotImplementedException(); } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            throw new NotImplementedException();
        }

        public bool CanClose()
        {
            throw new NotImplementedException();
        }

        public Test Subject { get { return _test; } }

        public void Dispose()
        {
        }

        #endregion
    }

    [TestFixture]
    public class ScreenFactoryTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var container = new Container(x => { x.For<IScreen<Test>>().Use<StubTestScreen>(); });
            factory = new ScreenFactory(container);
        }

        #endregion

        private IScreenFactory factory;


        [Test]
        public void can_build_a_screen_with_a_subject()
        {
            var test = new Test("some test");
            factory.Build(test).ShouldBeOfType<StubTestScreen>().Subject.ShouldBeTheSameAs(test);
        }

        [Test]
        public void can_build_a_simple_screen()
        {
            factory.Build<StubScreen>().ShouldBeOfType<StubScreen>().ShouldNotBeNull();
        }
    }
}