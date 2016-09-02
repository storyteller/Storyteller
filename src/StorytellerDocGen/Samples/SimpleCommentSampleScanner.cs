using System.Linq;

namespace StorytellerDocGen.Samples
{
    public class SimpleCommentSampleScanner : ISampleScanner
    {
        private readonly string _extension;
        private readonly string _language;
        private readonly string _start;
        private readonly string _end;

        public SimpleCommentSampleScanner(string extension, string commentMark, string language)
        {
            _extension = extension;
            _language = language;
            _start = commentMark + Samples.SAMPLE;
            _end = commentMark + Samples.END;
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