using System.IO;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class BigTextParser : IReaderMode
    {
        private readonly Step _step;
        private readonly string _key;
        private readonly StringWriter _writer = new StringWriter();
        private bool _finished;

        public BigTextParser(Step step, string text)
        {
            _step = step;
            _key = text.Substring(3).Trim();
        }

        public const string Delimiter = "```";
        public IReaderMode Read(int indention, string text)
        {
            if (_finished) return null;

            if (text.StartsWith(Delimiter))
            {
                _finished = true;

                _step.Values.Add(_key, _writer.ToString().Trim());

                return this;
            }

            _writer.WriteLine(text);
            return this;

        }

        public int Indention { get; set; }
    }
}