using System.Collections.Generic;
using Bottles;
using Bottles.Diagnostics;

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

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _controller.StartWatching(_context.SpecPath);
        }
    }
}