using System;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.Testing.Model;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Running;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class StatusPresenterTester : InteractionContext<StatusPresenter>
    {
        [Test]
        public void fixture_library_loaded_updates_the_cycle_time()
        {
            var library = new FixtureLibrary();

            var message = new BinaryRecycleFinished(library);
            ClassUnderTest.HandleMessage(message);

            MockFor<IStatusView>().AssertWasCalled(x => x.MarkCycleTime(message.Time, true));
        }

        [Test]
        public void fixture_library_loaded_with_no_syntax_errors()
        {
            var library = new FixtureLibrary();
            library.HasErrors().ShouldBeFalse();

            ClassUnderTest.HandleMessage(new BinaryRecycleFinished(library));

            MockFor<IStatusView>().AssertWasCalled(x => x.SyntaxErrorText = "No syntax errors");
        }

        [Test]
        public void fixture_library_loaded_with_syntax_errors()
        {
            var library = new FixtureLibrary();
            StubGrammarStructure structure = new StubGrammarStructure()
                .AddError("bad error!")
                .AddError("bad error 2!")
                .AddError("bad error 3!");

            library.FixtureFor("math").AddStructure("g1", structure);
            library.HasErrors().ShouldBeTrue();

            ClassUnderTest.HandleMessage(new BinaryRecycleFinished(library));

            MockFor<IStatusView>().AssertWasCalled(x => x.SyntaxErrorText = "3 syntax error(s)");
        }

        [Test]
        public void selecting_the_selected_errors_will_launch_the_syntax_errors_screen()
        {
            ClassUnderTest.SyntaxErrorSelected();

            MockFor<IScreenConductor>().OpenScreen(new GrammarErrorsSubject());
        }

        [Test]
        public void showing_queue_opens_the_queu_page()
        {
            ClassUnderTest.ShowQueue();

            MockFor<IScreenConductor>().AssertWasCalled(x => x.OpenScreen<QueueSubject>());
        }

        [Test]
        public void update_queue_message_with_no_tests_in_the_queue()
        {
            MockFor<IExecutionQueue>().Expect(x => x.GetAllQueuedTests()).Return(new Test[0]);
            ClassUnderTest.UpdateQueueMessage();

            MockFor<IStatusView>().AssertWasCalled(x => x.QueueMessage = "No tests queued");
        }

        [Test]
        public void update_queue_message_with_tests_in_the_queue()
        {
            MockFor<IExecutionQueue>().Expect(x => x.GetAllQueuedTests()).Return(new[]
            {new Test("something"), new Test("a"),});
            ClassUnderTest.UpdateQueueMessage();

            MockFor<IStatusView>().AssertWasCalled(x => x.QueueMessage = "2 test(s) queued");
        }

        [Test]
        public void when_cancelling_a_test()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.UpdateQueueMessage());
            ClassUnderTest.CallOn<IListener<TestRunEvent>>(
                x => x.Handle(new TestRunEvent(new Test("a"), TestState.NotQueued)));

            ClassUnderTest.AssertWasCalled(x => x.UpdateQueueMessage());
        }


        [Test]
        public void when_receiving_the_binary_recycle_started_message()
        {
            ClassUnderTest.HandleMessage(new BinaryRecycleStarted());
            MockFor<IStatusView>().AssertWasCalled(x => x.ShowRecycleStarted());
        }
    }


    [TestFixture]
    public class when_receiving_the_binary_recycle_failure_message : InteractionContext<StatusPresenter>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.HandleMessage(new BinaryRecycleFailure());
        }

        [Test]
        public void should_direct_the_status_bar_to_show_the_recycle_was_finished_and_failed()
        {
            MockFor<IStatusView>().AssertWasCalled(x => x.MarkCycleTime(DateTime.Now, false), x => x.Constraints(Is.TypeOf<DateTime>(), Is.Equal(false)));
        }
    }


    [TestFixture]
    public class when_finishing_a_test : InteractionContext<StatusPresenter>
    {
        private Test test;

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.Expect(x => x.UpdateQueueMessage());

            test = StoryTeller.Testing.DataMother.SuccessfulTest();

            ClassUnderTest.CallOn<IListener<TestRunEvent>>(x => x.Handle(new TestRunEvent(test, TestState.NotQueued)
            {
                Completed = true
            }));
        }


        [Test]
        public void should_update_the_queue_message()
        {
            ClassUnderTest.AssertWasCalled(x => x.UpdateQueueMessage());
        }
    }

    [TestFixture]
    public class when_starting_a_new_test : InteractionContext<StatusPresenter>
    {
        private Test test;

        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.Expect(x => x.UpdateQueueMessage());

            test = StoryTeller.Testing.DataMother.SuccessfulTest();

            ClassUnderTest.CallOn<IListener<TestRunEvent>>(x => x.Handle(new TestRunEvent(test, TestState.Executing)));
        }

        [Test]
        public void should_update_the_queue_message()
        {
            ClassUnderTest.AssertWasCalled(x => x.UpdateQueueMessage());
        }
    }
}