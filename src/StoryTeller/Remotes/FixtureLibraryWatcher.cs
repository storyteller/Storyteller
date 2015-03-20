using System;
using System.IO;

namespace StoryTeller.Remotes
{
    public class FixtureLibraryWatcher : IDisposable
    {
        private readonly Action _callback;
        private DateTime _lastUpdate;
        private FileSystemWatcher _watcher;

        public FixtureLibraryWatcher(Action callback)
        {
            _callback = callback;
        }

        public void WatchBinariesAt(string directory)
        {
            cleanUpWatcher();

            // TODO -- also watch for changes to *.config files?
            _watcher = new FileSystemWatcher(directory, "*.dll");
            _watcher.Changed += fileChanged;
            _watcher.IncludeSubdirectories = true;
            _watcher.EnableRaisingEvents = true;
            _watcher.NotifyFilter = NotifyFilters.LastWrite;

            _lastUpdate = DateTime.Now;
        }

        private void fileChanged(object sender, FileSystemEventArgs e)
        {
            if (DateTime.Now.Subtract(_lastUpdate).TotalSeconds < 3)
            {
                return;
            }

            _callback();
            _lastUpdate = DateTime.Now;
        }

        private void cleanUpWatcher()
        {
            if (_watcher == null)
            {
                return;
            }

            try
            {
                _watcher.Changed -= fileChanged;
                _watcher.EnableRaisingEvents = false;
                _watcher.Dispose();
            }
            catch (Exception)
            {
            }
        }

        public void Dispose()
        {
            cleanUpWatcher();
        }
    }
}