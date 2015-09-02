using FubuMVC.Core;
using FubuMVC.Core.Diagnostics.Packaging;

namespace ST.Client
{
    public class StartWatchingAssets : IActivator
    {
        private readonly AssetFileWatcher _watcher;

        public StartWatchingAssets(AssetFileWatcher watcher)
        {
            _watcher = watcher;
        }

        public void Activate(IActivationLog log, IPerfTimer timer)
        {
            _watcher.Start();
        }
    }
}