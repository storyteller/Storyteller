using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using HtmlTags;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace ST.Client
{
    public static class HomeEndpoint
    {
        public static HtmlDocument BuildPage(IApplication application, OpenInput input)
        {
            var document = new HtmlDocument {Title = "Storyteller 3"};


            writeInitialDataIntoPage(document, application);

            document.Add("div").Id("header-container");
            document.Add("div").Id("body-pane").AddClass("container");
            document.Add("div").Id("main");

#if DEBUG
            writeClientAssetsDebugMode(document, input);
#else

            writeClientSideAssetsFromEmbeds(document);
#endif


            return document;
        }

        private static void writeClientSideAssetsFromEmbeds(HtmlDocument document)
        {
            BatchResultsWriter.WriteCSS(document);
            document.Head.Add("link")
                .Attr("rel", "stylesheet")
                .Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");


            var bundleJS = typeof(HomeEndpoint).GetTypeInfo().Assembly
                .GetManifestResourceStream("ST.bundle.js").ReadAllText();

            var scriptTag = new HtmlTag("script").Attr("type", "text/javascript").Text(bundleJS).Encoded(false);
            document.Body.Append(scriptTag);
        }

        private static void writeClientAssetsDebugMode(HtmlDocument document, OpenInput input)
        {
            var stylesheets = new[] {"bootstrap.min.css", "storyteller.css", "font-awesome.min.css", "fixed-data-table.min.css"};
            var tags = stylesheets.Select(file =>
            {
                var path = $"/public/stylesheets/{file}";
                return new HtmlTag("link").Attr("rel", "stylesheet").Attr("href", path);
            });

            document.Head.Append(tags);

            var bundleUrl = input.DevFlag ? "http://localhost:3001/client/public/javascript/bundle.js" : "/bundle.js";
            var scriptTag = new HtmlTag("script").Attr("type", "text/javascript").Attr("src", bundleUrl);
            document.Body.Append(scriptTag);
        }

        private static void writeInitialDataIntoPage(HtmlDocument document, IApplication application)
        {
            var cleanJson = JsonSerialization.ToCleanJson(application.Persistence.Hierarchy.Top);
            document.Body.Add("div").Hide().Id("hierarchy-data").Text(cleanJson);

            var resultJson = JsonSerialization.ToCleanJson(application.Persistence.AllCachedResults());
            document.Body.Add("div").Hide().Id("result-data").Text(resultJson);

            var model = new InitialModel(application.LatestSystemRecycled,
                new HierarchyLoaded(application.Persistence.Hierarchy.Top, application.Persistence.Results))
            {
                wsAddress = application.Client.WebSocketsAddress
            };

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