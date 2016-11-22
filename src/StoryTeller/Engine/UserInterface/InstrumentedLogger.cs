using System.Collections.Generic;
using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public class InstrumentedLogger : IExecutionLogger
    {
        private readonly IUserInterfaceObserver _observer;
        private int _total;
        private int _step = 0;

        public InstrumentedLogger(IUserInterfaceObserver observer)
        {
            _observer = observer;
        }

        public void Starting(IList<ILineExecution> all)
        {
            _total = all.Count;
        }

        public void LineComplete(ISpecContext context, ILineExecution line)
        {
            var progress = new SpecProgress(context.Specification.id, context.Counts.Clone(), ++_step, _total);
            _observer.SendProgress(progress);
        }
    }
}