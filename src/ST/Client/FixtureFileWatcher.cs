using System;
using Baseline;
using StoryTeller.Files;

namespace ST.Client
{
    public interface IFixtureFileWatcher : IDisposable
    {
        void WriteFiles(Action action);
        void StartWatching(string path, IFixtureFileObserver observer);
    }

    public class FixtureFileWatcher : IFixtureFileWatcher, IChangeSetHandler
    {
        private FileChangeWatcher _watcher;
        private IFixtureFileObserver _observer;

        public void Handle(ChangeSet changes)
        {
            changes.Changed.Each(x => _observer.Changed(x.Path));
            changes.Deleted.Each(x => _observer.Deleted(x));
            changes.Added.Each(x => _observer.Added(x.Path));
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }

        public void WriteFiles(Action action)
        {
            _watcher.Latch(action);
        }

        public void StartWatching(string path, IFixtureFileObserver observer)
        {
            var fullPath = path.ToFullPath();
            _watcher = new FileChangeWatcher(fullPath, FileSet.Deep("*.md"), this);
            _watcher.Start();

            _observer = observer;
        }
    }
}
