using System;
using StoryTeller.Domain;

namespace StoryTeller.Execution
{
    public interface ITestEngine : IDisposable
    {
        void RunTest(Test test);
        void AbortCurrentTest();
        bool IsExecuting();
    }
}