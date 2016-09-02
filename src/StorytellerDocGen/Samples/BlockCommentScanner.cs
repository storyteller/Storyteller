namespace StorytellerDocGen.Samples
{
    public class BlockCommentScanner : ISampleScanner
    {
        private readonly string _commentStart;
        private readonly string _commentEnd;
        private readonly string _extension;
        private readonly string _language;

        public BlockCommentScanner(string commentStart, string commentEnd, string extension, string language)
        {
            _commentStart = commentStart;
            _commentEnd = commentEnd;
            _extension = extension;
            _language = language;
        }

        public string Language
        {
            get { return _language; }
        }

        public string Extension
        {
            get { return _extension; }
        }

        public string DetermineName(string line)
        {
            if (!line.TrimStart().StartsWith(_commentStart)) return null;
            if (!line.Contains(Samples.SAMPLE)) return null;

            var start = line.IndexOf(Samples.SAMPLE) + Samples.SAMPLE.Length;
            var end = line.IndexOf(_commentEnd);

            return line.Substring(start, end - start).Trim();
        }

        public bool IsAtEnd(string line)
        {
            var text = line.Trim();
            return text.StartsWith(_commentStart) && text.Contains(Samples.END) && text.EndsWith(_commentEnd);
        }
    }
}