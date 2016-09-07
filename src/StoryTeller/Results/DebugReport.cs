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
#if NET46
            Debug.Listeners.Add(this);
#else
            Trace.Listeners.Add(this);
#endif
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
#if NET46
            Debug.Listeners.Remove(this);
#else
            Trace.Listeners.Remove(this);
#endif
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