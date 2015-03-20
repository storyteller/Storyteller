using System;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class executing_when_the_runner_is_invalid : InteractionContext<SpecRunner>
    {
        private SpecExecutionRequest theRequest;
        private SpecResults theResults;

        protected override void beforeEach()
        {
            ClassUnderTest.Status = SpecRunnerStatus.Invalid;

            var specNode = new SpecNode { id = Guid.NewGuid().ToString() };
            theRequest = new SpecExecutionRequest(specNode, new NulloResultObserver(),
                new Specification { Id = specNode.id });

            theResults = ClassUnderTest.Execute(theRequest, MockFor<IConsumingQueue>());
        }

        [Test]
        public void the_results_should_show_that_the_spec_was_aborted()
        {
            theResults.WasAborted.ShouldBeTrue();
        }


        [Test]
        public void the_attempts_should_be_zero()
        {
            theResults.Attempts.ShouldEqual(0);
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
            var specNode = new SpecNode{id = Guid.NewGuid().ToString()};
            theRequest = new SpecExecutionRequest(specNode, new NulloResultObserver(),
                new Specification {Id = specNode.id});

            theRequest.CreatePlan(TestingContext.Library);

            theQueue = MockFor<IConsumingQueue>();

            theException = new DivideByZeroException("Wrong!");

            MockFor<ISystem>().Stub(x => x.CreateContext()).Throw(theException);

            ClassUnderTest.Status.ShouldEqual(SpecRunnerStatus.Valid);

            theResults = ClassUnderTest.Execute(theRequest, theQueue);
        }


        [Test]
        public void the_attempts_should_be_one()
        {
            theResults.Attempts.ShouldEqual(1);
        }

        [Test]
        public void should_have_at_least_one_perf_record()
        {
            theResults.Performance.Length.ShouldBeGreaterThan(0);
        }

        [Test]
        public void was_not_aborted()
        {
            theResults.WasAborted.ShouldBeFalse();
        }

        [Test]
        public void the_counts_should_show_one_exception()
        {
            theResults.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void should_mark_itself_as_invalid()
        {
            ClassUnderTest.Status.ShouldEqual(SpecRunnerStatus.Invalid);
        }

        [Test]
        public void should_be_a_single_result_for_the_context_exception()
        {
            var result = theResults.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldEqual(theRequest.Specification.Id);
            result.Status.ShouldEqual(ResultStatus.error);
            result.error.ShouldEqual(theException.ToString());
            result.position.ShouldEqual("context");
            
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