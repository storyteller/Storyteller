namespace Storyteller.Core.Engine
{
    public class SynchronousExecutor : IStepExecutor
    {
        private readonly ISpecContext _context;

        public SynchronousExecutor(ISpecContext context)
        {
            _context = context;
        }

        public void Line(ILineExecution execution)
        {
            if (!_context.CanContinue()) return;

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

                executionStep.AcceptVisitor(this);
            }
        }

        public ISpecContext CurrentContext
        {
            get { return _context; }
        }
    }
}