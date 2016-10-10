using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Baseline;
using StoryTeller;
using StringExtensions = StoryTeller.StringExtensions;

namespace StorytellerDocGen.Samples
{
    public class Sample
    {
        private int _start;
        private readonly StringWriter _writer = new StringWriter();
        private int _end;

        public Sample(string name)
        {
            Name = name;

        }

        private string levelIndention()
        {
            var lines = _writer.ToString().ReadLines().ToArray();
            if (!lines.Any()) return string.Empty;

            var indention = lines.Where(x => x.IsNotEmpty()).Min(s => s.LeadingSpaces());

            if (indention == 0) return _writer.ToString();

            var writer = new StringWriter();
            foreach (var line in lines)
            {
                if (line.IsEmpty())
                {
                    writer.WriteLine();
                }
                else
                {
                    writer.WriteLine(line.Substring(indention));
                }
                
            }

            return writer.ToString();
        }


        public string Name { get; }

        public string Language
        {
            get; set;
        }

        public string File { get; set;}
        
        public void Append(string text, int lineNumber)
        {
            if (_start == 0)
            {
                _start = lineNumber;
            }

            _writer.WriteLine(text);
            _end = lineNumber;
        }

        public int Start => _start;

        public int End => _end;

        public string Text => levelIndention();

        public override string ToString()
        {
            return $"{nameof(Name)}: {Name}, {nameof(Language)}: {Language}";
        }
    }
}