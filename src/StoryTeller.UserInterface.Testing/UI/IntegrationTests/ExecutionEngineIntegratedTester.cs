using System.Threading;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Eventing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Running;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.IntegrationTests
{
    [TestFixture]
    public class ExecutionEngineIntegratedTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            // This must be done first
            SynchronizationContext.SetSynchronizationContext(new SynchronizationContext());

            ProjectPersistor.DeleteHistoryFile();
            Bootstrapper.BootstrapShell(false);


            listener = new StubTestListener();
            var events = ObjectFactory.GetInstance<IEventAggregator>();
            SpecificationExtensions.As<EventAggregator>(events).RemoveAllListeners(
                x => x is StatusPresenter || x is TestExplorer || x is FixtureExplorer || x is TestStatusBar);
            events.AddListener(listener);

            DataMother.LoadMathProject();

            SpecificationExtensions.As<TestEngine>(ObjectFactory.GetInstance<ITestEngine>()).WaitForProcessing();
        }

        #endregion

        private StubTestListener listener;


        public class StubTestListener : IListener<TestRunEvent>
        {
            private readonly ManualResetEvent _event = new ManualResetEvent(false);

            #region IListener<TestRunEvent> Members

            public void Handle(TestRunEvent message)
            {
                if (message.Completed)
                {
                    _event.Set();
                }
            }

            #endregion

            public void Wait5SecondsForCompletion()
            {
                _event.WaitOne(3000).ShouldBeTrue();
            }
        }

        [Test, Explicit]
        public void run_test_through_the_container()
        {
            var queue = SpecificationExtensions.As<ExecutionQueue>(ObjectFactory.GetInstance<IExecutionQueue>());
            Test test = StoryTeller.Testing.DataMother.MathProject().LoadTests().Tests[0];

            test.ShouldNotBeNull();

            queue.QueueTest(test);
            listener.Wait5SecondsForCompletion();
            queue.Stop();
        }
    }
}