using System;
using System.Collections.Generic;
using System.Threading;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Running
{
    public class ExecutionQueue : IExecutionQueue
                                  , ICloseable
                                  , IListener<ProjectLoaded>
                                  , IListener<ExecuteTestMessage>
                                  , IListener<CancelTestMessage>
                                  , IListener<CancelAllTests>
    {
        public static readonly string TESTS_ARE_RUNNING = "Tests are running";

        private readonly ITestEngine _engine;
        private readonly IEventAggregator _events;
        private readonly ManualResetEvent _queuedEvent = new ManualResetEvent(false);
        private readonly List<Test> _tests = new List<Test>();
        private bool _continue = true;
        private Test _currentTest;
        private Thread _workerThread;

        public ExecutionQueue(IEventAggregator events, ITestEngine engine)
        {
            _events = events;
            _engine = engine;
        }

        #region ICloseable Members

        public void AddCanCloseMessages(CloseToken token)
        {
            lock (_tests)
            {
                if (_tests.Count > 0)
                {
                    token.AddMessage(TESTS_ARE_RUNNING);
                }
            }
        }

        public void PerformShutdown()
        {
            Stop();
            _engine.Dispose();
        }

        #endregion

        #region IExecutionQueue Members

        public void Start()
        {
            resetThread();
            _continue = true;
            _workerThread = new Thread(runTests);
            _workerThread.Name = "StoryTeller-ExecutionQueue";

            // TEMP
            _workerThread.SetApartmentState(ApartmentState.STA);
            _workerThread.Start();
        }

        public bool IsQueued(Test test)
        {
            lock (_tests)
            {
                return _tests.Contains(test);
            }
        }

        public Test ExecutingTest { get { return _currentTest; } }

        public void QueueTest(Test test)
        {
            lock (_tests)
            {
                if (_tests.Contains(test)) return;

                _tests.Enqueue(test);

                _events.SendMessage(new TestRunEvent(test, TestState.Queued));

                resetThread();
            }
        }

        public void Cancel(Test test)
        {
            lock (_tests)
            {
                if (IsQueued(test))
                {
                    _tests.Remove(test);
                    _tests.TrimExcess();
                    _events.SendMessage(new TestRunEvent(test, TestState.NotQueued));
                }
            }
        }

        public void AbortCurrentTest()
        {
            _engine.AbortCurrentTest();
        }

        public bool IsExecuting()
        {
            return _engine.IsExecuting();
        }

        public bool IsEmpty()
        {
            lock (_tests)
            {
                return _tests.Count == 0;
            }
        }

        public IEnumerable<Test> GetAllQueuedTests()
        {
            lock (_tests)
            {
                return _tests.ToArray();
            }
        }

        public void CancelAll()
        {
            lock (_tests)
            {
                _tests.Each(test => { _events.SendMessage(new TestRunEvent(test, TestState.NotQueued)); });

                _tests.Clear();
            }
        }

        #endregion

        #region IListener<CancelAllTests> Members

        public void Handle(CancelAllTests message)
        {
            CancelAll();
        }

        #endregion
        
        #region IListener<CancelTestMessage> Members

        public void Handle(CancelTestMessage message)
        {
            foreach (Test test in message)
            {
                Cancel(test);
            }
        }

        #endregion

        #region IListener<ExecuteTestMessage> Members

        public void Handle(ExecuteTestMessage message)
        {
            foreach (Test test in message)
            {
                QueueTest(test);
            }
        }

        #endregion

        #region IListener<ProjectLoaded> Members

        // TODO -- do this async
        public void Handle(ProjectLoaded message)
        {
            CancelAll();
        }

        #endregion

        [STAThread]
        private void runTests()
        {
            while (_continue)
            {
                _queuedEvent.WaitOne();
                RunNextTest();
            }
        }

        public virtual void Stop()
        {
            _continue = false;
            _queuedEvent.Set();

            try
            {
                _workerThread.Abort();
                _workerThread = null;
            }
            catch (Exception)
            {
            }
        }

        public void RunNextTest()
        {
            Test test = null;

            lock (_tests)
            {
                if (_tests.Count == 0)
                {
                    _queuedEvent.Reset();
                    return;
                }

                test = _tests.Dequeue();
            }

            Execute(test);


            resetThread();
        }

        public virtual void Execute(Test test)
        {
            _events.SendMessage(new TestRunEvent(test, TestState.Executing));

            _currentTest = test;
            _engine.RunTest(test);
            _currentTest = null;

            _events.SendMessage(new TestRunEvent(test, TestState.NotQueued)
            {
                Completed = true
            });
        }

        private void resetThread()
        {
            lock (_tests)
            {
                if (_tests.Count > 0)
                {
                    _queuedEvent.Set();
                }
                else
                {
                    _queuedEvent.Reset();
                }
            }
        }
    }
}