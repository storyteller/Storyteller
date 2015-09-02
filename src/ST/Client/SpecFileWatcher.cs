using System;
using System.Collections.Generic;
using System.IO;
using FubuCore;
using FubuMVC.Core.Runtime.Files;

namespace ST.Client
{
    public class SpecFileWatcher : ISpecFileWatcher, IChangeSetHandler
    {
        private FileChangeWatcher _watcher;
        private ISpecFileObserver _observer;

        public void Dispose()
        {
            _watcher.Dispose();
        }


        public void WriteFiles(Action action)
        {
            _watcher.Latch(action);
        }

        public void Handle(ChangeSet changes)
        {
            changes.Changed.Each(x => _observer.Changed(x.Path));
            changes.Deleted.Each(x => _observer.Deleted(x));
            changes.Added.Each(x => _observer.Added(x.Path));
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