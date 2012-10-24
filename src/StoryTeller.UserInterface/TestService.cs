using System;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.UserInterface.Running;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface
{
    public interface ITestService
    {
        string CreatePreview(Test test);
        TestState GetStatus(Test test);
        void QueueTest(Test test);
        void CancelTest(Test test);
        void Save(Test test);
        void DeleteTest(Test test);
        void RenameTest(Test test, string newName);
    }

    public class ProjectContext : IListener<BinaryRecycleFinished>, IListener<ProjectLoaded>, IStartable, IListener<Hierarchy>
    {
        public void Handle(BinaryRecycleFinished message)
        {
            Library = message.Library;
        }

        public FixtureLibrary Library { get; set; }
        public IProject Project { get; set; }

        public void Handle(ProjectLoaded message)
        {
            Project = message.Project;
        }

        public void Start()
        {
            
        }

        public void Handle(Hierarchy message)
        {
            Hierarchy = message;
        }

        public Hierarchy Hierarchy { get; set; }
    }

    public class TestService : ITestService, IListener<BinaryRecycleFinished>
    {
        private readonly ITestConverter _converter;
        private readonly IEventAggregator _events;
        private readonly IExecutionQueue _queue;
        private FixtureLibrary _library;

        public TestService(IExecutionQueue queue, ITestConverter converter, IEventAggregator events,
                           FixtureLibrary library)
        {
            _queue = queue;
            _converter = converter;
            _events = events;
            _library = library;
        }

        public FixtureLibrary Library { get { return _library; } }

        #region IListener<BinaryRecycleFinished> Members

        public void Handle(BinaryRecycleFinished message)
        {
            _library = message.Library;
        }

        #endregion

        #region ITestService Members

        public string CreatePreview(Test test)
        {
            return _converter.ToPreview(_library, test);
        }

        public TestState GetStatus(Test test)
        {
            if (_queue.ExecutingTest == test) return TestState.Executing;
            return _queue.IsQueued(test) ? TestState.Queued : TestState.NotQueued;
        }

        public void QueueTest(Test test)
        {
            _queue.QueueTest(test);
        }

        public void CancelTest(Test test)
        {
            _queue.Cancel(test);
        }

        public virtual void Save(Test test)
        {
            _events.SendMessage(new SaveTestMessage(test));
        }

        public void DeleteTest(Test test)
        {
            _events.SendMessage(new DeleteTestMessage(test));
        }

        public void RenameTest(Test test, string newName)
        {
            _events.SendMessage(new RenameTestRequest
            {
                NewName = newName,
                Test = test
            });
        }

        #endregion
    }
}