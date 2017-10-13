using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine.Batching
{
    public class AppVeyorBatchObserver : IBatchObserver
    {
        const int MaxLength = 4096;
        private readonly AppVeyorClient _client;

        public AppVeyorBatchObserver()
        {
            var apiUrl = Environment.GetEnvironmentVariable("APPVEYOR_API_URL") ?? "";
            var uri = apiUrl.TrimEnd('/');
            _client = new AppVeyorClient(uri);
        }

        public void SpecRequeued(SpecExecutionRequest request)
        {
            Console.WriteLine("Requeuing {0}, attempt # {1}", request.Specification.name, request.Plan.Attempts + 1);
        }

        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
            var name = request.Specification.name.Escape();
            var resultText = results.Counts.ToString();

            if (results.Counts.WasSuccessful())
            {
                appVeyorAddTest(name, request.Specification.Filename, "Passed", results.Duration, stdOut: resultText);
            }
            else if (request.Specification.Lifecycle == Lifecycle.Acceptance)
            {
                appVeyorAddTest(name, request.Specification.Filename, "Ignored", results.Duration, stdOut: "Acceptance test failed: " + resultText);
            }
            else
            {
                appVeyorAddTest(name, request.Specification.Filename, "Failed", results.Duration, stdOut: resultText);
            }
        }

        private void appVeyorAddTest(
            string testName,
            string fileName,
            string outcome,
            long? durationMilliseconds = null,
            string errorMessage = null,
            string errorStackTrace = null,
            string stdOut = null)
        {
            var body = new Dictionary<string, object>
            {
                { "testName", testName },
                { "testFramework", "Storyteller" },
                { "fileName", fileName },
                { "outcome", outcome },
                { "durationMilliseconds", durationMilliseconds },
                { "ErrorMessage", errorMessage },
                { "ErrorStackTrace", errorStackTrace },
                { "StdOut", TrimStdOut(stdOut) },
            };

            _client.AddTest(body);
            // Console.WriteLine($"Test: {testName}\n{TrimStdOut(stdOut)}");
        }

        static string TrimStdOut(string str)
            => str != null && str.Length > MaxLength ? str.Substring(0, MaxLength) : str;
    }
}
