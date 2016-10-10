using System.Collections.Generic;
using System.IO;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class MarkdownReader
    {
        private readonly TextReader _reader;
        private readonly Specification _spec;

        private readonly Stack<IReaderMode> _modes = new Stack<IReaderMode>();

        public static Specification ReadFromText(string text)
        {
            var reader = new MarkdownReader(new StringReader(text));

            return reader.Read();
        }

        public MarkdownReader(TextReader reader)
        {
            _reader = reader;
            _spec = new Specification();

            _modes.Push(new HeaderMode(_spec));
        }

        public Specification Read()
        {
            string line = null;
            while ((line = _reader.ReadLine()) != null)
            {
                var indention = line.LeadingSpaces();
                parseLine(indention, line.Trim());
            }

            return _spec;
        }

        private IReaderMode current => _modes.Peek();


        private void parseLine(int indention, string line)
        {
            var mode = current.Read(indention, line);
            if (mode == null)
            {
                _modes.Pop();

                if (line.IsEmpty()) return;

                startNewMode(indention, line);
            }
            else if (!ReferenceEquals(mode, current))
            {
                _modes.Push(mode);
            }
        }

        private void startNewMode(int indention, string line)
        {
            var next = current.Read(indention, line);
            if (next == null)
            {
                if (current is HeaderMode) return;

                _modes.Pop();
                startNewMode(indention, line);
            }
            else
            {
                next.Indention = indention;
                _modes.Push(next);
            }
        }
    }
}