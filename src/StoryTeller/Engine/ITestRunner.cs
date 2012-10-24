using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public interface ITestRunner : IDisposable
    {
        ITestObserver Listener { get; set; }
        FixtureLibrary Library { get; }

        [Obsolete("this has to take in the timeout somehow")]
        void RunTests(IEnumerable<Test> tests, IBatchListener listener);

        TestResult RunTest(TestExecutionRequest request);
        void Abort();
    }
}