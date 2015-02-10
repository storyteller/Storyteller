using System.Threading.Tasks;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;

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
            _hierarchy = _input.ReadHierarchy();
        }

        public void WaitForResults()
        {
            Task.WhenAll(_startup, _hierarchy).Wait();
        }

        public Task<SystemRecycled> Startup
        {
            get { return _startup; }
        }

        public Task<Suite> Hierarchy
        {
            get { return _hierarchy; }
        }
    }
}