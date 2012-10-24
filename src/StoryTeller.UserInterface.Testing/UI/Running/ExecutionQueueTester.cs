using System;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Running;
using StoryTeller.Workspace;
using StructureMap.AutoMocking;

namespace StoryTeller.UserInterface.Testing.UI.Running
{
    [TestFixture]
    public class when_closing_tests : InteractionContext<ExecutionQueue>
    {
        [Test]
        public void add_no_messages_if_there_are_no_tests_queued()
        {
            ClassUnderTest.GetAllQueuedTests().Count().ShouldEqual(0);
            var token = new CloseToken();

            ClassUnderTest.AddCanCloseMessages(token);

            token.Messages.Count().ShouldEqual(0);
        }

        [Test]
        public void add_tests_are_running_message_if_there_are_tests_queued()
        {
            ClassUnderTest.QueueTest(new Test("something"));

            var token = new CloseToken();
            ClassUnderTest.AddCanCloseMessages(token);

            token.Messages.Contains(ExecutionQueue.TESTS_ARE_RUNNING);
        }
    }


    [TestFixture]
    public class when_cancelling_a_test_that_is_in_the_queueu : InteractionContext<ExecutionQueue>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");

            ClassUnderTest.QueueTest(theTest);
            ClassUnderTest.Cancel(theTest);
        }

        [Test]
        public void send_cancellation_message_if_the_test_is_queued()
        {
            MockFor<IEventAggregator>().AssertWasCalled(
                x => x.SendMessage(new TestRunEvent(theTest, TestState.NotQueued)));
        }

        [Test]
        public void should_remove_the_test_from_the_queue()
        {
            ClassUnderTest.IsQueued(theTest).ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_cancelling_all_tests_in_the_queue : InteractionContext<ExecutionQueue>
    {
        private Test test1;
        private Test test2;
        private Test test3;
        private Test test4;

        protected override void beforeEach()
        {
            test1 = new Test("test1");
            test2 = new Test("test1");
            test3 = new Test("test1");
            test4 = new Test("test1");

            ClassUnderTest.QueueTest(test1);
            ClassUnderTest.QueueTest(test2);
            ClassUnderTest.QueueTest(test3);
            ClassUnderTest.QueueTest(test4);

            ClassUnderTest.CancelAll();
        }

        [Test]
        public void all_of_the_tests_should_be_removed_from_the_queue()
        {
            ClassUnderTest.GetAllQueuedTests().Count().ShouldEqual(0);
        }

        [Test]
        public void should_send_a_cancellation_message_for_all_the_tests()
        {
            var events = MockFor<IEventAggregator>();

            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test1, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test2, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test3, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test4, TestState.NotQueued)));
        }
    }

    [TestFixture]
    public class when_handling_the_project_loaded_message_all_tests_in_the_queue : InteractionContext<ExecutionQueue>
    {
        private Test test1;
        private Test test2;
        private Test test3;
        private Test test4;

        protected override void beforeEach()
        {
            test1 = new Test("test1");
            test2 = new Test("test1");
            test3 = new Test("test1");
            test4 = new Test("test1");

            ClassUnderTest.QueueTest(test1);
            ClassUnderTest.QueueTest(test2);
            ClassUnderTest.QueueTest(test3);
            ClassUnderTest.QueueTest(test4);

            ClassUnderTest.Handle(new ProjectLoaded(null));
        }

        [Test]
        public void all_of_the_tests_should_be_removed_from_the_queue()
        {
            ClassUnderTest.GetAllQueuedTests().Count().ShouldEqual(0);
        }

        [Test]
        public void should_send_a_cancellation_message_for_all_the_tests()
        {
            var events = MockFor<IEventAggregator>();

            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test1, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test2, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test3, TestState.NotQueued)));
            events.AssertWasCalled(x => x.SendMessage(new TestRunEvent(test4, TestState.NotQueued)));
        }
    }

    [TestFixture]
    public class when_cancelling_a_test_that_is_not_in_the_queue : InteractionContext<ExecutionQueue>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");

            ClassUnderTest.Cancel(theTest);
        }

        [Test]
        public void should_not_send_a_cancellation_message()
        {
            MockFor<IEventAggregator>().AssertWasNotCalled(
                x => x.SendMessage(new TestRunEvent(theTest, TestState.NotQueued)));
        }
    }

    [TestFixture]
    public class determining_is_empty_when_no_tests_are_queued : InteractionContext<ExecutionQueue>
    {
        [Test]
        public void the_queue_should_be_empty()
        {
            ClassUnderTest.IsEmpty().ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_shutting_down : InteractionContext<ExecutionQueue>
    {
        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.Expect(x => x.Stop());

            ClassUnderTest.PerformShutdown();
        }

        [Test]
        public void should_stop_itself()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void should_tell_the_test_engine_to_tear_down_the_environment()
        {
            MockFor<ITestEngine>().AssertWasCalled(x => x.Dispose());
        }
    }

    [TestFixture]
    public class when_adding_the_test_to_the_queue : InteractionContext<ExecutionQueue>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");
            ClassUnderTest.QueueTest(theTest);
        }

        [Test]
        public void accessible_through_the_all_tests_enumerator()
        {
            ClassUnderTest.QueueTest(new Test("a"));
            ClassUnderTest.QueueTest(new Test("b"));

            ClassUnderTest.GetAllQueuedTests().Count().ShouldEqual(3);
        }

        [Test]
        public void subsequent_calls_to_queue_a_test_will_not_queue_the_test_again()
        {
            ClassUnderTest.QueueTest(theTest);
            ClassUnderTest.QueueTest(theTest);
            ClassUnderTest.QueueTest(theTest);
            ClassUnderTest.QueueTest(theTest);


            MockFor<IEventAggregator>()
                .AssertWasCalled(x => x.SendMessage(new TestRunEvent(theTest, TestState.Queued)), x => x.Repeat.Once());
        }

        [Test]
        public void the_first_add_to_the_queue_will_broadcast_a_queued_message()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new TestRunEvent(theTest, TestState.Queued)));
        }

        [Test]
        public void the_queue_should_not_be_empty()
        {
            ClassUnderTest.IsEmpty().ShouldBeFalse();
        }

        [Test]
        public void the_test_should_be_in_the_queue()
        {
            ClassUnderTest.IsQueued(theTest).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_executing_a_test_successfully : InteractionContext<ExecutionQueue>
    {
        private Test test;

        protected override void beforeEach()
        {
            test = new Test("some test");


            MockFor<ITestEngine>().Expect(x => x.RunTest(test));

            ClassUnderTest.Execute(test);
        }

        [Test]
        public void should_broadcast_that_the_test_is_completed()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new TestRunEvent(test, TestState.NotQueued)
            {
                Completed = true
            }));
        }

        [Test]
        public void should_execute_the_test_with_the_test_engine()
        {
            MockFor<ITestEngine>().VerifyAllExpectations();
        }

        [Test]
        public void should_first_mark_the_test_as_started()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new TestRunEvent(test, TestState.Executing)));
        }
    }


    public class MockEventAggregator<CuT> : IEventAggregator where CuT : class
    {
        private readonly AutoMocker<CuT> _autoMocker;

        public MockEventAggregator(AutoMocker<CuT> autoMocker)
        {
            _autoMocker = autoMocker;
        }

        #region IEventAggregator Members

        public void SendMessage<T>(Action<T> action) where T : class
        {
            var target = _autoMocker.Get<T>();
            action(target);
        }

        public void SendMessage<T>(T message)
        {
            throw new NotImplementedException();
        }

        public void SendMessage<T>() where T : new()
        {
            throw new NotImplementedException();
        }

        public void AddListener(object listener)
        {
            throw new NotImplementedException();
        }

        public void RemoveListener(object listener)
        {
            throw new NotImplementedException();
        }

        public If<T> If<T>(Func<T, bool> filter)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}