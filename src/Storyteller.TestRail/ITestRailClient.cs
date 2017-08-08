using StoryTeller.TestRail.Models.Runs;
using StoryTeller.TestRail.Models.Results;

namespace StoryTeller.TestRail
{
    public interface ITestRailClient
    {
        AddRunResponse AddTestRun(AddRunRequest addRunRequest);
        AddResultResponse AddTestCaseTestRunResult(AddResultRequest addResultRequest);
    }
}
