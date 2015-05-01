using System;
using System.IO;

namespace ST.Docs.Runner
{
    public class TopicFileWatcher : IDisposable
    {
        private readonly DocSettings _settings;
        private FileSystemWatcher _watcher;

        public TopicFileWatcher(DocSettings settings)
        {
            _settings = settings;
            _watcher = new FileSystemWatcher(_settings.Root, "*.*")
            {
                IncludeSubdirectories = true
                
            };
        }

        public void StartWatching(IBrowserRefresher refresher)
        {
            FileSystemEventHandler handler = (sender, e) => refresher.RefreshPage();

            _watcher.Changed += handler;
            _watcher.Created += handler;

            _watcher.EnableRaisingEvents = true;
        }


        public void Dispose()
        {
            _watcher.Dispose();
        }
    }
}