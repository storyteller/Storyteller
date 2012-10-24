using System;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Execution
{
    public class UserInterfaceTestObserver : ITestObserver
    {
        private readonly IEventPublisher _publisher;
        private readonly TestExecutionRequest _request;
        private readonly object _locker = new object();
        private TestStatusMessage _lastStatus;
        private TestProgression _progression;

        public UserInterfaceTestObserver(IEventPublisher publisher, TestExecutionRequest request)
        {
            _publisher = publisher;
            _request = request;
        }

        public TestProgression Progression { get { return _progression; } }

        #region ITestObserver Members

        void ITestObserver.StartTest(Test test, Counts counts)
        {
            lock (_locker)
            {
                _progression = new TestProgression(test, counts);
            }

            Publish();
        }

        void ITestObserver.StartSection(Section section)
        {
            StartPart(section);
        }

        void ITestObserver.FinishSection(Section section)
        {
            FinishPart(section);
        }

        void ITestObserver.StartStep(IStep step)
        {
            StartPart(step);
        }

        void ITestObserver.FinishStep(IStep step)
        {
            FinishPart(step);
        }

        void ITestObserver.FinishTest(Test test)
        {
            lock (_locker)
            {
                _lastStatus = new TestStatusMessage
                {
                    Status = test.GetStatus(),
                    TestPath = test.LocatorPath()
                };

                _progression = null;
            }

            Publish();
        }

        void ITestObserver.Exception(string exceptionString)
        {
            Console.WriteLine(exceptionString);
        }

        public bool CanContinue(Counts counts)
        {
            if (_request.BreakOnExceptions && counts.Exceptions > 0) return false;
            if (_request.BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }

        #endregion


        #region IUserInterfaceTestObserver Members

        public TestStatusMessage GetStatus()
        {
            lock (_locker)
            {
                if (_progression == null)
                {
                    return _lastStatus ?? new TestStatusMessage();
                }

                return _progression.BuildStatus();
            }
        }

        public int TimeoutInSeconds { get; set; }

        #endregion

        public virtual void StartPart(ITestPart part)
        {
            _progression.Start(part);
            Publish();
        }

        public virtual void FinishPart(ITestPart part)
        {
            _progression.IncrementProgress(part);
            Publish();
        }

        public virtual void Publish()
        {
            _publisher.Publish(GetStatus());
        }


        public void FinishTestRetries(Test test)
        {
            
        }
    }
}