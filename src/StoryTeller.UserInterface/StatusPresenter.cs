using System;
using System.Linq;
using FubuCore;
using StoryTeller.Execution;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface
{
    public interface IStatusView : INeedBuildUp
    {
        string SyntaxErrorText { set; }
        StatusPresenter Presenter { set; }
        string QueueMessage { set; }
        void MarkCycleTime(DateTime time, bool success);
        void ShowRecycleStarted();
    }

    public class StatusPresenter : IStartable
                                   , IListener<BinaryRecycleFinished>
                                   , IListener<BinaryRecycleStarted>
                                   , IListener<BinaryRecycleFailure>
                                   , IListener<TestRunEvent>
    {
        private readonly IScreenConductor _conductor;
        private readonly GrammarErrorsSubject _errors;
        private readonly IExecutionQueue _queue;
        private readonly IStatusView _view;

        public StatusPresenter(IStatusView view, IScreenConductor shell, GrammarErrorsSubject errors,
                               IExecutionQueue queue)
        {
            _view = view;
            _conductor = shell;
            _errors = errors;
            _queue = queue;
        }

        #region IListener<BinaryRecycleFailure> Members

        public void Handle(BinaryRecycleFailure message)
        {
            _view.MarkCycleTime(DateTime.Now, false);
        }

        #endregion

        #region IListener<BinaryRecycleFinished> Members

        public void Handle(BinaryRecycleFinished message)
        {
            int count = message.Library.AllErrors().Count();
            _view.SyntaxErrorText = count == 0
                                        ? "No syntax errors"
                                        : "{0} syntax error(s)".ToFormat(count);

            _view.MarkCycleTime(message.Time, true);
        }

        #endregion




        #region IListener<BinaryRecycleStarted> Members

        public void Handle(BinaryRecycleStarted message)
        {
            _view.ShowRecycleStarted();
        }

        #endregion

        #region IListener<TestRunEvent> Members

        public void Handle(TestRunEvent message)
        {
            UpdateQueueMessage();
        }

        #endregion

        #region IStartable Members

        public void Start()
        {
            _view.Presenter = this;
        }

        #endregion

        public void SyntaxErrorSelected()
        {
            _conductor.OpenScreen(_errors);
        }

        public virtual void UpdateQueueMessage()
        {
            int count = _queue.GetAllQueuedTests().Count();
            _view.QueueMessage = count == 0
                                     ? "No tests queued"
                                     : "{0} test(s) queued".ToFormat(count);
        }

        public void ShowQueue()
        {
            _conductor.OpenScreen<QueueSubject>();
        }
    }
}