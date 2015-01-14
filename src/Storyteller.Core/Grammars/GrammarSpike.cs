using System;
using System.Collections.Generic;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class FixtureAction : ISilentAction
    {
        private readonly IFixture _fixture;
        private readonly Stage _stage;
        private readonly Action _action;
        private readonly Section _section;

        public FixtureAction(Stage stage, Action action, Section section)
        {
            _stage = stage;
            _action = action;
            _section = section;
        }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            throw new System.NotImplementedException();
        }

        public void Execute(ISpecContext context)
        {
            throw new System.NotImplementedException();
        }
    }

    public class SectionPlan : ICompositeExecution
    {
        private readonly Section _section;

        public SectionPlan(IFixture fixture, Section section, IEnumerable<IExecutionStep> nestedSteps)
        {
            _section = section;

            var steps = new List<IExecutionStep>();

            steps.Add(new FixtureAction(Stage.setup, fixture.SetUp, _section));

            steps.AddRange(nestedSteps);

            steps.Add(new FixtureAction(Stage.teardown, fixture.TearDown, _section));

            Steps = steps.ToArray();
        }

        public int Count()
        {
            throw new NotImplementedException();
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            throw new NotImplementedException();
        }

        public string Id { get; private set; }
        public IExecutionStep[] Steps { get; private set; }
    }
}