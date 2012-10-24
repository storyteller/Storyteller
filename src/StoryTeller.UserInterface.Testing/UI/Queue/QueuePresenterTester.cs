using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface.Testing.UI.Queue
{
    [TestFixture]
    public class when_clearing_all_queued_items : InteractionContext<QueuePresenter>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.ClearQueue();
        }

        [Test]
        public void should_abort_any_executing_test()
        {
            MockFor<IExecutionQueue>().AssertWasCalled(x => x.AbortCurrentTest());
        }

        [Test]
        public void should_clear_all_enqueued_tests()
        {
            MockFor<IExecutionQueue>().AssertWasCalled(x => x.CancelAll());
        }
    }


    [TestFixture]
    public class when_activating_the_queue_presenter : InteractionContext<QueuePresenter>
    {
        private object[] items;

        protected override void beforeEach()
        {
            Test[] tests = StoryTeller.Testing.DataMother.TestArray(3);
            items = new[] { new object(), new object(), new object() };

            for (int i = 0; i < items.Length; i++)
            {
                MockFor<IQueuedItemFactory>().Expect(x => x.Build(tests[i])).Return(items[i]);
            }

            MockFor<IExecutionQueue>().Expect(x => x.GetAllQueuedTests()).Return(tests);
            MockFor<IExecutionQueue>().Expect(x => x.IsEmpty()).Return(false);

            ClassUnderTest.Activate(DataMother.ScreenObjectRegistry());
        }

        [Test]
        public void should_have_added_items_for_each_test()
        {
            var view = MockFor<IQueueView>();

            for (int i = 0; i < items.Length; i++)
            {
                object item = items[i];
                view.AssertWasCalled(x => x.AddTestItem(item));
            }
        }
    }


    [TestFixture]
    public class when_activating_the_queue_presenter_and_no_test_is_executing : InteractionContext<QueuePresenter>
    {
        protected override void beforeEach()
        {
            var queue = MockFor<IExecutionQueue>();
            queue.Expect(x => x.GetAllQueuedTests()).Return(new Test[0]);
            queue.Expect(x => x.IsExecuting()).Return(false);
            queue.Expect(x => x.IsEmpty()).Return(true);

            ClassUnderTest.Activate(DataMother.ScreenObjectRegistry());
        }

        [Test]
        public void should_hide_the_active_test_section()
        {
            MockFor<IQueueView>().AssertWasCalled(x => x.HideCurrentTest());
        }

        [Test]
        public void the_no_tests_queued_section_should_be_displayed()
        {
            MockFor<IQueueView>().AssertWasCalled(x => x.NoTestsAreQueued = true);
        }
    }

    [TestFixture]
    public class when_activating_the_queue_presenter_and_a_test_is_executing : InteractionContext<QueuePresenter>
    {
        protected override void beforeEach()
        {
            MockFor<IExecutionQueue>().Expect(x => x.GetAllQueuedTests()).Return(new Test[0]);
            MockFor<IExecutionQueue>().Expect(x => x.IsExecuting()).Return(true);

            ClassUnderTest.Activate(DataMother.ScreenObjectRegistry());
        }

        [Test]
        public void should_show_the_active_test_section()
        {
            MockFor<IQueueView>().AssertWasCalled(x => x.DisplayCurrentTest());
        }
    }

    [TestFixture]
    public class when_aborting_the_test : QueuePresenterContext
    {
        protected override void setUp()
        {
            ClassUnderTest.AbortCurrentTest();
        }

        [Test]
        public void should_direct_the_TestEngine_to_abort()
        {
            MockFor<IExecutionQueue>().AssertWasCalled(x => x.AbortCurrentTest());
        }

        [Test]
        public void should_immediately_hide_the_current_test_section_in_the_screen()
        {
            theView.AssertWasCalled(x => x.HideCurrentTest());
        }
    }

    [TestFixture]
    public class when_a_test_is_cancelled : QueuePresenterContext
    {
        private object theItem;

        protected override void setUp()
        {
            theItem = new object();
            MockFor<IQueuedItemFactory>().Expect(x => x.Build(theTest)).Return(theItem);

            ClassUnderTest.Handle(new TestRunEvent(theTest, TestState.NotQueued));
        }

        [Test]
        public void should_remove_the_test_from_the_view()
        {
            theView.AssertWasCalled(x => x.RemoveTestItem(theItem));
        }
    }


    [TestFixture]
    public class when_a_test_is_finished : QueuePresenterContext
    {
        protected override void setUp()
        {
            theTest.LastResult = new TestResult
            {
                Counts = new Counts(1, 1, 0, 0),
                ExecutionTime = .234
            };

            ClassUnderTest.Handle(new TestRunEvent(theTest, TestState.NotQueued)
            {
                Completed = true
            });
        }

        [Test]
        public void should_tell_the_view_to_hide_the_current_test()
        {
            theView.AssertWasCalled(x => x.HideCurrentTest());
        }
    }


    [TestFixture]
    public class when_starting_to_execute_a_test : QueuePresenterContext
    {
        private object theItem;

        protected override void setUp()
        {
            theItem = new object();
            MockFor<IQueuedItemFactory>().Expect(x => x.Build(theTest)).Return(theItem);

            ClassUnderTest.Handle(new TestRunEvent(theTest, TestState.Executing));
        }

        [Test]
        public void should_display_the_test_being_executed()
        {
            theView.AssertWasCalled(x => x.DisplayCurrentTest());
        }

        [Test]
        public void should_remove_the_test_from_being_displayed_in_the_view()
        {
            theView.AssertWasCalled(x => x.RemoveTestItem(theItem));
        }
    }

    [TestFixture]
    public class when_a_new_test_is_queued : QueuePresenterContext
    {
        private object theItem;

        protected override void setUp()
        {
            MockFor<IExecutionQueue>().Expect(x => x.GetAllQueuedTests()).Return(StoryTeller.Testing.DataMother.TestArray(3));


            theItem = new object();
            MockFor<IQueuedItemFactory>().Expect(x => x.Build(theTest)).Return(theItem);

            ClassUnderTest.Handle(new TestRunEvent(theTest, TestState.Queued));
        }

        [Test]
        public void hide_the_no_tests_label()
        {
            theView.AssertWasCalled(x => x.NoTestsAreQueued = false);
        }

        [Test]
        public void the_test_should_be_added_to_the_view()
        {
            theView.AssertWasCalled(x => x.AddTestItem(theItem));
        }
    }


    public class QueuePresenterContext : InteractionContext<QueuePresenter>
    {
        protected Test theTest;
        protected IQueueView theView;

        protected override sealed void beforeEach()
        {
            theTest = new Test("Some test");
            theView = MockFor<IQueueView>();

            setUp();
        }

        protected virtual void setUp()
        {
        }
    }
}