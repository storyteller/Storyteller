using Storyteller.TestRail.Models.Runs;
using Storyteller.TestRail.Results;
using Storyteller.TestRail.Runs;

namespace Storyteller.TestRail
{
    public interface ITestRailClient
    {
        AddRunResponse AddTestRun(AddRunRequest addRunRequest);
        AddResultResponse AddTestCaseTestRunResult(AddResultRequest addResultRequest);
    }
}
