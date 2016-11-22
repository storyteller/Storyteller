using System.Collections.Generic;
using System.Linq;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Grammars
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

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            gatherer.Composite(this);
        }

        public IExecutionStep[] Steps { get; private set; }
        public int Attempts { get; set; }
        public Specification Specification { get; set; }
    }
}