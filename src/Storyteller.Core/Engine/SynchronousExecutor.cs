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
            // TODO -- shouldn't throw exceptions, but you know I'll slip up so try/catch here.
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

        public ISpecContext CurrentContext
        {
            get { return _context; }
        }

        public void Execute()
        {
            _step.AcceptVisitor(this);
        }
    }
}