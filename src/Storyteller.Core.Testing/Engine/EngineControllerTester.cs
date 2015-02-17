using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Engine;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Testing.Engine
{

    [TestFixture]
    public class when_receiving_a_run_spec_message : EngineControllerContext
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
    public class when_receiving_a_run_specs_message : EngineControllerContext
    {
        protected override void theContextIs()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Receive(new RunSpecs{list = new []{"a", "b", "c"}});
        }

        [Test]
        public void enqueues_each_spec()
        {
            ClassUnderTest.AssertWasCalled(x => x.RunSpec("a"));
            ClassUnderTest.AssertWasCalled(x => x.RunSpec("b"));
            ClassUnderTest.AssertWasCalled(x => x.RunSpec("c"));
        }
    }

    public abstract class EngineControllerContext : InteractionContext<EngineController>
    {
        protected sealed override void beforeEach()
        {
            ClassUnderTest.Receive(new HierarchyLoaded{root = TestingContext.Hierarchy});
            theContextIs();
        }

        protected abstract void theContextIs();

        protected SpecNode findSpec(string id)
        {
            return TestingContext.Hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }
    }

    
}