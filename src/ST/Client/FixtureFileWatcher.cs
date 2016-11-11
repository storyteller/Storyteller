using System;
using Baseline;
using StoryTeller.Files;

namespace ST.Client
{
    public interface IFixtureFileWatcher : IDisposable
    {
        void Latch(Action action);
        void StartWatching(string path, IFixtureFileObserver observer);
    }

    public class FixtureFileWatcher : IFixtureFileWatcher, IChangeSetHandler
    {
        private FileChangeWatcher _watcher;
        private IFixtureFileObserver _observer;
        private bool _latched;

        public void Handle(ChangeSet changes)
        {
            changes.Changed.Each(x =>
            {
                if (!_latched) _observer.Changed(x.Path);
            });

            changes.Deleted.Each(x =>
            {
                if (!_latched) _observer.Deleted(x);
            });


            changes.Added.Each(x =>
            {
                if (!_latched) _observer.Added(x.Path);
            });
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }

        public void Latch(Action action)
        {
            _latched = true;

            try
            {
                _watcher.Latch(action);
            }
            finally
            {
                _latched = false;
            }
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
