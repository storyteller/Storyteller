using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Baseline;
using HtmlTags;
using Microsoft.AspNetCore.Http;
using StorytellerDocGen.Topics;
using StorytellerDocGen.Transformation;
using StructureMap.TypeRules;

namespace StorytellerDocGen.Runner
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

            var topicAssembly = typeof(TopicMiddleware).GetAssembly();

            var stream = topicAssembly.GetManifestResourceStream("StorytellerDocGen.Runner.WebsocketsRefresh.txt");

            _webSocketScript = stream.ReadAllText();
            _topicJS = topicAssembly.GetManifestResourceStream("StorytellerDocGen.topics.js").ReadAllText();
        }

        public Task Invoke(HttpContext context)
        {
            var path = context.Request.Path.Value.TrimStart('/');

            var response = context.Response;
            if (path == "topics.js")
            {
                response.Headers["content-type"] = "text/javascript";
                return response.WriteAsync(_topicJS);
            }

            var topic = _project.FindTopicByUrl(path);
            if (topic == null)
            {
                response.StatusCode = 404;
                response.Headers["content-type"] = "text/plain";

                return response.WriteAsync("Unknown topic");
            }

            response.Headers["cache-control"] = "no-cache, no-store, must-revalidate";
            response.Headers["pragma"] = "no-cache";
            response.Headers["expires"] = "0";

            var html = GenerateHtml(topic);

            response.Headers["content-type"] = "text/html";

            return response.WriteAsync(html);

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