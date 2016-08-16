using System.Collections.Generic;
using System.Linq;
using Baseline;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class when_receiving_a_run_spec_message_with_only_the_id : EngineControllerContext
    {
        public when_receiving_a_run_spec_message_with_only_the_id()
        {
            receiveRunSpec("embeds");
        }

        [Fact]
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
                .Specification.id.ShouldBe("embeds");
        }

        [Fact]
        public void should_enqueue_the_request()
        {
            MockFor<ISpecificationEngine>()
                .Received().Enqueue(new SpecExecutionRequest(findSpec("embeds"), null));
        }

        [Fact]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Specification.id.ShouldBe("embeds");
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }


    public class when_receiving_a_run_spec_message_with_the_actual_spec : EngineControllerContext
    {
        private Specification theSpecification;

        public when_receiving_a_run_spec_message_with_the_actual_spec()
        {
            receiveRunSpec("embeds");
            theSpecification = TestingContext.FindSpecification("embeds");
        }


        [Fact]
        public void latches_on_runspec_such_that_it_will_not_double_queue()
        {
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");
            receiveRunSpec("embeds");

            ClassUnderTest.OutstandingRequests().Single()
                .Specification.id.ShouldBe("embeds");
        }


        [Fact]
        public void should_enqueue_the_specification()
        {
            var specificationEngine = MockFor<ISpecificationEngine>();
            specificationEngine.Received().Enqueue(new SpecExecutionRequest(findSpec("embeds"), null));

            var request = specificationEngine.ReceivedCalls().First().GetArguments().First().As<SpecExecutionRequest>();


            request.Specification.id.ShouldBe(theSpecification.id);
        }

        [Fact]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Specification.id.ShouldBe("embeds");
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }


    public class when_receiving_the_spec_execution_finished : EngineControllerContext
    {
        private SpecResults theResults;

        public when_receiving_the_spec_execution_finished()
        {
            receiveRunSpec("embeds");

            var node = findSpec("embeds");
            theResults = new SpecResults { Counts = new Counts(1, 0, 0, 0) };
            ClassUnderTest.SpecExecutionFinished(node, theResults);
        }


        [Fact]
        public void removes_the_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Any().ShouldBe(false);
        }

        [Fact]
        public void sends_a_conpletion_message_to_the_client()
        {
            MockFor<IUserInterfaceObserver>()
                .Received().SendToClient(new SpecExecutionCompleted("embeds", theResults, new Specification()));
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }


    public class when_receiving_a_run_specs_message : EngineControllerContext
    {
        private Specification specA = new Specification { id = "a" };
        private Specification specB = new Specification { id = "b" };
        private Specification specC = new Specification { id = "c" };

        public when_receiving_a_run_specs_message()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Receive(new RunSpecs { specs = new[] { specA, specB, specC } });
        }


        [Fact]
        public void enqueues_each_spec()
        {
            ClassUnderTest.Received().RunSpec("a", specA);
            ClassUnderTest.Received().RunSpec("b", specB);
            ClassUnderTest.Received().RunSpec("c", specC);
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }


    public class when_receiving_a_request_to_cancel_a_spec : EngineControllerContext
    {
        private readonly SpecExecutionRequest theOutstandingRequest;

        public when_receiving_a_request_to_cancel_a_spec()
        {
            receiveRunSpec("embeds");
            theOutstandingRequest = ClassUnderTest.OutstandingRequests().Single();

            ClassUnderTest.Receive(new CancelSpec { id = "embeds" });
        }


        [Fact]
        public void should_be_removed_from_the_outstanding_request_list()
        {
            ClassUnderTest.OutstandingRequests()
                .Any().ShouldBe(false);
        }

        [Fact]
        public void should_cancel_the_running_spec()
        {
            MockFor<ISpecificationEngine>().Received().CancelRunningSpec("embeds");
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }

        [Fact]
        public void the_outstanding_request_should_be_cancelled()
        {
            theOutstandingRequest.IsCancelled.ShouldBe(true);
        }
    }


    public class When_receiving_the_request_to_cancel_all_specs : EngineControllerContext
    {
        private IEnumerable<SpecExecutionRequest> theOutstandingRequests;

        public When_receiving_the_request_to_cancel_all_specs()
        {
            receiveRunSpec("embeds");
            receiveRunSpec("sentence1");
            receiveRunSpec("sentence2");
            receiveRunSpec("sentence3");

            theOutstandingRequests = ClassUnderTest.OutstandingRequests();
            theOutstandingRequests.Count().ShouldBe(4);

            ClassUnderTest.Receive(new CancelAllSpecs());
        }


        [Fact]
        public void all_the_outstanding_requests_should_be_canceled()
        {
            theOutstandingRequests.Each(x => x.IsCancelled.ShouldBe(true));
        }

        [Fact]
        public void should_be_no_outstanding_requests()
        {
            ClassUnderTest.OutstandingRequests().Any().ShouldBe(false);
        }

        [Fact]
        public void should_send_the_queue_state_message_to_the_client()
        {
            assertQueueStateWasUpdated();
        }
    }


    public class when_determining_the_queue_state : EngineControllerContext
    {

        [Fact]
        public void couple_specs_queued_nothing_running()
        {
            ClassUnderTest.RunSpec("sentence1", new Specification {id = "sentence1"});
            ClassUnderTest.RunSpec("sentence2", new Specification {id = "sentence2"});
            ClassUnderTest.RunSpec("sentence3", new Specification {id = "sentence3"});

            MockFor<ISpecRunner>().RunningSpecId().ReturnsNull();

            var state = ClassUnderTest.QueueState();
            state.queued.ShouldHaveTheSameElementsAs("sentence1", "sentence2", "sentence3");

            state.running.ShouldBeNull();
        }

        [Fact]
        public void in_the_initial_state()
        {
            var state = ClassUnderTest.QueueState();
            state.queued.Length.ShouldBe(0);
            state.running.ShouldBeEmpty();
        }

        [Fact]
        public void specs_queued_and_one_running()
        {
            ClassUnderTest.RunSpec("sentence1", new Specification {id = "sentence1"});
            ClassUnderTest.RunSpec("sentence2", new Specification {id = "sentence2"});
            ClassUnderTest.RunSpec("sentence3", new Specification {id = "sentence3"});

            MockFor<ISpecRunner>().RunningSpecId().Returns("sentence1");

            var state = ClassUnderTest.QueueState();
            state.queued.ShouldHaveTheSameElementsAs("sentence2", "sentence3");

            state.running.ShouldBe("sentence1");
        }
    }

    public abstract class EngineControllerContext : InteractionContext<EngineController>
    {
        protected void receiveRunSpec(string id)
        {
            var spec = TestingContext.FindSpecification(id);

            ClassUnderTest.Receive(new RunSpec {id = id, spec = spec});
        }

        protected Specification findSpec(string id)
        {
            return TestingContext.Hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }

        protected void assertQueueStateWasUpdated()
        {
            MockFor<IUserInterfaceObserver>().Received().SendToClient(Arg.Any<QueueState>());
        }
    }
}