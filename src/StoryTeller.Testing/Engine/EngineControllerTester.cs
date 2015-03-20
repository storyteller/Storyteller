using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
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
            ClassUnderTest.Receive(new RunSpec{id = "embeds"});
        }

        [Test]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldEqual("embeds");
        }

        [Test]
        public void latches_on_runspec_such_that_it_will_not_double_queue()
        {
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");

            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldEqual("embeds");
        }

        [Test]
        public void should_broadcast_a_spec_queued_message()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SpecQueued(findSpec("embeds")));
        }

        [Test]
        public void should_enqueue_the_request()
        {
            MockFor<ISpecificationEngine>().AssertWasCalled(x => x.Enqueue(new SpecExecutionRequest(findSpec("embeds"), null)));
        }

    }


    [TestFixture]
    public class when_receiving_a_run_spec_message_with_the_actual_spec : EngineControllerContext
    {
        private Specification theSpecification;

        protected override void theContextIs()
        {
            theSpecification = new Specification();
            ClassUnderTest.Receive(new RunSpec { id = "embeds", spec = theSpecification });
        }

        [Test]
        public void should_keep_track_of_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldEqual("embeds");
        }

        [Test]
        public void latches_on_runspec_such_that_it_will_not_double_queue()
        {
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");
            ClassUnderTest.RunSpec("embeds");

            ClassUnderTest.OutstandingRequests().Single()
                .Node.id.ShouldEqual("embeds");
        }

        [Test]
        public void should_broadcast_a_spec_queued_message()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SpecQueued(findSpec("embeds")));
        }

        [Test]
        public void should_enqueue_the_specification()
        {
            var specificationEngine = MockFor<ISpecificationEngine>();
            specificationEngine.AssertWasCalled(x => x.Enqueue(new SpecExecutionRequest(findSpec("embeds"), null)));

            var request = specificationEngine.GetArgumentsForCallsMadeOn(x => x.Enqueue(null))[0][0].As<SpecExecutionRequest>();

            request.Specification.ShouldBeTheSameAs(theSpecification);
        }
    }

    [TestFixture]
    public class when_receiving_the_spec_execution_finished : EngineControllerContext
    {
        private SpecResults theResults;

        protected override void theContextIs()
        {
            ClassUnderTest.Receive(new RunSpec { id = "embeds" });
            var node = findSpec("embeds");
            theResults = new SpecResults { Counts = new Counts(1, 0, 0, 0) };
            ClassUnderTest.SpecExecutionFinished(node, theResults);


        }

        [Test]
        public void removes_the_outstanding_request()
        {
            ClassUnderTest.OutstandingRequests().Any()
                .ShouldBeFalse();
        }

        [Test]
        public void sends_a_conpletion_message_to_the_client()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecExecutionCompleted("embeds", theResults)));
        }
    }

    [TestFixture]
    public class when_receiving_a_run_specs_message : EngineControllerContext
    {
        protected override void theContextIs()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.RunSpec("a"));
            ClassUnderTest.Expect(x => x.RunSpec("b"));
            ClassUnderTest.Expect(x => x.RunSpec("c"));

            ClassUnderTest.Receive(new RunSpecs{list = new []{"a", "b", "c"}});
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
            ClassUnderTest.Receive(new RunSpec { id = "embeds" });
            theOutstandingRequest = ClassUnderTest.OutstandingRequests().Single();

            ClassUnderTest.Receive(new CancelSpec{id = "embeds"});
        }

        [Test]
        public void the_outstanding_request_should_be_cancelled()
        {
            theOutstandingRequest.IsCancelled.ShouldBeTrue();
        }

        [Test]
        public void should_be_removed_from_the_outstanding_request_list()
        {
            ClassUnderTest.OutstandingRequests()
                .Any().ShouldBeFalse();
        }

        [Test]
        public void should_send_a_spec_canceled_message()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecCanceled("embeds")));
        }
    }

    [TestFixture]
    public class When_receiving_the_request_to_cancel_all_specs : EngineControllerContext
    {
        private IEnumerable<SpecExecutionRequest> theOutstandingRequests;

        protected override void theContextIs()
        {
            ClassUnderTest.Receive(new RunSpec { id = "embeds" });
            ClassUnderTest.Receive(new RunSpec { id = "sentence1" });
            ClassUnderTest.Receive(new RunSpec { id = "sentence2" });
            ClassUnderTest.Receive(new RunSpec { id = "sentence3" });

            theOutstandingRequests = ClassUnderTest.OutstandingRequests();
            theOutstandingRequests.Count().ShouldEqual(4);

            ClassUnderTest.Receive(new CancelAllSpecs());
        }

        [Test]
        public void should_broadcast_the_spec_canceled_message()
        {
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecCanceled("embeds")));
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecCanceled("sentence1")));
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecCanceled("sentence2")));
            MockFor<IUserInterfaceObserver>().AssertWasCalled(x => x.SendToClient(new SpecCanceled("sentence3")));
        }

        [Test]
        public void all_the_outstanding_requests_should_be_canceled()
        {
            theOutstandingRequests.Each(x => x.IsCancelled.ShouldBeTrue());
        }

        [Test]
        public void should_be_no_outstanding_requests()
        {
            ClassUnderTest.OutstandingRequests().Any()
                .ShouldBeFalse();
        }
    }

    public abstract class EngineControllerContext : InteractionContext<EngineController>
    {
        protected sealed override void beforeEach()
        {
            ClassUnderTest.Receive(new HierarchyLoaded{hierarchy = TestingContext.Hierarchy});
            theContextIs();
        }

        protected abstract void theContextIs();

        protected SpecNode findSpec(string id)
        {
            return TestingContext.Hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }
    }

    
}