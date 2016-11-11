using NSubstitute;
using ST.Client;

namespace StoryTeller.Testing.ST
{
    public class MockedApplication : IApplication
    {

        public IEngineController Remote { get; } = Substitute.For<IEngineController>();
        public IClientConnector Client { get; } = Substitute.For<IClientConnector>();
        public IPersistenceController Persistence { get; } = Substitute.For<IPersistenceController>();
    }
}