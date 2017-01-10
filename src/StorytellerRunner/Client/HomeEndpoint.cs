using System.Collections.Generic;
using System.IO;
using Baseline;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Util;

namespace ST.Client
{
    public static class HomeEndpoint
    {
        public static readonly string[] Stylesheets = new[]{"bootstrap.min.css", "storyteller.css", "font-awesome.min.css", "fixed-data-table.min.css"};

        public static HtmlDocument BuildPage(IApplication application, OpenInput input)
        {
            var document = new HtmlDocument {Title = "Storyteller 4"};

            styleTags().Each(x => document.Head.Append(x));

            writeInitialDataIntoPage(document, application);

            document.Add("div").Id("header-container");
            document.Add("div").Id("body-pane").AddClass("container");
            document.Add("div").Id("main");

            document.Body.Append(ScriptTag(input.DevFlag));


            return document;
        }


        private static IEnumerable<HtmlTag> styleTags()
        {
#if DEBUG
            foreach (var file in Stylesheets)
            {
                var path = $"/public/stylesheets/{file}";
                yield return new HtmlTag("link").Attr("rel", "stylesheet").Attr("href", path);
            }

#else
            yield return BatchResultsWriter.StyleTag();


#endif

            yield return new HtmlTag("link")
                .Attr("rel", "stylesheet")
                .Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
        }

        public static HtmlTag ScriptTag(bool devMode, string bundleName = "/bundle.js")
        {
#if DEBUG
            var bundleUrl = devMode ? "http://localhost:3001/client/public/javascript/bundle.js" : bundleName;
            return new HtmlTag("script").Attr("type", "text/javascript").Attr("src", bundleUrl);
#else
            var bundleJS = typeof(HomeEndpoint).GetTypeInfo().Assembly
                .GetManifestResourceStream("StorytellerRunner.bundle.js").ReadAllText();

            return new HtmlTag("script").Attr("type", "text/javascript").Text(bundleJS).Encoded(false);
#endif
        }


        private static void writeInitialDataIntoPage(HtmlDocument document, IApplication application)
        {
            var model = application.BuildInitialModel();

            var script = new StringWriter();
            script.WriteLine();
            script.WriteLine($"var Storyteller = {{wsAddress: '{application.Client.WebSocketsAddress}'}};");
            script.WriteLine();
            script.WriteLine("Storyteller.initialization = {0};",
                JsonSerialization.ToCleanJson(model));
            script.WriteLine();


            document.Head.Add("script").Encoded(false).Text(script.ToString()).Attr("type", "text/javascript");
        }
    }
}