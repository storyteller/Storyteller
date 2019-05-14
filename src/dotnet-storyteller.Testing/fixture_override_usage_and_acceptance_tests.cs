using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using ST.Client;
using Xunit;

namespace dotnet_storyteller.Testing
{
    public class fixture_override_usage_and_acceptance_tests : IDisposable
    {
        private readonly string folder = TestingContext.FindParallelDirectory("Storyteller.Samples");
        private readonly LocalEngine theEngine = new LocalEngine();
        private readonly StubWebApp theWebApp = new StubWebApp();
        private ApplicationController _controller;
        private readonly IFileSystem _fileSystem = new FileSystem();
        private readonly string fixtureFolder = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());

        public ApplicationController theApplication
        {
            get
            {
                if (_controller == null)
                {
                    var input = new OpenInput
                    {
                        PathFlag = folder,
                        FixturesFlag = fixtureFolder
                    };

                    _controller = new ApplicationController(input, theEngine, theWebApp);
                }

                _controller.Start();

                _controller.Startup.Wait(); // shouldn't be necessary, but still

                return _controller;
            }
        }

        private void withFixtureFile(string fixtureKey, string contents)
        {
            var file = fixtureFolder.AppendPath(fixtureKey + ".md");
            _fileSystem.WriteStringToFile(file, contents);
        }

        private FixtureModel find(string key)
        {
            return theApplication.LatestSystemRecycled.fixtures.FirstOrDefault(x => x.key == key);
        }

        private FixtureModel find<T>() where T : Fixture, new()
        {
            return find(new T().Key);
        }

        public void Dispose()
        {
            theApplication.Fixtures.Dispose();

            try
            {
                _fileSystem.CleanDirectory(fixtureFolder);
                _fileSystem.DeleteDirectory(fixtureFolder);
            }
            catch (Exception)
            {
                // nothing
            }
        }

        [Fact]
        public void override_a_fixture_title()
        {
            withFixtureFile("Overridden", @"
# Overridden Title
");

            find<OverriddenFixture>().title.ShouldBe("Overridden Title");
        }

        [Fact]
        public void all_new_fixture_in_overrides()
        {
            withFixtureFile("AllNew", @"
# All New Fixture

## Go
### Go do things
");

            var fixture = find("AllNew");
            fixture.ShouldNotBeNull();
            fixture.title.ShouldBe("All New Fixture");
            fixture.FindGrammar("Go").ShouldBeOfType<Sentence>();
        }

        [Fact]
        public void existing_grammar_in_system_that_does_not_exist_in_override()
        {
            withFixtureFile("Overridden", @"
# Overridden Title
");

            var fixture = find<OverriddenFixture>();
            fixture.FindGrammar("SayTheThing").ShouldNotBeNull();
        }

        [Fact]
        public void existing_fixture_that_does_not_exist_in_overrides()
        {
            find<SystemFixture>().ShouldNotBeNull();
        }

        [Fact]
        public void add_new_grammar_to_override()
        {
            withFixtureFile("Overridden", @"
## GoFaster
### Go even faster
");

            find<OverriddenFixture>().FindGrammar("GoFaster")
                .ShouldBeOfType<Sentence>()
                .format.ShouldBe("Go even faster");
                
        }

        [Fact]
        public void override_the_format_of_a_sentence()
        {
            withFixtureFile("Overridden", @"
## SayTheThing
### I don't want to say the thing
");

            find<OverriddenFixture>().FindGrammar("SayTheThing")
                .ShouldBeOfType<Sentence>()
                .format.ShouldBe("I don't want to say the thing");
        }

    }

    public class SystemFixture : Fixture
    {
        
    }

    public class OverriddenFixture : Fixture
    {
        public OverriddenFixture()
        {
            Title = "Original Title";
        }

        public void SayTheThing()
        {
            // it's from a children's book I'm having to read my toddler
            // every night:/
        }
    }

    public class StubWebApp : IWebApplicationRunner
    {
        public readonly IClientConnector Client = Substitute.For<IClientConnector>();

        public void Dispose()
        {
        }

        public IClientConnector Start(IApplication application, WebApplicationConfiguration additionalConfiguration)
        {
            return Client;
        }

        public string BaseAddress { get; } = "http://localhost:5000";
    }

    public class LocalEngine : IEngineController
    {
        public SystemRecycled LatestSystemRecycled { get; private set; }
        public IMessagingHub Messaging { get; } = EventAggregator.Messaging;
        public void SendJsonMessage(string json)
        {
        }

        public void AddListener(object listener)
        {
            Messaging.AddListener(listener);
        }

        public Task<SystemRecycled> Recycle()
        {
            throw new System.NotImplementedException();
        }

        public void SendMessage<T>(T message)
        {
            throw new System.NotImplementedException();
        }

        public ResponseExpression Send<T>(T message)
        {
            throw new System.NotImplementedException();
        }

        public void Teardown()
        {
        }

        public Task<SystemRecycled> Start()
        {
            var library = new FixtureLibrary()
                .With<OverriddenFixture>()
                .With<SystemFixture>();
            

            var recycled = new SystemRecycled
            {
                fixtures = library.Fixtures.Select(x => x.Compile(CellHandling.Basic())).ToArray()
            };

            LatestSystemRecycled = recycled;

            return Task.FromResult(recycled);
        }

        public void AssertValid()
        {
        }
    }
}
