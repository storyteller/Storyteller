using System.Collections.Generic;
using StoryTeller;
using StoryTeller.Engine;

namespace ST.Client.Stepthrough
{
    public class ExecutionStepGatherer : IStepExecutor
    {
        private readonly IList<ILineExecution> _lines = new List<ILineExecution>();
        private readonly SpecContext _context;

        public ExecutionStepGatherer(SpecContext context)
        {
            _context = context;
        }

        public IList<ILineExecution> Lines => _lines;

        ISpecContext IStepExecutor.CurrentContext => _context;

        void IStepExecutor.Line(ILineExecution execution)
        {
            _lines.Add(execution);
        }

        void IStepExecutor.Composite(ICompositeExecution execution)
        {
            foreach (var executionStep in execution.Steps)
            {
                executionStep.AcceptVisitor(this);
            }
        }

    }
}