using System;
using System.Diagnostics;
using System.IO;
using HtmlTags;

namespace StoryTeller.Results
{
    public class DebugReport : TraceListener, Report, IDisposable
    {
        private readonly StringWriter _writer = new StringWriter();
        private int _count = 0;

        public void StartListening()
        {
            Debug.Listeners.Add(this);
        }

        public string ToHtml()
        {
            return new HtmlTag("pre").AddClass("debug-output").Text(_writer.ToString()).ToString();
        }

        public string Title => "Debug Output";

        public string ShortTitle => "Debug";

        public int Count => _count;

        public void Dispose()
        {
            Debug.Listeners.Remove(this);
        }

        public override void Write(string message)
        {
            _writer.Write(message);
        }

        public override void WriteLine(string message)
        {
            _count++;
            _writer.WriteLine(message);
        }
    }
}