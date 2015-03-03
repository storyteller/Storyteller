using System;
using System.Diagnostics;
using System.IO;
using HtmlTags;

namespace Storyteller.Core.Results
{
    public class DebugReporter : IReporter, IDisposable
    {
        private readonly StringWriter _writer = new StringWriter();
        private TextWriterTraceListener _listener;

        public void StartListening()
        {
            _listener = new TextWriterTraceListener(_writer);
            Debug.Listeners.Add(_listener);
        }

        public HtmlTag ToHtml()
        {
            return new HtmlTag("pre").AddClass("debug-output").Text(_writer.ToString());
        }

        public string Title
        {
            get { return "Debug Output"; }
        }

        public void Dispose()
        {
            Debug.Listeners.Remove(_listener);
        }
    }
}