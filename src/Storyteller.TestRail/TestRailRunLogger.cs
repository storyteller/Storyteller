using System;
using System.Diagnostics;
using System.Linq;
using Storyteller.TestRail.Runs;
using Newtonsoft.Json.Linq;
using Storyteller.TestRail.Integrations.TestRail;
using Storyteller.TestRail.Models.Runs;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace Storyteller.TestRail
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

            int[] testCaseIds = message.Specifications.SelectMany(spec => TestCaseParser.ParseTestCaseIds(spec.name)).ToArray();

            AddRunResponse testRunResult = _client.AddTestRun(new AddRunRequest
            {
                project_id = _projectId,
                name = _testRailRunNameGenerator.Generate(),
                case_ids = testCaseIds,
                description = "Generated from Storyteller"
            });

            var runId = testRunResult.id;

            TestRailRunContext.Create(runId);

            Console.WriteLine(testRunResult);
        }
    }
}
