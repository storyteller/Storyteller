using System;
using System.Linq;

namespace StoryTeller.TestRunner
{
    internal class Program
    {
        private static int Main(string[] args)
        {
            if (args.Length < 2)
            {
                Console.WriteLine("Usage: StoryTeller.TestRunner.exe ProjectFile1 TestPath");
                Console.WriteLine("Example: StoryTeller.TestRunner.exe TestProject.xml ParentSuite/ChildSuite/TestName");

                return 1;
            }

            string projectFile = args.First();
            string testPath = args.Last();
            var runner = new TestRunner(projectFile, testPath);

            return runner.Execute();
        }
    }
}
