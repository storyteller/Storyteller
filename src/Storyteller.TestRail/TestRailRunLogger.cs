using System;
using System.Diagnostics;
using System.Linq;
using StoryTeller.TestRail.Runs;
using Newtonsoft.Json.Linq;
using StoryTeller.TestRail.Integrations.TestRail;
using StoryTeller.TestRail.Models.Runs;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.TestRail
{
    public interface ITestRailRunNameGenerator
    {
        string Generate(params object[] parameters);
    }

    public class DateTimeTestRailRunNameGenerator : ITestRailRunNameGenerator
    {
        public string Generate(params object[] parameters)
        {
            return DateTime.UtcNow.ToString("G");
        }
    }


    public class TestRailRunLogger : IListener<BatchRunRequest>
    {
        private ITestRailRunNameGenerator _testRailRunNameGenerator;
        private ITestRailClient _client;

        private int _projectId { get; }

        public TestRailRunLogger(ITestRailClient client, int projectId, ITestRailRunNameGenerator testRailRunNameGenerator)
        {
            _client = client;
            _projectId = projectId;
            _testRailRunNameGenerator = testRailRunNameGenerator;
        }

        public void Receive(BatchRunRequest message)
        {
            Debugger.Launch();

            int[] testCaseIds = message.Specifications.SelectMany(spec => TestCaseParser.ParseTestCaseIds(spec.name))
                                .Union(message.Specifications.SelectMany(spec => spec.Tags?.SelectMany(TestCaseParser.ParseTestCaseIds)))
                                .ToArray();

            AddRunResponse testRunResult = _client.AddTestRun(new AddRunRequest
            {
                project_id = _projectId,
                name = _testRailRunNameGenerator.Generate(),
                case_ids = testCaseIds,
                description = "Generated from StoryTeller"
            });

            var runId = testRunResult.id;

            TestRailRunContext.Create(runId);

            Console.WriteLine(testRunResult);
        }
    }
}
