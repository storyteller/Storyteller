using System.Collections.Generic;
using Bottles;
using Bottles.Diagnostics;

namespace ST.Client
{
    public class StartWatchingAssets : IActivator
    {
        private readonly AssetFileWatcher _watcher;

        public StartWatchingAssets(AssetFileWatcher watcher)
        {
            _watcher = watcher;
        }

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _watcher.Start();
        }
    }
}