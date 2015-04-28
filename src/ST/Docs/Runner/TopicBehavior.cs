using System.Reflection;
using FubuCore;
using FubuMVC.Core.Behaviors;
using FubuMVC.Core.Runtime;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs.Runner
{
    public class TopicBehavior : IActionBehavior
    {
        private readonly Topic _topic;
        private readonly IHtmlGenerator _generator;
        private readonly IOutputWriter _writer;
        private readonly DocSettings _settings;

        static TopicBehavior()
        {
            var stream = Assembly.GetExecutingAssembly()
                .GetManifestResourceStream(typeof (TopicBehavior), "WebsocketsRefresh.txt");

            _webSocketScript = stream.ReadAllText();
        }

        private static readonly string _webSocketScript;

        public TopicBehavior(Topic topic, IHtmlGenerator generator, IOutputWriter writer, DocSettings settings)
        {
            _topic = topic;
            _generator = generator;
            _writer = writer;
            _settings = settings;
        }

        public void Invoke()
        {
            var html = _generator.Generate(_topic);

            var script = _webSocketScript.Replace("%WEB_SOCKET_ADDRESS%", _settings.WebsocketAddress);
            html = html.Replace("</head>", script + "\n</head>");


            _writer.Write(MimeType.Html, html);
        }

        public void InvokePartial()
        {
            Invoke();
        }
    }
}