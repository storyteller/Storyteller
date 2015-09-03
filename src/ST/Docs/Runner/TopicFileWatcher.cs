using System;
using FubuCore;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Runner
{
    public class TopicFileWatcher : IDisposable, IChangeSetHandler
    {
        private readonly DocSettings _settings;
        private FileChangeWatcher _watcher;
        private IBrowserRefresher _refresher;

        public TopicFileWatcher(DocSettings settings)
        {
            _settings = settings;
        }

        public void StartWatching(IBrowserRefresher refresher)
        {
            _refresher = refresher;

            _watcher = new FileChangeWatcher(_settings.Root, FileSet.Deep("*.*"), this);
            _watcher.Start();
        }


        public void Dispose()
        {
            _watcher.Dispose();
        }

        void IChangeSetHandler.Handle(ChangeSet changes)
        {
            _refresher.RefreshPage();
        }
    }
}