using System;
using System.Collections.Generic;
using System.IO;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class MarkdownReader : IDisposable
    {
        private readonly TextReader _reader;
        private readonly Specification _spec;

        private readonly Stack<IReaderMode> _modes = new Stack<IReaderMode>();

        public static Specification ReadFromFile(string file)
        {
            using (var stream = new FileStream(file, FileMode.Open, FileAccess.Read))
            {
                using (var reader = new StreamReader(stream))
                {
                    var spec = new MarkdownReader(reader).Read();
                    spec.Filename = file;

                    return spec;
                }
            }
        }

        public static Specification ReadFromText(string text)
        {
            using (var reader = new MarkdownReader(new StringReader(text)))
            {
                return reader.Read();
            }
        }

        public MarkdownReader(TextReader reader)
        {
            _reader = reader;
            _spec = new Specification();

            _modes.Push(new HeaderMode(_spec));
        }

        public Specification Read()
        {
            int number = 0;
            string line = null;
            while ((line = _reader.ReadLine()) != null)
            {
                number++;

                try
                {
                    var indention = line.LeadingSpaces();
                    parseLine(indention, line.Trim());
                }
                catch (Exception e)
                {
                    var message = $"Reading the markdown file '{_spec.Filename}' errored out on line {number}{Environment.NewLine}{e.ToString()}";
                    _spec.AddError(new SpecError
                    {
                        location = new string[] {"Specification"},
                        message = message
                    });

                    _spec.Children.Insert(0, new Comment {Text = message});

                    break;
                }
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

        public void Dispose()
        {
            _reader?.SafeDispose();
        }
    }


}
