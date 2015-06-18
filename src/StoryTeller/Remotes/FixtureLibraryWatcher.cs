using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;

namespace StoryTeller.Remotes
{
    public class FixtureLibraryWatcher : IDisposable
    {
        private readonly Action _callback;
        private DateTime _lastUpdate;
        private readonly IList<FileSystemWatcher> _watchers = new List<FileSystemWatcher>();

        public FixtureLibraryWatcher(Action callback)
        {
            _callback = callback;
        }

        public void WatchBinariesAt(string directory)
        {
            cleanUpWatcher();

            addWatcher("*.dll", directory);
            addWatcher("*.exe", directory);
            addWatcher("*.config", directory);

            _lastUpdate = DateTime.Now;
        }

        private void addWatcher(string extension, string directory)
        {
            var watcher = new FileSystemWatcher(directory, extension);
            watcher.Changed += fileChanged;
            watcher.Created += fileChanged;
            watcher.IncludeSubdirectories = true;
            watcher.EnableRaisingEvents = true;
            watcher.NotifyFilter = NotifyFilters.LastWrite;

            _watchers.Add(watcher);
        }

        private void fileChanged(object sender, FileSystemEventArgs e)
        {
            if (DateTime.Now.Subtract(_lastUpdate).TotalSeconds < 3)
            {
                return;
            }

            Console.WriteLine("Detected a change to watched file {0}", e.FullPath);

            _callback();
            _lastUpdate = DateTime.Now;
        }

        private void cleanUpWatcher()
        {
            _watchers.Each(x =>
            {
                try
                {
                    x.Changed -= fileChanged;
                    x.EnableRaisingEvents = false;
                    x.Dispose();
                }
                catch (Exception)
                {
                }
            });

            _watchers.Clear();
        }

        public void Dispose()
        {
            cleanUpWatcher();
        }
    }
}