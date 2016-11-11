using NSubstitute;
using StoryTeller.Remotes;
using ST.Client;

namespace StoryTeller.Testing.ST
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
    }
}