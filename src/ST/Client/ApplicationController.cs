using System.Threading.Tasks;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class ApplicationController : IApplication
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

            Startup = Engine.Start().ContinueWith(t =>
            {
                t.Result.WriteSystemUsage();

                return t.Result;
            });

            Engine.AddListener(Client);

            Persistence = new PersistenceController(Client, new SpecFileWatcher());
            Persistence.StartWatching(_input.SpecPath);
            Engine.Messaging.AddListener(Persistence);

            Fixtures = new FixtureController(Client, new FixtureFileWatcher());
            Fixtures.StartWatching(_input.FixturePath);
            Engine.Messaging.AddListener(Fixtures);
        }

        public SystemRecycled LatestSystemRecycled
        {
            get
            {
                var recycled = Engine.LatestSystemRecycled ?? Startup.Result;
                recycled.properties["Spec Directory"] = _input.SpecPath;

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
    }
}