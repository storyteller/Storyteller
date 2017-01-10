using System.IO;
using System.Linq;
using System.Reflection;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using StoryTeller.Util;
using ST.Client;

namespace ST.Preview
{
    // TODO -- ugh, will need to rewrite this to all write to a stream.
    public static class ExportWriter
    {
        public static string BuildPage(IApplication application)
        {
            var top = application.Persistence.Hierarchy.Top;
            var library = FixtureLibrary.From(application.Fixtures.CombinedFixtures());
            var title = "Specifications Visualization";

            return Build(top, library, title).ToString();
        }

        public static HtmlDocument Build(Suite top, FixtureLibrary fixtures, string title)
        {
            var document = new HtmlDocument
            {
                Title = title
            };

            document.Head.Append(BatchResultsWriter.StyleTag());

            writeInitialData(document, top, fixtures, title);

#if DEBUG
            var scriptTag = HomeEndpoint.ScriptTag(false, "/preview.js");
            document.Body.Append(scriptTag);

#else
            writeEnbeddedJavascript(document);
#endif

            document.Body.Add("div").Id("main");

            return document;
        }

        private static void writeEnbeddedJavascript(HtmlDocument document)
        {
            var stream = typeof(ExportWriter).GetTypeInfo().Assembly.GetManifestResourceStream("StorytellerRunner.preview.js");
            var reader = new StreamReader(stream);
            var js = reader.ReadToEnd();

            document.Body.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);
        }

        private static void writeInitialData(HtmlDocument document, Suite top, FixtureLibrary fixtures, string title)
        {
            ClientMessage[] initial = new ClientMessage[]
            {
                new FixturesReloaded {fixtures = fixtures.Models.ToArray()},
                new HierarchyLoaded(top, new ResultsCache()),
                new ProjectTitle(title),
            };

            var cleanJson = JsonSerialization.ToCleanJson(initial);
            document.Body.Add("div").Hide().Id("spec-data").Text(cleanJson);
        }
    }
}