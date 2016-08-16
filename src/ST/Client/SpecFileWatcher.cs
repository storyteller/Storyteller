using System;
using Baseline;
using ST.Files;

namespace ST.Client
{
    public class SpecFileWatcher : ISpecFileWatcher, IChangeSetHandler
    {
        private ISpecFileObserver _observer;
        private FileChangeWatcher _watcher;

        public void Handle(ChangeSet changes)
        {
            changes.Changed.Each(x => _observer.Changed(x.Path));
            changes.Deleted.Each(x => _observer.Deleted(x));
            changes.Added.Each(x => _observer.Added(x.Path));
        }

        public void Dispose()
        {
            _watcher.Dispose();
        }


        public void WriteFiles(Action action)
        {
            _watcher.Latch(action);
        }

        public void StartWatching(string path, ISpecFileObserver observer)
        {
            var fullPath = path.ToFullPath();
            _watcher = new FileChangeWatcher(fullPath, FileSet.Deep("*.xml"), this);
            _watcher.Start();

            _observer = observer;
        }
    }
}