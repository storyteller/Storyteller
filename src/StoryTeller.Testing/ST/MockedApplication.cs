using NSubstitute;
using ST.Client;

namespace StoryTeller.Testing.ST
{
    public class MockedApplication : IApplication
    {

        public IRemoteController Remote { get; } = Substitute.For<IRemoteController>();
        public IClientConnector Client { get; } = Substitute.For<IClientConnector>();
        public IPersistenceController Persistence { get; } = Substitute.For<IPersistenceController>();
    }
}