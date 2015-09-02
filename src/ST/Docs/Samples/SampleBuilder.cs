using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using FubuMVC.Core.Runtime.Files;
using ST.Docs.Runner;

namespace ST.Docs.Samples
{
    public class SampleBuilder : ISampleBuilder
    {
        private readonly ISampleCache _cache;
        private readonly IFileSystem _fileSystem;
        private readonly IBrowserRefresher _browser;
        private readonly IEnumerable<ISampleScanner> _scanners;
        private readonly IList<FileChangeWatcher> _watchers = new List<FileChangeWatcher>();

        public SampleBuilder(ISampleCache cache, IFileSystem fileSystem, IBrowserRefresher browser,
            IEnumerable<ISampleScanner> scanners)
        {
            _cache = cache;
            _fileSystem = fileSystem;
            _browser = browser;
            _scanners = scanners;
        }

        public IEnumerable<Task> ScanFolder(string folder)
        {
            return _scanners.Select(scanner =>
            {
                var filter = "*." + scanner.Extension;
                var matching = FileSet.Deep(filter);
                matching.AppendExclude("node_modules/*.*");


                buildFileWatcherForScanner(folder, filter, scanner);

                return Task.Factory.StartNew(() =>
                {
                    Console.WriteLine("Scanning for samples for language {0} in directory {1} with file extension {2}",
                        scanner.Language, folder, scanner.Extension);
                    _fileSystem.FindFiles(folder, matching)
                        .Where(file => !file.Contains("node_modules"))
                        .Each(file => ReadFile(scanner, file));
                });
            }).ToArray();
        }

        public void EnableWatching()
        {
            _watchers.Each(x => x.Start());
        }

        private void buildFileWatcherForScanner(string folder, string filter, ISampleScanner scanner)
        {
            var watcher = new FileChangeWatcher(folder, FileSet.Deep(filter), new ScannerChangeHandler(this, scanner));
            _watchers.Add(watcher);
        }

        public class ScannerChangeHandler : IChangeSetHandler
        {
            private readonly SampleBuilder _parent;
            private readonly ISampleScanner _scanner;

            public ScannerChangeHandler(SampleBuilder parent, ISampleScanner scanner)
            {
                _parent = parent;
                _scanner = scanner;
            }

            public void Handle(ChangeSet changes)
            {
                changes.Added.Select(x => x.Path).Each(file => _parent.ReadFile(_scanner, file));
                changes.Changed.Select(x => x.Path).Each(file => _parent.ReadFile(_scanner, file));

                if (changes.HasChanges())
                {
                    _parent._browser.RefreshPage();
                }
            }
        }


        public bool ReadFile(ISampleScanner scanner, string file)
        {
            var reader = new SampleReader(new FubuFile(file), scanner, _cache);
            reader.Start();
            return reader.FoundSamples;
        }

        public void Dispose()
        {
            _watchers.Each(x => x.Dispose());
        }
    }
}