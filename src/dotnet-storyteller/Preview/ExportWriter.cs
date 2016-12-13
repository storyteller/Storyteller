using System.IO;
using System.Linq;
using System.Reflection;
using HtmlTags;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace ST.Preview
{
    public static class ExportWriter
    {
        public static HtmlDocument Build(Suite top, FixtureLibrary fixtures, string title)
        {
            var document = new HtmlDocument
            {
                Title = title
            };

            BatchResultsWriter.WriteCSS(document);

            writeJavascript(document, top, fixtures, title);

            document.Body.Add("div").Id("main");

            return document;
        }

        private static void writeJavascript(HtmlDocument document, Suite top, FixtureLibrary fixtures, string title)
        {
            ClientMessage[] initial = new ClientMessage[]
            {
                new FixturesReloaded {fixtures = fixtures.Models.ToArray()},
                new HierarchyLoaded(top, new ResultsCache()),
                new ProjectTitle(title),   
            };

            var stream = typeof(ExportWriter).GetTypeInfo().Assembly.GetManifestResourceStream("dotnet-storyteller.preview.js");
            var reader = new StreamReader(stream);
            var js = reader.ReadToEnd();

            document.Body.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);

            var cleanJson = JsonSerialization.ToCleanJson(initial);
            document.Body.Add("div").Hide().Id("spec-data").Text(cleanJson);
            
        }
    }
}