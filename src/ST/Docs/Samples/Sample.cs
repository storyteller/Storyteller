using System.IO;

namespace ST.Docs.Samples
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

        public string Text => _writer.ToString();

        public override string ToString()
        {
            return $"{nameof(Name)}: {Name}, {nameof(Language)}: {Language}";
        }
    }
}