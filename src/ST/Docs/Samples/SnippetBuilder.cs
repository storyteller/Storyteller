using System.Collections.Generic;
using Bottles;
using Bottles.Diagnostics;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Samples
{
    public class SnippetBuilder : IActivator
    {
        private readonly ISnippetCache _cache;
        private readonly IFubuApplicationFiles _files;
        private readonly IEnumerable<ISnippetScanner> _scanners;

        // TODO -- need to kill this.
        public SnippetBuilder(ISnippetCache cache, IFubuApplicationFiles files, IEnumerable<ISnippetScanner> scanners)
        {
            _cache = cache;
            _files = files;
            _scanners = scanners;
        }

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _scanners.Each(finder =>
            {
                log.Trace("Finding snippets with " + finder.GetType().Name);
                _files.FindFiles(finder.MatchingFileSet).Each(file =>
                {
                    var scanner = new SnippetReader(file, finder, s => _cache.AddOrReplace(s));
                    scanner.Start();
                });
            });
        }
    }
}