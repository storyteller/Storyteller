using System.Collections.Generic;
using System.Linq;
using StoryTeller.Engine;

namespace StoryTeller.Grammars
{
    public class CompositeExecution : ICompositeExecution
    {
        public CompositeExecution(IEnumerable<IExecutionStep> steps)
        {
            Steps = steps.ToArray();
        }

        public int Count()
        {
            return Steps.Sum(x => x.Count());
        }

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            gatherer.Composite(this);
        }

        public IExecutionStep[] Steps { get; private set; }
    }
}