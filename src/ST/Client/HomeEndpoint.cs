using System.IO;
using FubuMVC.Core.Assets;
using FubuMVC.Core.UI;
using HtmlTags;
using Storyteller.Core.Remotes.Messaging;

namespace ST.Client
{
    public class HomeEndpoint
    {
        private readonly IClientConnector _connector;
        private readonly StorytellerContext _context;
        private readonly FubuHtmlDocument _document;
        private readonly IPersistenceController _persistence;

        public HomeEndpoint(IClientConnector connector, StorytellerContext context, FubuHtmlDocument document, IPersistenceController persistence)
        {
            _connector = connector;
            _context = context;
            _document = document;
            _persistence = persistence;
        }

        public HtmlDocument Index()
        {
            _document.Title = "Storyteller 3";

            writeInitialDataIntoPage(_document);

            _document.Add("div").Id("header-container");
            _document.Add("div").Id("body-pane").AddClass("container");

            _document.Head.Append(_document.Css("assets/client/public/stylesheets/bootstrap.min.css", "assets/client/css/storyteller.css"));
            _document.Head.Add("link").Attr("rel", "stylesheet").Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

            _document.Body.Append(_document.Script("bundle.js"));

            return _document;
        }

        private void writeInitialDataIntoPage(HtmlDocument document)
        {
            var script = new StringWriter();
            script.WriteLine();
            script.WriteLine("var Storyteller = {};");
            script.WriteLine();
            script.WriteLine("Storyteller.hierarchy = {0};", JsonSerialization.ToCleanJson(_persistence.Hierarchy.Top));
            script.WriteLine();
            script.WriteLine("Storyteller.initialization = {0};", JsonSerialization.ToCleanJson(_context.Startup.Result));
            script.WriteLine();
            script.WriteLine("Storyteller.wsAddress = '{0}';", _connector.WebSocketsAddress);
            script.WriteLine();

            document.Head.Add("script").Encoded(false).Text(script.ToString()).Attr("type", "text/javascript");
        }
    }
}