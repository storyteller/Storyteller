using StoryTeller.TestRail.Models.Runs;
using StoryTeller.TestRail.Results;
using StoryTeller.TestRail.Runs;

namespace StoryTeller.TestRail
{
    public interface ITestRailClient
    {
        AddRunResponse AddTestRun(AddRunRequest addRunRequest);
        AddResultResponse AddTestCaseTestRunResult(AddResultRequest addResultRequest);
    }
}
