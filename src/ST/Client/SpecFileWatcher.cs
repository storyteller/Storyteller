using System;
using System.IO;
using FubuCore;

namespace ST.Client
{
    public class SpecFileWatcher : ISpecFileWatcher
    {
        private FileSystemWatcher _watcher;

        public void Dispose()
        {
            _watcher.EnableRaisingEvents = false;
            _watcher.Dispose();
        }

        public class Latch : IDisposable
        {
            private readonly SpecFileWatcher _parent;

            public Latch(SpecFileWatcher parent, string file)
            {
                _parent = parent;
                if (_parent._watcher != null) _parent._watcher.EnableRaisingEvents = false;
            }

            public void Dispose()
            {
                if (_parent._watcher != null) _parent._watcher.EnableRaisingEvents = true;
            }
        }

        public IDisposable LatchFile(string file)
        {
            return new Latch(this, file);
        }

        public void StartWatching(string path, ISpecFileObserver observer)
        {
            var fullPath = path.ToFullPath();
            _watcher = new FileSystemWatcher(fullPath, "*.xml");
            _watcher.IncludeSubdirectories = true;
            _watcher.Changed += (sender, args) =>
            {
                observer.Changed(args.FullPath);
            };

            _watcher.Deleted += (sender, args) =>
            {
                observer.Deleted(args.FullPath);
            };

            _watcher.Created += (sender, args) =>
            {
                observer.Added(args.FullPath);
            };

            _watcher.EnableRaisingEvents = true;
        }
    }
}