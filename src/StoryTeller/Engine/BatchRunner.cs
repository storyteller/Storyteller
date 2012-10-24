using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Execution;

namespace StoryTeller.Engine
{
    public interface IBatchListener
    {
        void StartingTest(Test test);
        void FinishedTest(Test test);
    }

    public class BatchRunner
    {
        private readonly IBatchListener _listener;
        private readonly TestRunner _runner;
        private readonly IEnumerable<Test> _tests;

        public BatchRunner(IEnumerable<Test> tests, IBatchListener listener, TestRunner runner)
        {
            _tests = tests;
            _listener = listener;
            _runner = runner;
        }

        public void Execute()
        {
            foreach (Test test in _tests)
            {
                _listener.StartingTest(test);
                _runner.RunTest(new TestExecutionRequest(test, new TestStopConditions()));
                _listener.FinishedTest(test);
            }
        }
    }
}