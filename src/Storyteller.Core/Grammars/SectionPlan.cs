using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class SectionPlan : ICompositeExecution
    {
        public SectionPlan(IFixture fixture, Section section, IEnumerable<IExecutionStep> nestedSteps)
        {
            var steps = new List<IExecutionStep>();

            steps.Add(new FixtureAction(Stage.setup, x =>
            {
                fixture.Context = x;
                fixture.SetUp();
            }, section));

            steps.AddRange(nestedSteps);

            steps.Add(new FixtureAction(Stage.teardown, x => fixture.TearDown(), section));

            Steps = steps.ToArray();
        }

        public int Count()
        {
            return Steps.Sum(x => x.Count());
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            executor.Composite(this);
        }

        public IExecutionStep[] Steps { get; private set; }
    }
}