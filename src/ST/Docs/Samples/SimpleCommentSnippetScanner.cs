using System.Linq;
using FubuCore;

namespace ST.Docs.Samples
{
    public class SimpleCommentSnippetScanner : ISnippetScanner
    {
        private readonly string _extension;
        private readonly string _language;
        private readonly string _start;
        private readonly string _end;

        public SimpleCommentSnippetScanner(string extension, string commentMark, string language)
        {
            _extension = extension;
            _language = language;
            _start = commentMark + Snippets.SAMPLE;
            _end = commentMark + Snippets.END;
        }

        public string DetermineName(string line)
        {
            if (line.TrimStart().StartsWith(_start))
            {
                return line.Split(':').Last().Trim();
            }

            return null;
        }

        public string Extension
        {
            get { return _extension; }
        }

        public bool IsAtEnd(string line)
        {
            return line.Trim().StartsWith(_end);
        }

        public string Language
        {
            get { return _language; }
        }

    }
}