using System.IO;
using FubuMVC.Core.Assets;
using FubuMVC.Core.UI;
using HtmlTags;
using ST.CommandLine;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

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

            BatchResultsWriter.WriteCSS(_document);
            _document.Head.Add("link").Attr("rel", "stylesheet").Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

            _document.Body.Append(_document.Script("bundle.js"));

            return _document;
        }

        private void writeInitialDataIntoPage(HtmlDocument document)
        {
            var cleanJson = JsonSerialization.ToCleanJson(_persistence.Hierarchy.Top);
            document.Body.Add("div").Hide().Id("hierarchy-data").Text(cleanJson);

            var resultJson = JsonSerialization.ToCleanJson(_persistence.AllCachedResults());
            document.Body.Add("div").Hide().Id("result-data").Text(resultJson);

            var script = new StringWriter();
            script.WriteLine();
            script.WriteLine("var Storyteller = {};");
            script.WriteLine();
            script.WriteLine("Storyteller.initialization = {0};", JsonSerialization.ToCleanJson(_context.LatestSystemRecycled));
            script.WriteLine();
            script.WriteLine("Storyteller.queueState = {0};", JsonSerialization.ToCleanJson(_context.QueueState()));
            script.WriteLine();
            script.WriteLine("Storyteller.wsAddress = '{0}';", _connector.WebSocketsAddress);
            script.WriteLine();

            document.Head.Add("script").Encoded(false).Text(script.ToString()).Attr("type", "text/javascript");
        }
    }
}