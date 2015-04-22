using System;
using System.Collections.Generic;
using System.IO;
using FubuCore;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Samples
{
    public class SampleBuilder : IDisposable, ISampleBuilder
    {
        private readonly ISnippetCache _cache;
        private readonly IFileSystem _fileSystem;
        private readonly IEnumerable<ISnippetScanner> _scanners;
        private readonly IList<FileSystemWatcher> _watchers = new List<FileSystemWatcher>();

        public SampleBuilder(ISnippetCache cache, IFileSystem fileSystem, IEnumerable<ISnippetScanner> scanners)
        {
            _cache = cache;
            _fileSystem = fileSystem;
            _scanners = scanners;
        }

        public void StartWatching(string folder)
        {
            _scanners.Each(scanner =>
            {
                var filter = "*." + scanner.Extension;
                var matching = FileSet.Deep(filter);

                _fileSystem.FindFiles(folder, matching)
                    .Each(file => ReadFile(scanner, file));

                Console.WriteLine("Scanning for samples for language {0} with file extension {1}", scanner.Language, scanner.Extension);
                var watcher = new FileSystemWatcher(folder, filter);
                FileSystemEventHandler onFileChange = (o, e) =>
                {
                    var path = e.FullPath;
                    Console.WriteLine("Reading {0} for code samples", path);
                    ReadFile(scanner, path);
                };

                watcher.Changed += onFileChange;
                watcher.Created += onFileChange;
                watcher.EnableRaisingEvents = true;
            });
        }


        public void ReadFile(ISnippetScanner scanner, string file)
        {
            var reader = new SnippetReader(new FubuFile(file, null), scanner, _cache);
            reader.Start();
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