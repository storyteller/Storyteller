using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Baseline;
using HtmlTags;
using Microsoft.AspNetCore.Http;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs.Runner
{
    public class TopicMiddleware 
    {
        private readonly DocProject _project;
        private readonly IHtmlGenerator _generator;
        private readonly DocSettings _settings;
        private readonly string _webSocketScript;
        private readonly string _topicJS;


        public TopicMiddleware(DocProject project, IHtmlGenerator generator, DocSettings settings)
        {
            _project = project;
            _generator = generator;
            _settings = settings;

            var stream = Assembly.GetExecutingAssembly()
                .GetManifestResourceStream(typeof(TopicMiddleware), "WebsocketsRefresh.txt");

            _webSocketScript = stream.ReadAllText();
            _topicJS = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(Program),"topics.js").ReadAllText();
        }

        public Task Invoke(HttpContext context)
        {
            var path = context.Request.Path.Value.TrimStart('/');

            if (path == "topics.js")
            {
                context.Response.Headers["content-type"] = "text/javascript";
                return context.Response.WriteAsync(_topicJS);
            }

            var topic = _project.FindTopicByUrl(path);
            if (topic == null)
            {
                context.Response.StatusCode = 404;
                context.Response.Headers["content-type"] = "text/plain";

                return context.Response.WriteAsync("Unknown topic");
            }

            context.Response.Headers["cache-control"] = "no-cache, no-store, must-revalidate";
            context.Response.Headers["pragma"] = "no-cache";
            context.Response.Headers["expires"] = "0";

            var html = GenerateHtml(topic);

            context.Response.Headers["content-type"] = "text/html";

            return context.Response.WriteAsync(html);

        }

        public string GenerateHtml(Topic topic)
        {
            var html = _generator.Generate(topic);

            var builder = new StringBuilder(html);
            topic.Substitutions.Each((key, value) => { builder.Replace(key, value); });

            var script = _webSocketScript.Replace("%WEB_SOCKET_ADDRESS%", _settings.WebsocketAddress);
            builder.Replace("</head>", script + "\n</head>");

            var tag = new HtmlTag("script").Attr("language", "javascript").Attr("src", "/topics.js");
            builder.Replace("</head>", tag.ToString() + "\n</head>");

            return builder.ToString();
        }
    }
}