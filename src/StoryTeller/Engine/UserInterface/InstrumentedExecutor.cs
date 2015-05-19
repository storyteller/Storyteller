using StoryTeller.Engine.Batching;
using StoryTeller.Grammars;
using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public class InstrumentedExecutor : SynchronousExecutor
    {
        private readonly IUserInterfaceObserver _observer;
        private readonly int _total;
        private int _step;
        private readonly SpecificationPlan _plan;

        public InstrumentedExecutor(SpecContext context, SpecificationPlan plan, IUserInterfaceObserver observer) : base(context)
        {
            _observer = observer;
            _total = plan.Count();
            _step = 0;
            _plan = plan;
        }

        public override void Line(ILineExecution execution)
        {
            base.Line(execution);

            var progress = new SpecProgress(_plan.Specification.id, CurrentContext.Counts.Clone(), ++_step, _total);
            _observer.SendProgress(progress);
        }
    }
}