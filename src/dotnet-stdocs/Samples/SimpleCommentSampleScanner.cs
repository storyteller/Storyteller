using System.Collections.Generic;
using System.Linq;

namespace StorytellerDocGen.Samples
{
    public class SimpleCommentSampleScanner : ISampleScanner
    {
        public readonly List<string> PrefixIgnores = new List<string>();

        private readonly string _start;
        private readonly string _end;

        public SimpleCommentSampleScanner(string extension, string commentMark, string language)
        {
            Extension = extension;
            Language = language;
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

        public string Extension { get; }

        public bool IsAtEnd(string line)
        {
            return line.Trim().StartsWith(_end);
        }

        public string Language { get; }
    }
}