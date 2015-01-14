namespace Storyteller.Core.Engine
{
    // TODO -- add in progress reporting somehow
    public class SynchronousExecutor : ISpecExecutor
    {
        private readonly ISpecContext _context;
        private readonly IExecutionStep _step;

        public SynchronousExecutor(ISpecContext context, IExecutionStep step)
        {
            _context = context;
            _step = step;
        }

        public void Line(ILineExecution execution)
        {
            execution.Execute(_context);
        }

        public void Composite(ICompositeExecution execution)
        {
            foreach (var executionStep in execution.Steps)
            {
                if (!_context.CanContinue())
                {
                    break;
                }

                // TODO -- will broadcast progress updates maybe
                executionStep.AcceptVisitor(this);
            }
        }

        public void Action(ISilentAction action)
        {
            // Not allowed to throw exceptions. There's only
            // two of them so far
            action.Execute(_context);
        }

        public void Execute()
        {
            _step.AcceptVisitor(this);
        }
    }
}