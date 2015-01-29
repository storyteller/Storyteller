using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Engine;

namespace Storyteller.Core.Grammars
{
    // Tested through integration tests only
    public class SpecificationPlan : ICompositeExecution
    {
        public SpecificationPlan(IEnumerable<CompositeExecution> steps)
        {
            Steps = steps.ToArray();
        }

        public int Count()
        {
            return Steps.Sum(x => x.Count());
        }

        public void AcceptVisitor(IStepExecutor executor)
        {
            executor.Composite(this);
        }

        public IExecutionStep[] Steps { get; private set; }
    }
}