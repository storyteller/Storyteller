using System;
using System.Diagnostics;
using System.Reflection;
using System.Text;
using FubuCore;
using FubuCore.CommandLine;
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

            var builder = new StringBuilder(html);
            _topic.Substitutions.Each((key, value) =>
            {
                builder.Replace(key, value);
            });

            var script = _webSocketScript.Replace("%WEB_SOCKET_ADDRESS%", _settings.WebsocketAddress);
            builder.Replace("</head>", script + "\n</head>");



            _writer.Write(MimeType.Html, builder.ToString());
        }

        public void InvokePartial()
        {
            Invoke();
        }
    }
}