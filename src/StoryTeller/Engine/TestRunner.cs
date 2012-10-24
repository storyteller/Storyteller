using System.Collections.Generic;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class TestRunner : ITestRunner
    {
        private readonly ISystem _system;
        private readonly FixtureLibrary _library;
        private TestRun _currentRun;
        private ITestObserver _listener = new TraceListener();

        public static ITestRunner ForSystem<T>() where T : ISystem, new()
        {
            var system = new T();
            return ForSystem(system);
        }

        public static ITestRunner ForSystem(ISystem system)
        {
            return new TestRunner(system, FixtureGraph.Library);
        }

        public TestRunner() : this(new NulloSystem(), FixtureGraph.Library)
        {
            
        }

        public TestRunner(ISystem system, FixtureLibrary library)
        {
            _system = system;
            _library = library;
        }

        #region ITestRunner Members

        public FixtureLibrary Library
        {
            get { return _library; }
        }

        public ITestObserver Listener
        {
            get { return _listener; }
            set { _listener = value; }
        }

        public virtual void RunTests(IEnumerable<Test> tests, IBatchListener listener)
        {
            var batch = new BatchRunner(tests, listener, this);
            batch.Execute();
        }

        public virtual TestResult RunTest(TestExecutionRequest request)
        {
            try
            {
                _currentRun = new TestRun(request, _listener, _library, _system);
                
                // Setting the LastResult on the test here is just a convenience
                // for testing

                TestResult result = _currentRun.Execute();
                return result;
            }
            finally
            {
                _currentRun = null;
            }
        }


        public void Dispose()
        {
            _system.SafeDispose();
        }

        public void Abort()
        {
            if (_currentRun != null) _currentRun.Abort();
        }

        #endregion

        public bool IsExecuting()
        {
            return _currentRun != null;
        }
    }
}