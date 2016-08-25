using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Results
{
    public static class BatchResultsWriter
    {
        public static HtmlDocument BuildResults(BatchRunResponse results)
        {
            var document = new HtmlDocument
            {
                Title = "Storyteller Batch Results for {0}: {1}".ToFormat(results.system, results.suite)
            };

            WriteCSS(document);
            writeJavascript(results, document);

            return document;
        }

        public static void WriteCSS(HtmlDocument document)
        {
            var css = readFile("StoryTeller.bootstrap.min.css") + "\n\n" + readFile("StoryTeller.storyteller.css");

            document.Head.Add("style").Text(css).Encoded(false);
        }


        private static string readFile(string name)
        {
            var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(name);
            var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }

        private static void writeJavascript(BatchRunResponse results, HtmlDocument document)
        {
            var cleanJson = JsonSerialization.ToCleanJson(results);

            document.Body.Add("div").Hide().Id("batch-data").Text(cleanJson);
            document.Body.Add("div").Id("main");

            var js = readFile("StoryTeller.batch-bundle.js");

            document.Body.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);
            /*
            foot.Add("script")
                .Attr("language", "Javascript")
                .Attr("src", "file://Z:/code/storyteller/src/ST/batch-bundle.js");
                */

        }
    }
}