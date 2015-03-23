using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using FubuCore;
using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace ST.CommandLine
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
            var css = readFile("ST.bootstrap.min.css") + "\n\n" + readFile("ST.storyteller.css");

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
            var data = "\nvar BatchData = " + JsonSerialization.ToCleanJson(results) + "\n\n";
            document.Head.Add("script").Attr("language", "javascript").Text(data).Encoded(false);

           var js = readFile("ST.batch-bundle.js");

            var foot = new HtmlTag("foot");
            document.Body.Next = foot;
            foot.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);



        }
    }
}