using System.Threading.Tasks;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class StorytellerContext
    {
        private readonly RemoteController _controller;
        private readonly OpenInput _input;
        private Task<SystemRecycled> _startup;
        private Task<Suite> _hierarchy;

        public StorytellerContext(RemoteController controller, OpenInput input)
        {
            _controller = controller;
            _input = input;
        }

        public void Start()
        {
            _startup = _controller.Start(EngineMode.Interactive).ContinueWith(t =>
            {
                t.Result.WriteSystemUsage();

                return t.Result;
            });
        }

        public void AddRemoteListener(object listener)
        {
            _controller.Messaging.AddListener(listener);
        }

        public void WaitForResults()
        {
            _startup.Wait();
        }

        public string SpecPath
        {
            get { return _input.SpecPath; }
        }


        public Task<SystemRecycled> Startup
        {
            get { return _startup; }
        }
    }
}