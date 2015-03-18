using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using FubuCore;
using HtmlTags;
using Storyteller.Core.Engine;
using Storyteller.Core.Remotes.Messaging;

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

            writeCSS(document);
            writeJavascript(results, document);

            return document;
        }

        private static void writeCSS(HtmlDocument document)
        {
            var css = readFile("ST.assets.client.public.stylesheets.bootstrap.min.css") + "\n\n" + readFile("ST.assets.client.public.stylesheets.storyteller.css");

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

           var js = readFile("ST.assets.client.public.javascript.batch-bundle.js");

            var foot = new HtmlTag("foot");
            document.Body.Next = foot;
            foot.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);



        }
    }
}