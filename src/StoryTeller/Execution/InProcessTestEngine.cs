using System;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Workspace;

namespace StoryTeller.Execution
{
    public class InProcessTestRunnerDomain : ITestRunnerDomain
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public void LoadProject(IProject project)
        {
            throw new NotImplementedException();
        }

        public void Teardown()
        {
            throw new NotImplementedException();
        }

        public void RecycleEnvironment()
        {
            throw new NotImplementedException();
        }

        public bool HasStarted()
        {
            throw new NotImplementedException();
        }

        public TestResult RunTest(TestExecutionRequest request)
        {
            throw new NotImplementedException();
        }

        public void AbortCurrentTest()
        {
            throw new NotImplementedException();
        }

        public bool IsExecuting()
        {
            throw new NotImplementedException();
        }

        public void MarkTestFinalStatus(Test test)
        {
            throw new NotImplementedException();
        }

        public FixtureLibrary Library
        {
            get { throw new NotImplementedException(); } }

        
        public void UseTeamCityListener()
        {
            throw new NotImplementedException();
        }
    }

    public class InProcessTestEngine : TestEngine
    {
        public InProcessTestEngine()
            : base(new InProcessTestRunnerDomain(), new TestStopConditions())
        {
        }
    }
}