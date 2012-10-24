using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class TestServiceTester : InteractionContext<TestService>
    {
        private FixtureLibrary initialLibrary;
        private FixtureLibrary newLibrary;


        protected override void beforeEach()
        {
            initialLibrary = new FixtureLibrary();
            Services.Inject(initialLibrary);

            newLibrary = new FixtureLibrary();
        }

        [Test]
        public void cancel_test_delegates_to_queue()
        {
            var test = new Test("test 1");
            ClassUnderTest.CancelTest(test);

            MockFor<IExecutionQueue>().AssertWasCalled(x => x.Cancel(test));
        }

        [Test]
        public void creating_preview_uses_the_test_converter_and_the_initial_library()
        {
            var test = new Test("some test");
            string html1 = "<test/>";

            MockFor<ITestConverter>().Expect(x => x.ToPreview(initialLibrary, test)).Return(html1);

            ClassUnderTest.CreatePreview(test).ShouldEqual(html1);

            MockFor<ITestConverter>().VerifyAllExpectations();
        }

        [Test]
        public void deleting_a_test_sends_a_message()
        {
            var test = new Test("test 1");
            ClassUnderTest.DeleteTest(test);

            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new DeleteTestMessage(test)));
        }

        [Test]
        public void get_status_when_the_test_is_executing()
        {
            var test = new Test("a test");
            MockFor<IExecutionQueue>().Stub(x => x.ExecutingTest).Return(test);

            ClassUnderTest.GetStatus(test).ShouldEqual(TestState.Executing);
        }

        [Test]
        public void get_status_when_the_test_is_neither_queued_not_executing()
        {
            var test = new Test("a test");
            MockFor<IExecutionQueue>().Stub(x => x.ExecutingTest).Return(new Test("other test"));

            MockFor<IExecutionQueue>().Stub(x => x.IsQueued(test)).Return(false);

            ClassUnderTest.GetStatus(test).ShouldEqual(TestState.NotQueued);
        }

        [Test]
        public void get_status_when_the_test_is_queued()
        {
            var test = new Test("a test");
            MockFor<IExecutionQueue>().Stub(x => x.ExecutingTest).Return(new Test("other test"));

            MockFor<IExecutionQueue>().Stub(x => x.IsQueued(test)).Return(true);

            ClassUnderTest.GetStatus(test).ShouldEqual(TestState.Queued);
        }

        [Test]
        public void queue_test_delegates_to_queue()
        {
            var test = new Test("test 1");
            ClassUnderTest.QueueTest(test);

            MockFor<IExecutionQueue>().AssertWasCalled(x => x.QueueTest(test));
        }

        [Test]
        public void saving_a_test_sends_a_message()
        {
            var test = new Test("test 1");
            ClassUnderTest.Save(test);

            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new SaveTestMessage(test)));
        }

        [Test]
        public void
            test_service_should_replace_its_current_fixture_library_when_the_fixturelibraryloaded_message_is_called()
        {
            ClassUnderTest.Library.ShouldBeTheSameAs(initialLibrary);

            ClassUnderTest.HandleMessage(new BinaryRecycleFinished(newLibrary));

            ClassUnderTest.Library.ShouldBeTheSameAs(newLibrary);
        }

    }
}