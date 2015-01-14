using System;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class SectionPlanTester
    {
        private IFixture theFixture;
        private Section theSection;
        private IExecutionStep[] theNestedSteps;
        private SectionPlan thePlan;

        [SetUp]
        public void SetUp()
        {
            theFixture = MockRepository.GenerateMock<IFixture>();
            theSection = new Section("Math") {Id = Guid.NewGuid().ToString()};
            theNestedSteps = new[]
            {
                MockRepository.GenerateMock<IExecutionStep>(),
                MockRepository.GenerateMock<IExecutionStep>(),
                MockRepository.GenerateMock<IExecutionStep>()
            };

            thePlan = new SectionPlan(theFixture, theSection, theNestedSteps);
        }

        [Test]
        public void wraps_setup_and_teardown_around_the_nested_steps()
        {
            thePlan.Steps.Length.ShouldEqual(5);

            thePlan.Steps.First().ShouldBeOfType<FixtureAction>()
                .Stage.ShouldEqual(Stage.setup);

            thePlan.Steps[1].ShouldBeTheSameAs(theNestedSteps[0]);
            thePlan.Steps[2].ShouldBeTheSameAs(theNestedSteps[1]);
            thePlan.Steps[3].ShouldBeTheSameAs(theNestedSteps[2]);
            
            thePlan.Steps.Last().ShouldBeOfType<FixtureAction>()
                .Stage.ShouldEqual(Stage.teardown);

        }

        [Test]
        public void executing_the_setup_also_sets_the_context()
        {
            var context = SpecContext.ForTesting();
            thePlan.Steps.First().As<ISilentAction>().Execute(context);

            theFixture.AssertWasCalled(x => x.Context = context);
            theFixture.AssertWasCalled(x => x.SetUp());
        }

        [Test]
        public void executes_the_teardown()
        {
            var context = SpecContext.ForTesting();
            thePlan.Steps.Last().As<ISilentAction>().Execute(context);
        
            theFixture.AssertWasCalled(x => x.TearDown());
        }

        [Test]
        public void the_count_is_the_sum_of_the_internal_steps_plus_two_for_setup_and_teardown()
        {
            theNestedSteps[0].Stub(x => x.Count()).Return(3);
            theNestedSteps[1].Stub(x => x.Count()).Return(5);
            theNestedSteps[2].Stub(x => x.Count()).Return(7);

            thePlan.Count().ShouldEqual(1 + 3 + 5 + 7 + 1);
        }

        [Test]
        public void accept_visitor()
        {
            var executor = MockRepository.GenerateMock<ISpecExecutor>();
            thePlan.AcceptVisitor(executor);

            executor.AssertWasCalled(x => x.Composite(thePlan));
        }
    }
}