using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
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
                        Path = folder,
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
    }

    public class OverriddenFixture : Fixture
    {
        public OverriddenFixture()
        {
            Title = "Original Title";
        }
    }

    public class StubWebApp : IWebApplicationRunner
    {
        public readonly IClientConnector Client = Substitute.For<IClientConnector>();

        public void Dispose()
        {
        }

        public IClientConnector Start(IApplication application)
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
                .With<OverriddenFixture>();
            

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