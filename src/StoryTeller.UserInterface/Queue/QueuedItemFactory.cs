using StoryTeller.Domain;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface.Queue
{
    public interface IQueuedItemFactory
    {
        object Build(Test test);
    }

    public class QueuedItemFactory : IQueuedItemFactory
    {
        private readonly IExecutionQueue _queue;
        private readonly IScreenConductor _shell;

        public QueuedItemFactory(IExecutionQueue queue, IScreenConductor shell)
        {
            _queue = queue;
            _shell = shell;
        }

        #region IQueuedItemFactory Members

        public object Build(Test test)
        {
            return new QueuedTestItem(test, _queue, _shell);
        }

        #endregion
    }
}