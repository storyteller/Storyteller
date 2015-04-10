using System;
using FubuCore;
using FubuMVC.Core.Runtime.Files;

namespace ST.Docs.Samples
{
    public class SnippetReader
    {
        private readonly IFubuFile _file;
        private readonly Action<Snippet> _onFound;
        private readonly ISnippetScanner _scanner;
        private Action<string, int> _readAction;

        public SnippetReader(IFubuFile file, ISnippetScanner scanner, Action<Snippet> onFound)
        {
            _file = file;
            _scanner = scanner;
            _onFound = onFound;
        }

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
                var snippet = new Snippet(name){
                    Class = _scanner.LanguageClass,
                    File = _file.RelativePath
                };

                _readAction = (txt, num) =>
                {
                    if (_scanner.IsAtEnd(txt))
                    {
                        _onFound(snippet);
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