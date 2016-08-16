using System;
using Baseline;
using ST.Files;

namespace ST.Docs.Samples
{
    public class SampleReader
    {
        private readonly IFileReference _file;
        private readonly ISampleScanner _scanner;
        private readonly ISampleCache _cache;
        private Action<string, int> _readAction;

        public SampleReader(IFileReference file, ISampleScanner scanner, ISampleCache cache)
        {
            _file = file;
            _scanner = scanner;
            _cache = cache;
        }

        public bool FoundSamples { get; private set; }

        public void Start()
        {
            _readAction = lookForNewSnippet;

            var line = 0;
            _file.ReadContents().ReadLines(text =>
            {
                line++;
                _readAction(text, line);
            });
        }

        private void lookForNewSnippet(string text, int lineNumber)
        {
            var name = _scanner.DetermineName(text);

            if (name.IsNotEmpty())
            {
                FoundSamples = true;

                var snippet = new Sample(name){
                    Language = _scanner.Language,
                    File = _file.Path
                };

                _readAction = (txt, num) =>
                {
                    if (_scanner.IsAtEnd(txt))
                    {
                        _cache.AddOrReplace(snippet);
                        _readAction = lookForNewSnippet;
                    }
                    else
                    {
                        snippet.Append(txt, num);
                    }
                };
            }
        }
    }
}