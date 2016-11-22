using System.Collections.Generic;

namespace StoryTeller.Engine
{
    public class LineStepGatherer : ILineStepGatherer
    {
        private readonly IList<ILineExecution> _lines = new List<ILineExecution>();
        private readonly SpecContext _context;

        public LineStepGatherer(SpecContext context)
        {
            _context = context;
        }

        public IList<ILineExecution> Lines => _lines;

        ISpecContext ILineStepGatherer.CurrentContext => _context;

        void ILineStepGatherer.Line(ILineExecution execution)
        {
            _lines.Add(execution);
        }

        void ILineStepGatherer.Composite(ICompositeExecution execution)
        {
            foreach (var executionStep in execution.Steps)
            {
                executionStep.AcceptVisitor(this);
            }
        }

    }
}