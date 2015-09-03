using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Caching;
using FubuCore;
using FubuCore.Util;
using FubuMVC.Core.Runtime.Files;
using ST.Docs.Runner;

namespace ST.Docs.Samples
{
    public class SampleBuilder : ISampleBuilder
    {
        private readonly ISampleCache _cache;
        private readonly IFileSystem _fileSystem;
        private readonly IBrowserRefresher _browser;
        private readonly IList<FileChangeWatcher> _watchers = new List<FileChangeWatcher>();

        private readonly Cache<string, ISampleScanner> _scanners = new Cache<string, ISampleScanner>();
        private readonly FileSet _fileSet;

        public SampleBuilder(ISampleCache cache, IFileSystem fileSystem, IBrowserRefresher browser,
            IEnumerable<ISampleScanner> scanners)
        {
            _cache = cache;
            _fileSystem = fileSystem;
            _browser = browser;

            scanners.Each(x =>
            {
                var ext = x.Extension.ToLower();
                if (!ext.StartsWith(".")) ext = "." + ext;

                _scanners[ext] = x;
            });

            var search = _scanners.GetAllKeys().Select(x => "*" + x).Join(";");

            _fileSet = FileSet.Deep(search, "node_modules/*.*");
        }


        public class ChangeHandler : IChangeSetHandler
        {
            private readonly string _root;
            private readonly SampleBuilder _parent;

            public ChangeHandler(string root, SampleBuilder parent)
            {
                _root = root;
                _parent = parent;
            }

            public void Handle(ChangeSet changes)
            {
                _parent.readFiles(changes.Added.Select(x => _root.AppendPath(x.RelativePath)));
                _parent.readFiles(changes.Changed.Select(x => _root.AppendPath(x.RelativePath)));

                _parent._browser.RefreshPage();
            }
        }

        private void readFiles(IEnumerable<string> files)
        {
            files.Each(x =>
            {
                var ext = Path.GetExtension(x).ToLower();
                var scanner = _scanners[ext];
                ReadFile(scanner, x);
            });
        }

        public Task ScanFolder(string folder)
        {
            var watcher = new FileChangeWatcher(folder, _fileSet, new ChangeHandler(folder, this));
            watcher.PollingInterval = 5000;
            watcher.ChangeBuffer = 0;
            _watchers.Add(watcher);

            return Task.Factory.StartNew(() =>
            {
                watcher.Start();

                readFiles(watcher.CurrentFiles);

                Console.WriteLine("Sample watching ready for directory " + folder);
            });

            
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