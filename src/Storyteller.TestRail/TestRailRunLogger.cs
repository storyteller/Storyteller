using System;
using System.Diagnostics;
using System.Linq;
using StoryTeller.TestRail.Models.Runs;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.TestRail
{
    public class TestRailRunLogger : IListener<BatchRunRequest>
    {
        private readonly ITestRailClient _client;
        private readonly ITestRailRunLoggerSettings _testRailRunLoggerSettings;
        
        public TestRailRunLogger(ITestRailClient client, ITestRailRunLoggerSettings testRailRunLoggerSettings)
        {
            _client = client;
            _testRailRunLoggerSettings = testRailRunLoggerSettings;
        }

        #region IListener<BatchRunRequest>

        public void Receive(BatchRunRequest message)
        {
            int[] testCaseIds = message.Specifications.SelectMany(spec => TestCaseParser.ParseTestCaseIds(spec.name))
                                .Union(message.Specifications.SelectMany(spec => spec.Tags?.SelectMany(TestCaseParser.ParseTestCaseIds)))
                                .ToArray();

            if (!testCaseIds.Any())
            {
                Console.WriteLine("No TestRail Test Case IDs found in specifications. No Test Run will be created.");
                return;
            }

            AddRunResponse testRunResult = _client.AddTestRun(new AddRunRequest
            {
                project_id = _testRailRunLoggerSettings.ProjectId,
                name = _testRailRunLoggerSettings.TestRailRunNameGenerator.Generate(),
                case_ids = testCaseIds,
                description = "Generated from StoryTeller"
            });
            
            TestRailRunContext.Create(testRunResult.id);

            Console.WriteLine(testRunResult);
        }

        #endregion
    }
}
