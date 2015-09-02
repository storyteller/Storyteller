using FubuMVC.Core;
using FubuMVC.Core.Diagnostics.Packaging;

namespace ST.Client
{
    public class StartWatchingFilesActivator : IActivator
    {
        private readonly IPersistenceController _controller;
        private readonly StorytellerContext _context;

        public StartWatchingFilesActivator(IPersistenceController controller, StorytellerContext context)
        {
            _controller = controller;
            _context = context;
        }

        public void Activate(IActivationLog log, IPerfTimer timer)
        {
            _controller.StartWatching(_context.SpecPath);
            _context.AddRemoteListener(_controller);
        }
    }
}