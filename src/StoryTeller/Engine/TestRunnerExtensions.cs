using System;
using System.Diagnostics;
using System.IO;
using System.Xml;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Execution;

namespace StoryTeller.Engine
{
    public static class TestRunnerExtensions
    {
        public static TestResult RunTest(this ITestRunner runner, Test test)
        {
            return runner.RunTest(new TestExecutionRequest(test, new TestStopConditions()));
        }


        public static void OpenInBrowser(this string contents)
        {
            string fileName = Path.GetTempFileName() + ".htm";
            
            File.WriteAllText(fileName, contents);
            Process.Start(fileName);
        }
    }
}