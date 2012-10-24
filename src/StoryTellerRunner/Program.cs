using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTellerRunner
{
    internal class Program
    {
        private static int Main(string[] args)
        {
            if (args.Length < 2)
            {
                Console.WriteLine("Usage:");
                Console.WriteLine("StoryTellerRunner.exe ProjectFile1 ProjectFile2 ResultsFile");

                return 1;
            }

            string resultsFile = args.Last();
            var projectFiles = args.Take(args.Length - 1);
            var runner = new ProjectRunner(projectFiles, resultsFile);
            

            return runner.Execute();
        }
    }
}