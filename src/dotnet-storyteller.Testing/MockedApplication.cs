using NSubstitute;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using ST.Client;

namespace dotnet_storyteller.Testing
{
    public class MockedApplication : IApplication
    {

        public IEngineController Engine { get; } = Substitute.For<IEngineController>();
        public IClientConnector Client { get; } = Substitute.For<IClientConnector>();
        public IPersistenceController Persistence { get; } = Substitute.For<IPersistenceController>();
        public void Dispose()
        {
            
        }

        public SystemRecycled LatestSystemRecycled { get; set; }
        public IFixtureController Fixtures { get; } = Substitute.For<IFixtureController>();
        public QueueState QueueState { get; }
        public Batch BuildInitialModel()
        {
            throw new System.NotImplementedException();
        }
    }
}