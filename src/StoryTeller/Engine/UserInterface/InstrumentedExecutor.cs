using StoryTeller.Engine.Batching;
using StoryTeller.Grammars;
using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public class InstrumentedExecutor : IStepExecutor
    {
        private readonly IUserInterfaceObserver _observer;
        private readonly int _total;
        private int _step;
        private readonly SpecificationPlan _plan;
        private readonly SpecContext _context;

        public InstrumentedExecutor(SpecContext context, SpecificationPlan plan, IUserInterfaceObserver observer) 
        {
            _observer = observer;
            _total = plan.Count();
            _step = 0;
            _plan = plan;
            _context = context;
        }

        public void Composite(ICompositeExecution execution)
        {
            foreach (var executionStep in execution.Steps)
            {
                if (!_context.CanContinue())
                {
                    break;
                }

                executionStep.AcceptVisitor(this);
            }
        }

        public void Line(ILineExecution execution)
        {
            if (!_context.CanContinue()) return;

            execution.Execute(_context);

            var progress = new SpecProgress(_plan.Specification.id, CurrentContext.Counts.Clone(), ++_step, _total);
            _observer.SendProgress(progress);
        }

        public ISpecContext CurrentContext => _context;

    }
}