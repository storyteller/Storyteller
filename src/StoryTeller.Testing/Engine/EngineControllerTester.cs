using System.Collections.Generic;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_receiving_a_run_spec_message_with_only_the_id : EngineControllerContext
    {
        protected override void theContextIs()
        {
            receiveRunSpec("embeds");
        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Test]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldBe("embeds");
        }

        [Test]
        public void latches_on_runspec_such_that_it_will_not_double_queue()
        {
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");

            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldBe("embeds");
        }

        [Test]
        public void should_enqueue_the_request()
        {
            MockFor<ISpecificationEngine>()
                .AssertWasCalled(x => x.Enqueue(new SpecExecutionRequest(findSpec("embeds"), null)));
        }
    }


    [TestFixture]
    public class when_receiving_a_run_spec_message_with_the_actual_spec : EngineControllerContext
    {
        private Specification theSpecification;

        protected override void theContextIs()
        {
            receiveRunSpec("embeds");
            theSpecification = TestingContext.FindSpecification("embeds");


        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Test]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldBe("embeds");
        }

        [Test]
        public void latches_on_runspec_such_that_it_will_not_double_queue()
        {
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");

            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldBe("embeds");
        }


        [Test]
        public void should_enqueue_the_specification()
        {
            var specificationEngine = MockFor<ISpecificationEngine>();
            specificationEngine.AssertWasCalled(x => x.Enqueue(new SpecExecutionRequest(findSpec("embeds"), null)));

            var request =
                specificationEngine.GetArgumentsForCallsMadeOn(x => x.Enqueue(null))[0][0].As<SpecExecutionRequest>();

            request.Specification.id.ShouldBe(theSpecification.id);
        }
    }

    [TestFixture]
    public class when_receiving_the_spec_execution_finished : EngineControllerContext
    {
        private SpecResults theResults;

        protected override void theContextIs()
        {
            receiveRunSpec("embeds");

            var node = findSpec("embeds");
            theResults = new SpecResults {Counts = new Counts(1, 0, 0, 0)};
            ClassUnderTest.SpecExecutionFinished(node, theResults);
        }

        [Test]
        public void removes_the_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Any().ShouldBe(false);
        }

        [Test]
        public void sends_a_conpletion_message_to_the_client()
        {
            MockFor<IUserInterfaceObserver>()
                .AssertWasCalled(x => x.SendToClient(new SpecExecutionCompleted("embeds", theResults)));
        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }

    [TestFixture]
    public class when_receiving_a_run_specs_message : EngineControllerContext
    {
        protected override void theContextIs()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.RunSpec("a", new Specification{id = "a"}));
            ClassUnderTest.Expect(x => x.RunSpec("b", new Specification { id = "b" }));
            ClassUnderTest.Expect(x => x.RunSpec("c", new Specification { id = "c" }));

            ClassUnderTest.Receive(new RunSpecs {list = new[] {"a", "b", "c"}});
        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Test]
        public void enqueues_each_spec()
        {
            ClassUnderTest.VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_receiving_a_request_to_cancel_a_spec : EngineControllerContext
    {
        private SpecExecutionRequest theOutstandingRequest;

        protected override void theContextIs()
        {
            receiveRunSpec("embeds");
            theOutstandingRequest = ClassUnderTest.OutstandingRequests().Single();

            ClassUnderTest.Receive(new CancelSpec {id = "embeds"});
        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Test]
        public void should_cancel_the_running_spec()
        {
            MockFor<ISpecificationEngine>().AssertWasCalled(x => x.CancelRunningSpec("embeds"));
        }

        [Test]
        public void the_outstanding_request_should_be_cancelled()
        {
            theOutstandingRequest.IsCancelled.ShouldBe(true);
        }

        [Test]
        public void should_be_removed_from_the_outstanding_request_list()
        {
            ClassUnderTest.OutstandingRequests()
                .Any().ShouldBe(false);
        }

    }

    [TestFixture]
    public class When_receiving_the_request_to_cancel_all_specs : EngineControllerContext
    {
        private IEnumerable<SpecExecutionRequest> theOutstandingRequests;

        protected override void theContextIs()
        {
            receiveRunSpec("embeds");
            receiveRunSpec("sentence1");
            receiveRunSpec("sentence2");
            receiveRunSpec("sentence3");

            theOutstandingRequests = ClassUnderTest.OutstandingRequests();
            theOutstandingRequests.Count().ShouldBe(4);

            ClassUnderTest.Receive(new CancelAllSpecs());
        }

        [Test]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Test]
        public void all_the_outstanding_requests_should_be_canceled()
        {
            theOutstandingRequests.Each(x => x.IsCancelled.ShouldBe(true));
        }

        [Test]
        public void should_be_no_outstanding_requests()
        {
            ClassUnderTest.OutstandingRequests().Any().ShouldBe(false);
        }
    }

    [TestFixture]
    public class when_determining_the_queue_state : EngineControllerContext
    {
        protected override void theContextIs()
        {
            
        }

        [Test]
        public void in_the_initial_state()
        {
            var state = ClassUnderTest.QueueState();
            state.queued.Length.ShouldBe(0);
            state.running.ShouldBeNull();
        }

        [Test]
        public void couple_specs_queued_nothing_running()
        {
            ClassUnderTest.RunSpec("sentence1", new Specification { id = "sentence1" });
            ClassUnderTest.RunSpec("sentence2", new Specification{id = "sentence2"});
            ClassUnderTest.RunSpec("sentence3", new Specification{id = "sentence3"});

            MockFor<ISpecRunner>().Stub(x => x.RunningSpecId()).Return(null);

            var state = ClassUnderTest.QueueState();
            state.queued.ShouldHaveTheSameElementsAs("sentence1", "sentence2", "sentence3");

            state.running.ShouldBeNull();
        }

        [Test]
        public void specs_queued_and_one_running()
        {
            ClassUnderTest.RunSpec("sentence1", new Specification { id = "sentence1" });
            ClassUnderTest.RunSpec("sentence2", new Specification { id = "sentence2" });
            ClassUnderTest.RunSpec("sentence3", new Specification { id = "sentence3" });

            MockFor<ISpecRunner>().Stub(x => x.RunningSpecId()).Return("sentence1");

            var state = ClassUnderTest.QueueState();
            state.queued.ShouldHaveTheSameElementsAs("sentence2", "sentence3");

            state.running.ShouldBe("sentence1");
        }
    }

    public abstract class EngineControllerContext : InteractionContext<EngineController>
    {
        protected abstract void theContextIs();

        protected override void beforeEach()
        {
            theContextIs();
        }

        protected void receiveRunSpec(string id)
        {
            var spec = TestingContext.FindSpecification(id);

            ClassUnderTest.Receive(new RunSpec{id = id, spec = spec});
        }

        protected SpecNode findSpec(string id)
        {
            return TestingContext.Hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }

        protected void assertQueueStateWasUpdated()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new QueueState()), x => x.IgnoreArguments());
        }
    }
}