using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Workspace;
using StoryTeller.Workspace;
using Rhino.Mocks;
using System.Linq;

namespace StoryTeller.UserInterface.Testing.UI.Workspace
{
    [TestFixture]
    public class when_handling_the_test_run_finished_event : TestResultHandlerContext<TestRunEvent>
    {
        protected override void theContextIs()
        {


            theMessage = new TestRunEvent(new Test("something")
            {
                LastResult = new TestResult()
            }, TestState.Executing)
            {
                Completed = true
            };
        }

        [Test]
        public void should_persist_the_results()
        {
            MockFor<IResultPersistor>().AssertWasCalled(x => x.SaveResult(MockFor<IProject>(), theMessage.Test, theMessage.Test.LastResult));
        }
    }

    [TestFixture]
    public class when_handling_the_test_run_event_that_did_not_complete : TestResultHandlerContext<TestRunEvent>
    {
        protected override void theContextIs()
        {
            theMessage = new TestRunEvent(new Test("something")
            {
                LastResult = new TestResult()
            }, TestState.Executing)
            {
                Completed = false
            };
        }

        [Test]
        public void should_not_persist_the_results()
        {
            MockFor<IResultPersistor>().AssertWasNotCalled(x => x.SaveResult(MockFor<IProject>(), null, null), x => x.IgnoreArguments());
        }
    }

    [TestFixture]
    public class when_applying_results_to_the_hiearchy : InteractionContext<TestResultHandler>
    {
        private Hierarchy hierarchy;
        private Test test1;
        private Test test2;
        private Test test3;
        private ResultHistory results;
        private Test[] tests;

        protected override void beforeEach()
        {
            hierarchy = StoryTeller.Testing.DataMother.MathProject().LoadTests();

            tests = hierarchy.GetAllTests().ToArray();
            test1 = tests[0];
            test2 = tests[1];
            test3 = tests[2];

            test2.LastResult = new TestResult();
            test3.LastResult = new TestResult();

            results = new ResultHistory();

            results[test1] = new TestResult();
            results[test2] = new TestResult();
        
            ClassUnderTest.ApplyResults(hierarchy, results);
        }

        [Test]
        public void should_clear_off_existing_results_if_there_is_nothing_in_the_history()
        {
            test3.LastResult.ShouldBeNull();
        }

        [Test]
        public void should_replace_the_result_with_the_loaded_result()
        {
            test1.LastResult.ShouldBeTheSameAs(results[test1]);
            test2.LastResult.ShouldBeTheSameAs(results[test2]);
        }

        [Test]
        public void should_send_a_message_to_refresh_the_test_explorer()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage<TestResultsLoaded>());
        }
    }


    [TestFixture]
    public class when_responding_to_the_clear_previous_results_message : TestResultHandlerContext<ClearResultsMessage>
    {
        protected override void theContextIs()
        {
            theMessage = new ClearResultsMessage();
        }

        [Test]
        public void should_delete_the_previous_results()
        {
            MockFor<IResultPersistor>().AssertWasCalled(x => x.ClearResults(MockFor<IProject>()));
        }
    }

    [TestFixture]
    public class when_handling_the_save_results_to_directory_message : InteractionContext<TestResultHandler>
    {
        private SaveResultsToDirectoryMessage theMessage;
        private Hierarchy theHierarchy;
        private ResultHistory theResults;

        protected override void beforeEach()
        {
            theHierarchy = MockRepository.GenerateMock<Hierarchy>("name");
            Services.Inject(new ProjectContext()
            {
                Hierarchy = theHierarchy
            });

            theMessage = new SaveResultsToDirectoryMessage()
            {
                Directory = "some directory"
            };

            theResults = new ResultHistory();
            theHierarchy.Expect(x => x.GetFullResults()).Return(theResults);

            ClassUnderTest.HandleMessage(theMessage);
        }

        [Test]
        public void should_fetch_the_full_results_from_the_hierarchy()
        {
            theHierarchy.VerifyAllExpectations();
        }

        [Test]
        public void should_persist_the_results()
        {
            MockFor<IResultPersistor>().AssertWasCalled(x => x.SaveResultsToDirectory(theResults, theMessage.Directory));
        }
    }


    [TestFixture]
    public class when_handling_the_load_previous_results_message : TestResultHandlerContext<LoadPreviousResults>
    {
        private ResultHistory theResults;

        protected override void theContextIs()
        {
            Services.PartialMockTheClassUnderTest();
            theMessage = new LoadPreviousResults();

            theResults = new ResultHistory();
            MockFor<IResultPersistor>().Expect(x => x.LoadResults(MockFor<IProject>())).Return(theResults);
        }

        [Test]
        public void should_load_the_previous_results()
        {
            VerifyCallsFor<IResultPersistor>();
        }

        [Test]
        public void should_set_the_new_results_on_the_test_tree_and_update_the_UI()
        {
            ClassUnderTest.AssertWasCalled(x => x.ApplyResults(hierarchy, theResults));
        }
    }

    [TestFixture]
    public class when_handling_the_load_previous_results_from_a_directory_message : TestResultHandlerContext<LoadResultsFromDirectory>
    {
        private ResultHistory theResults;

        protected override void theContextIs()
        {
            theMessage = new LoadResultsFromDirectory()
            {
                Directory = "some directory"
            };


            theResults = new ResultHistory();
            MockFor<IResultPersistor>().Expect(x => x.LoadResults(theMessage.Directory)).Return(theResults);

            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void should_load_the_previous_results()
        {
            VerifyCallsFor<IResultPersistor>();
        }

        [Test]
        public void should_set_the_new_results_on_the_test_tree_and_update_the_UI()
        {
            ClassUnderTest.AssertWasCalled(x => x.ApplyResults(hierarchy, theResults));
        }
    }


    public abstract class TestResultHandlerContext<T> : InteractionContext<TestResultHandler>
    {
        protected Hierarchy hierarchy;
        protected T theMessage;


        protected sealed override void beforeEach()
        {
            hierarchy = StoryTeller.Testing.DataMother.MathProject().LoadTests();
            Services.Inject(new ProjectContext()
            {
                Project = MockFor<IProject>(),
                Hierarchy = hierarchy
            });

            theContextIs();

            ClassUnderTest.HandleMessage(theMessage);
        }

        protected virtual void theContextIs()
        {
        }

    }
}