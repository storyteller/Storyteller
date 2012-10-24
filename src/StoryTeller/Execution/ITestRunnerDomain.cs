using System;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Workspace;

namespace StoryTeller.Execution
{
    public interface ITestRunnerDomain : IDisposable
    {
        void LoadProject(IProject project);
        void Teardown();
        void RecycleEnvironment();
        bool HasStarted();

        TestResult RunTest(TestExecutionRequest request);
        void AbortCurrentTest();
        bool IsExecuting();
        void MarkTestFinalStatus(Test test);

        FixtureLibrary Library { get; }
        void UseTeamCityListener();
    }


}