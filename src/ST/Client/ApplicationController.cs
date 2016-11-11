using System.Threading.Tasks;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ApplicationController : IApplication, IListener<SystemRecycled>,
        IListener<SystemRecycleStarted>,
        IListener<QueueState>
    {
        private readonly OpenInput _input;
        public IPersistenceController Persistence { get; private set; }
        public IFixtureController Fixtures { get; private set; }
        public IClientConnector Client { get; private set; }
        public IEngineController Engine { get; }
        public IWebApplicationRunner Website { get; }

        public Task<SystemRecycled> Startup { get; private set; }


        public ApplicationController(OpenInput input, IEngineController engine, IWebApplicationRunner website)
        {
            _input = input;
            Engine = engine;
            Website = website;
        }

        public void Start()
        {
            Engine.AssertValid();
            Client = Website.Start(this);

            var starting = Engine.Start();

            Engine.AddListener(Client);

            Persistence = new PersistenceController(Client, new SpecFileWatcher());
            Persistence.StartWatching(_input.SpecPath);
            Engine.Messaging.AddListener(Persistence);

            Fixtures = new FixtureController(Client, new FixtureFileWatcher());
            Fixtures.StartWatching(_input.FixturePath);
            Engine.Messaging.AddListener(Fixtures);

            Engine.Messaging.AddListener(this);

            Startup = starting.ContinueWith(t =>
            {
                t.Result.WriteSystemUsage();

                Fixtures.RecordSystemFixtures(t.Result);

                return t.Result;
            });
        }

        public SystemRecycled LatestSystemRecycled
        {
            get
            {
                var recycled = Engine.LatestSystemRecycled ?? Startup.Result;
                recycled.properties["Spec Directory"] = _input.SpecPath;

                recycled.fixtures = Fixtures.CombinedFixtures();

                return recycled;
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                Persistence?.Dispose();
                Website?.Dispose();
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }

        public void Receive(QueueState message)
        {
            Client.SendMessageToClient(message);
        }

        public void Receive(SystemRecycled message)
        {
            message.WriteSystemUsage();

            Fixtures.RecordSystemFixtures(message);
            message.fixtures = Fixtures.CombinedFixtures();

            Client.SendMessageToClient(message);
        }

        public void Receive(SystemRecycleStarted message)
        {
            Client.SendMessageToClient(message);
        }
    }
}