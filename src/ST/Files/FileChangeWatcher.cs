using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Baseline;

namespace ST.Files
{
    public class FileChangeWatcher : IDisposable
    {
        private readonly ApplicationFiles _files;
        private readonly FileSet _fileSet;
        private readonly IChangeSetHandler _handler;
        private readonly Timer _timer;
        private bool _latched;
        private TrackedSet _tracking;


        /// <summary>
        ///     Time in milliseconds that the polling watcher should wait for additional changes
        /// </summary>
        public int ChangeBuffer = 100;

        private bool _disposed;


        public FileChangeWatcher(string root, FileSet fileSet, IChangeSetHandler handler)
        {
            _files = new ApplicationFiles(root);
            _fileSet = fileSet;
            _handler = handler;

            _timer = new Timer(execute);


            Root = root;
        }

        public string Root { get; private set; }

        public IEnumerable<string> CurrentFiles
        {
            get
            {
                if (_tracking == null) return Enumerable.Empty<string>();

                return _tracking.Files.Select(x => _files.RootPath.AppendPath(x));
            }
        }

        public int PollingIntervalInMilliseconds { get; set; } = 1000;


        public bool Enabled { get; private set; }

        public void Dispose()
        {
            _disposed = true;
            _timer.Dispose();
        }

        private void execute(object state)
        {
            if (_disposed) return;
            _timer.Change(10000, PollingIntervalInMilliseconds);

            if (!_latched && !_disposed)
            {
                processChanges();
            }

            if (_disposed) return;
            _timer.Change(0, PollingIntervalInMilliseconds);
        }


        private void processChanges()
        {
            var files = findFiles();
            var changes = _tracking.DetectChanges(files);
            if (!changes.HasChanges())
            {
                return;
            }

            if (ChangeBuffer > 0)
            {
                var checkpoint = new TrackedSet(files);
                var count = 0;
                while (count < 3)
                {
                    files = findFiles();
                    if (checkpoint.DetectChanges(files).HasChanges())
                    {
                        checkpoint = new TrackedSet(files);
                        count++;
                    }
                    else
                    {
                        break;
                    }
                }
            }


            if (!_latched)
            {
                try
                {
                    _tracking = new TrackedSet(files);
                    _handler.Handle(changes);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
        }


        private IFileReference[] findFiles()
        {
            return _files.FindFiles(_fileSet).ToArray();
        }

        public void Latch(Action action)
        {
            _latched = true;
            try
            {
                action();
            }
            finally
            {
                _latched = false;
            }
        }

        public void Start()
        {
            _tracking = new TrackedSet(findFiles());
            _timer.Change(0, PollingIntervalInMilliseconds);
        }

        public void Stop()
        {
            Enabled = false;
            _timer.Change(TimeSpan.MaxValue, TimeSpan.MaxValue);
        }
    }
}