using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using FubuMVC.Core.Runtime.Files;
using ST.Docs.Runner;

namespace ST.Docs.Samples
{
    public class SampleBuilder : IDisposable, ISampleBuilder
    {
        private readonly ISampleCache _cache;
        private readonly IFileSystem _fileSystem;
        private readonly IBrowserRefresher _browser;
        private readonly IEnumerable<ISampleScanner> _scanners;
        private readonly IList<FileSystemWatcher> _watchers = new List<FileSystemWatcher>();

        public SampleBuilder(ISampleCache cache, IFileSystem fileSystem, IBrowserRefresher browser, IEnumerable<ISampleScanner> scanners)
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
                    Console.WriteLine("Scanning for samples for language {0} in directory {1} with file extension {2}", scanner.Language, folder, scanner.Extension);
                    _fileSystem.FindFiles(folder, matching)
                        .Where(file => !file.Contains("node_modules"))
                        .Each(file => ReadFile(scanner, file));

                    
                });
            }).ToArray();
        }

        public void EnableWatching()
        {
            _watchers.Each(x => x.EnableRaisingEvents = true);
        }

        private void buildFileWatcherForScanner(string folder, string filter, ISampleScanner scanner)
        {
            var watcher = new FileSystemWatcher(folder, filter);
            watcher.IncludeSubdirectories = true;

            FileSystemEventHandler onFileChange = (o, e) =>
            {
                var path = e.FullPath;
                Console.WriteLine("Reading {0} for code samples", path);
                var foundChanges = ReadFile(scanner, path);

                if (foundChanges)
                {
                    _browser.RefreshPage();
                }
            };

            watcher.Changed += onFileChange;
            watcher.Created += onFileChange;

            _watchers.Add(watcher);
        }


        public bool ReadFile(ISampleScanner scanner, string file)
        {
            var reader = new SampleReader(new FubuFile(file, null), scanner, _cache);
            reader.Start();
            return reader.FoundSamples;
        }

        public void Dispose()
        {
            _watchers.Each(x =>
            {
                x.EnableRaisingEvents = false;
                x.Dispose();
            });
        }
    }
}