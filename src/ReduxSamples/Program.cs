using System;
using System.IO;
using Baseline;
using Storyteller.Redux;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace ReduxSamples
{
    public class Program
    {
        public static void Debug()
        {
            using (var runner = StoryTeller.StorytellerRunner.For<ReduxSampleSystem>())
            {
                runner.Run("Samples / Simple sending and value checking");
                runner.OpenResultsInBrowser();
            }
        }

        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new ReduxSampleSystem());
        }
    }

    public class ReduxSampleSystem : SimpleSystem
    {
        protected override void configureCellHandling(CellHandling handling)
        {
            // The code below is just to generate the static file I'm 
            // using to host the reducer + websockets code
            var directory = AppContext.BaseDirectory;
            while (Path.GetFileName(directory) != "ReduxSamples")
            {
                directory = directory.ParentDirectory();
            }

            var jsFile = directory.AppendPath("reduxharness.js");
            Console.WriteLine("Copying the reduxharness.js file to " + directory);
            var source = directory.AppendPath("..", "StorytellerRunner", "reduxharness.js");


            File.Copy(source, jsFile, true);

            var harnessPath = directory.AppendPath("harness.htm");
            if (!File.Exists(harnessPath))
            {
                var doc = new HtmlDocument();

                var href = "file://" + jsFile;

                doc.Head.Add("script").Attr("src", href);

                Console.WriteLine("Writing the harness file to " + harnessPath);
                doc.WriteToFile(harnessPath);
            }

            var url = "file://" + harnessPath;
            handling.Extensions.Add(new ReduxSagaExtension(url));
        }
    }
}