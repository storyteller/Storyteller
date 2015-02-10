using System.IO;
using HtmlTags;
using Storyteller.Core.Remotes.Messaging;

namespace ST.Client
{
    public class HomeEndpoint
    {
        private readonly IClientConnector _connector;
        private readonly StorytellerContext _context;

        public HomeEndpoint(IClientConnector connector, StorytellerContext context)
        {
            _connector = connector;
            _context = context;
        }

        public HtmlDocument Index()
        {
            var document = new HtmlDocument {Title = "Storyteller"};

            var script = new StringWriter();
            script.WriteLine();
            script.WriteLine("var Storyteller = {};");
            script.WriteLine();
            script.WriteLine("Storyteller.hierarchy = {0};", JsonSerialization.ToCleanJson(_context.Hierarchy.Result));
            script.WriteLine();
            script.WriteLine("Storyteller.initialization = {0};", JsonSerialization.ToCleanJson(_context.Startup.Result));
            script.WriteLine();
            script.WriteLine("Storyteller.wsAddress = '{0}';", _connector.WebSocketsAddress);
            script.WriteLine();

            document.Head.Add("script").Encoded(false).Text(script.ToString()).Attr("type", "text/javascript");

            document.Add("h1").Text(_context.Startup.Result.system_name);

            return document;
        }
    }
}