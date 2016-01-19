using System.IO;
using FubuCore;
using FubuMVC.Core.Assets;
using FubuMVC.Core.Runtime.Files;
using FubuMVC.Core.View;
using HtmlTags;
using StoryTeller.Messages;
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
        private readonly IAssetTagBuilder _tags;
        private readonly IFubuApplicationFiles _files;

        public HomeEndpoint(IClientConnector connector, StorytellerContext context, FubuHtmlDocument document,
            IPersistenceController persistence, IAssetTagBuilder tags, IFubuApplicationFiles files)
        {
            _connector = connector;
            _context = context;
            _document = document;
            _persistence = persistence;
            _tags = tags;
            _files = files;
        }

        public HtmlDocument Index()
        {
            _document.Title = "Storyteller 3";

            writeInitialDataIntoPage(_document);

            _document.Add("div").Id("header-container");
            _document.Add("div").Id("body-pane").AddClass("container");
            _document.Add("div").Id("main");

            if (File.Exists(_files.RootPath.AppendPath("public", "stylesheets", "storyteller.css")))
            {
                _tags.BuildStylesheetTags(new[] {"bootstrap.min.css", "storyteller.css", "font-awesome.min.css"});
            }
            else
            {
                BatchResultsWriter.WriteCSS(_document);
                _document.Head.Add("link")
                    .Attr("rel", "stylesheet")
                    .Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
            }

            _document.Body.Append(_document.Script("bundle.js"));

            return _document;
        }

        private void writeInitialDataIntoPage(HtmlDocument document)
        {
            var cleanJson = JsonSerialization.ToCleanJson(_persistence.Hierarchy.Top);
            document.Body.Add("div").Hide().Id("hierarchy-data").Text(cleanJson);

            var resultJson = JsonSerialization.ToCleanJson(_persistence.AllCachedResults());
            document.Body.Add("div").Hide().Id("result-data").Text(resultJson);

            var model = new InitialModel(_context.LatestSystemRecycled, new HierarchyLoaded(_persistence.Hierarchy.Top, _persistence.Results));
            model.wsAddress = _connector.WebSocketsAddress;

            // TODO -- put the queue state on here too!!!!!

            var script = new StringWriter();
            script.WriteLine();
            script.WriteLine("var Storyteller = {};");
            script.WriteLine();
            script.WriteLine("Storyteller.initialization = {0};",
                JsonSerialization.ToCleanJson(model));
            script.WriteLine();


            document.Head.Add("script").Encoded(false).Text(script.ToString()).Attr("type", "text/javascript");
        }
    }
}