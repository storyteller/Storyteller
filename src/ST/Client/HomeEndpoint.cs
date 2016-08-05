using System.IO;
using System.Linq;
using FubuCore;
using HtmlTags;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using ST.Files;

namespace ST.Client
{
    public class HomeEndpoint
    {
        private readonly IClientConnector _connector;
        private readonly StorytellerContext _context;
        private readonly HtmlDocument _document = new HtmlDocument();
        private readonly IPersistenceController _persistence;
        private readonly IApplicationFiles _files;

        public HomeEndpoint(IClientConnector connector, StorytellerContext context, IPersistenceController persistence, IApplicationFiles files)
        {
            _connector = connector;
            _context = context;
            _persistence = persistence;
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
                var stylesheets = new[] {"bootstrap.min.css", "storyteller.css", "font-awesome.min.css"};
                var tags = stylesheets.Select(file =>
                {
                    var path = $"/public/stylesheets/{file}";
                    return new HtmlTag("link").Attr("rel", "stylesheet").Attr("href", path);
                });

                _document.Head.Append(tags);
            }
            else
            {
                BatchResultsWriter.WriteCSS(_document);
                _document.Head.Add("link")
                    .Attr("rel", "stylesheet")
                    .Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
            }

            var scriptTag = new HtmlTag("script").Attr("type", "text/javascript").Attr("src", "/bundle.js");
            _document.Body.Append(scriptTag);

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