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
            throw new System.NotImplementedException();
        }

        public void Composite(ICompositeExecution execution)
        {
            throw new System.NotImplementedException();
        }

        public void Action(ISilentAction action)
        {
            throw new System.NotImplementedException();
        }
    }
}