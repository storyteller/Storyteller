using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using FubuCore;
using FubuMVC.Core.Http;
using FubuMVC.Core.Http.Owin;
using FubuMVC.Core.Http.Owin.Middleware;
using HtmlTags;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs.Runner
{
    public class TopicMiddleware : IOwinMiddleware
    {
        private readonly Func<IDictionary<string, object>, Task> _inner;
        private readonly DocProject _project;
        private readonly IHtmlGenerator _generator;
        private readonly DocSettings _settings;
        private readonly string _webSocketScript;
        private readonly string _topicJS;


        public TopicMiddleware(Func<IDictionary<string, object>, Task> inner, DocProject project, IHtmlGenerator generator, DocSettings settings)
        {
            _inner = inner;
            _project = project;
            _generator = generator;
            _settings = settings;

            var stream = Assembly.GetExecutingAssembly()
                .GetManifestResourceStream(typeof(TopicMiddleware), "WebsocketsRefresh.txt");

            _webSocketScript = stream.ReadAllText();
            _topicJS = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof(Program),"topics.js").ReadAllText();
        }

        public Task Invoke(IDictionary<string, object> environment)
        {
            var path = environment[OwinConstants.RequestPathKey].As<string>().TrimStart('/');

            if (path == "topics.js")
            {
                return Task.Factory.StartNew(() =>
                {
                    var response = new OwinHttpResponse(environment);
                    response.WriteContentType("text/javascript");

                    response.Write(_topicJS);


                   
                    response.Flush();
                });
            }

            var topic = _project.FindTopicByUrl(path);
            if (topic == null)
            {
                return _inner(environment);
            }

            return Task.Factory.StartNew(() =>
            {
                var response = new OwinHttpResponse(environment);
                response.WriteContentType("text/html");

                response.AppendHeader(HttpGeneralHeaders.CacheControl, "no-cache, no-store, must-revalidate");
                response.AppendHeader(HttpResponseHeaders.Pragma, "no-cache");
                response.AppendHeader(HttpResponseHeaders.Expires, "0");


                var html = GenerateHtml(topic);


                response.Write(html);
                response.Flush();
            });

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