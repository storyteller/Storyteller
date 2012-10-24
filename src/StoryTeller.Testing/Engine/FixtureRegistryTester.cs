/*using System.Linq;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Samples;
using StructureMap.Query;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class FixtureRegistryTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            registry = new FixtureRegistry();
            _context = null;
        }

        #endregion

        private FixtureRegistry registry;

        private TestContext _context;

        private TestContext context
        {
            get
            {
                if (_context == null)
                {
                    _context = new TestContext(registry.AddFixturesToContainer());
                }

                return _context;
            }
        }

        [Test]
        public void adds_all_the_startup_actions_from_the_requested_assembly()
        {
            registry.AddFixturesFromAssemblyContaining<SetUserAction>();
            var container = registry.AddFixturesToContainer();

            var actions = container.Model.For<IStartupAction>();

            var setupAction = actions.Instances.FirstOrDefault(i => i.ConcreteType == typeof(SetUserAction));
            setupAction.ShouldNotBeNull();
            setupAction.Name.ShouldEqual("SetUser");

            var startWebApp = actions.Instances.FirstOrDefault(i => i.ConcreteType == typeof (StartWebAppAction));
            startWebApp.Name.ShouldEqual("StartWebApp");

        }

        [Test]
        public void add_all_fixtures_from_specified_assembly()
        {
            registry.AddFixturesFromAssemblyContaining<SomethingFixture>();

            context.LoadFixture("Something", new StubTestPart());

            context.FindGrammar("DoSomething").ShouldBeOfType<ActionMethodGrammar>();
        }

        [Test]
        public void add_all_fixtures_from_this_assembly()
        {
            registry.AddFixturesFromThisAssembly();

            context.LoadFixture("Something", new StubTestPart());

            context.FindGrammar("DoSomething").ShouldBeOfType<ActionMethodGrammar>();
        }

        [Test]
        public void add_fixture_directly()
        {
            registry.AddFixture<SomethingFixture>();

            context.LoadFixture("Something", new StubTestPart());

            context.FindGrammar("DoSomething").ShouldBeOfType<ActionMethodGrammar>();
        }

        [Test]
        public void set_up_a_test_context_and_activate_a_fixture_by_alias()
        {
            registry.AliasFixture<SomethingFixture>("a");
            registry.AliasFixture<SomethingElseFixture>("b");

            context.LoadFixture("a", new StubTestPart());

            context.FindGrammar("DoSomething").ShouldBeOfType<ActionMethodGrammar>();

            context.LoadFixture("b", new StubTestPart());
            context.FindGrammar("Go").ShouldBeOfType<ValueCheckMethod>();
        }
    }
}*/