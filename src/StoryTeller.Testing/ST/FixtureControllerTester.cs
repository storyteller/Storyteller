using System;
using System.IO;
using System.Linq;
using Baseline;
using NSubstitute;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class FixtureControllerTester : IDisposable
    {
        private readonly string theFixtureDirectory = Path.GetTempPath().AppendPath(Guid.NewGuid().ToString());
        private readonly IClientConnector theClient = Substitute.For<IClientConnector>();
        private FixtureController theController;

        public FixtureControllerTester()
        {
            Directory.CreateDirectory(theFixtureDirectory);
            theController = new FixtureController(theClient, new StubFixtureFileWatcher());
            theController.StartWatching(theFixtureDirectory);
        }

        public void Dispose()
        {
            try
            {
                Directory.Delete(theFixtureDirectory, true);
            }
            catch (Exception)
            {
                // Nothing
            }
        }

        [Fact]
        public void can_create_a_new_fixture_file_if_it_does_not_exist()
        {
            theController.CreateFixture("One");

            var file = theFixtureDirectory.AppendPath("One.md");
            File.Exists(file).ShouldBeTrue();

            var fixture = FixtureReader.ReadFromFile(file);
            fixture.key.ShouldBe("One");
            fixture.title.ShouldBe("One");

            theClient.ReceivedWithAnyArgs().SendMessageToClient(new FixturesReloaded());

        }

        [Fact]
        public void does_not_overwrite_an_existing_fixture()
        {
            var file = theFixtureDirectory.AppendPath("One.md");
            var original = new FixtureModel("One") {title = "a fancier title"};
            FixtureWriter.Write(original, file);

            theController.CreateFixture("One");

            FixtureReader.ReadFromFile(file)
                .title.ShouldBe(original.title);

            theClient.ReceivedCalls().Any().ShouldBeFalse();
        }
    }

    public class StubFixtureFileWatcher : IFixtureFileWatcher
    {
        public void Dispose()
        {
            // nothing
        }

        public void Latch(Action action)
        {
            action();
        }

        public void StartWatching(string path, IFixtureFileObserver observer)
        {
            // nothing
        }
    }
}