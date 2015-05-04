using System;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class executing_when_the_runner_is_invalid : InteractionContext<SpecRunner>
    {
        private SpecExecutionRequest theRequest;
        private SpecResults theResults;

        protected override void beforeEach()
        {
            ClassUnderTest.Status = SpecRunnerStatus.Invalid;

            var specNode = new Specification() { id = Guid.NewGuid().ToString() };
            theRequest = new SpecExecutionRequest(specNode, new NulloResultObserver());

            theResults = ClassUnderTest.Execute(theRequest, MockFor<IConsumingQueue>());
        }

        [Test]
        public void the_results_should_show_that_the_spec_was_aborted()
        {
            theResults.WasAborted.ShouldBe(true);
        }


        [Test]
        public void the_attempts_should_be_zero()
        {
            theResults.Attempts.ShouldBe(0);
        }

        [Test]
        public void should_call_through_to_the_before_running_method_on_mode()
        {
            MockFor<IExecutionMode>().AssertWasCalled(x => x.BeforeRunning(theRequest));
        }

        [Test]
        public void should_call_through_to_the_after_running_method_on_the_active_mode()
        {
            MockFor<IExecutionMode>().AssertWasCalled(x => x.AfterRunning(theRequest, theResults, MockFor<IConsumingQueue>(), SpecRunnerStatus.Invalid));
        }
    }

    [TestFixture]
    public class executing_a_spec_when_context_creation_blows_up : InteractionContext<SpecRunner>
    {
        private SpecExecutionRequest theRequest;
        private IConsumingQueue theQueue;
        private DivideByZeroException theException;
        private SpecResults theResults;

        protected override void beforeEach()
        {
            var specNode = new Specification(){id = Guid.NewGuid().ToString()};
            theRequest = new SpecExecutionRequest(specNode, new NulloResultObserver());

            theRequest.CreatePlan(TestingContext.Library);

            theQueue = MockFor<IConsumingQueue>();

            theException = new DivideByZeroException("Wrong!");

            MockFor<ISystem>().Stub(x => x.CreateContext()).Throw(theException);

            ClassUnderTest.Status.ShouldBe(SpecRunnerStatus.Valid);

            theResults = ClassUnderTest.Execute(theRequest, theQueue);
        }


        [Test]
        public void the_attempts_should_be_one()
        {
            theResults.Attempts.ShouldBe(1);
        }

        [Test]
        public void should_have_at_least_one_perf_record()
        {
            theResults.Performance.Length.ShouldBeGreaterThan(0);
        }

        [Test]
        public void was_not_aborted()
        {
            theResults.WasAborted.ShouldBe(false);
        }

        [Test]
        public void the_counts_should_show_one_exception()
        {
            theResults.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void should_mark_itself_as_invalid()
        {
            ClassUnderTest.Status.ShouldBe(SpecRunnerStatus.Invalid);
        }

        [Test]
        public void should_be_a_single_result_for_the_context_exception()
        {
            var result = theResults.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldBe(theRequest.Specification.id);
            result.Status.ShouldBe(ResultStatus.error);
            result.error.ShouldContain(theException.ToString());
            result.position.ShouldBe("context");
            
        }

        [Test]
        public void should_call_through_to_the_before_running_method_on_mode()
        {
            MockFor<IExecutionMode>().AssertWasCalled(x => x.BeforeRunning(theRequest));
        }

        [Test]
        public void should_call_through_to_the_after_running_method_on_the_active_mode()
        {
            MockFor<IExecutionMode>().AssertWasCalled(x => x.AfterRunning(theRequest, theResults, theQueue, SpecRunnerStatus.Invalid));
        }
    }
}