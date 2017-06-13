using System;
using Baseline;
using Microsoft.Extensions.DependencyModel;
using StoryTeller;

namespace Samples
{
    // SAMPLE: Program.Main.Default
    public static class Program
    {
        public static void Main(string[] args)
        {
            // If you do not need a custom ISystem
            StorytellerAgent.Run(args);
        }
    }
    // ENDSAMPLE

    public class DebugSpecs
    {
        // SAMPLE: using-storytellerrunner-with-basic
        public void run_spec()
        {
            // There is an optional argument in this method to give
            // Storyteller a hint about where the project root folder
            // is, but in most cases it should be able to figure that
            // out on its own
            using (var runner = StorytellerRunner.Basic())
            {
                // run one spec by its path as shown in the UI.
                // You can just copy/paste the full spec path
                // from the spec editor page in the UI
                var results = runner.Run("Arrays / Use an array argument");
                Console.WriteLine(results.Counts);

                // You can open the results in a browser window
                runner.OpenResultsInBrowser();

                // You can write the results to a file
                runner.WriteResultsDocument("results.htm");

                // Run all the specifications in the project
                runner.RunAll(TimeSpan.FromMinutes(2));
            }
        }
        // ENDSAMPLE
    }
}