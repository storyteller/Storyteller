using System.IO;

namespace ST.Docs.Samples
{
    public class Snippet
    {
        private readonly string _name;
        private int _start;
        private readonly StringWriter _writer = new StringWriter();
        private int _end;

        public Snippet(string name)
        {
            _name = name;
        }


        public string Name
        {
            get { return _name; }
        }

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

        public int Start
        {
            get { return _start; }
        }

        public int End
        {
            get { return _end; }
        }

        public string Text
        {
            get
            {
                return _writer.ToString();
            }
        }
    }
}