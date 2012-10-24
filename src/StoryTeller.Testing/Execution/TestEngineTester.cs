using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using Rhino.Mocks;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Execution
{

    [TestFixture]
    public class when_building_the_test_execution_request : InteractionContext<TestEngine>
    {
        private Test theTest;
        private TestStopConditions stopConditions;

        protected override void beforeEach()
        {
            var hierarchy = DataMother.BuildHierarchy(@"
workspace1/test1,Success
");

            theTest = hierarchy.FindTest("workspace1/test1");
            theTest.ShouldNotBeNull();

            stopConditions = new TestStopConditions();
            Services.Inject(stopConditions);

            ClassUnderTest.Project = new Project();
        }

        [Test]
        public void includes_the_test()
        {
            // Don't laugh, nothing works if this unit test fails
            ClassUnderTest.GetExecutionRequest(theTest).Test.ShouldBeTheSameAs(theTest);
        }

        [Test]
        public void sets_the_stop_conditions_1()
        {
            stopConditions.BreakOnExceptions = true;
            stopConditions.BreakOnWrongs = false;
            stopConditions.TimeoutInSeconds = 30;

            var request = ClassUnderTest.GetExecutionRequest(theTest);

            request.BreakOnExceptions.ShouldEqual(stopConditions.BreakOnExceptions);
            request.BreakOnWrongs.ShouldEqual(stopConditions.BreakOnWrongs);
            request.TimeoutInSeconds.ShouldEqual(stopConditions.TimeoutInSeconds);
        }


        [Test]
        public void sets_the_stop_conditions_2()
        {
            stopConditions.BreakOnExceptions = false;
            stopConditions.BreakOnWrongs = true;
            stopConditions.TimeoutInSeconds = 45;

            var request = ClassUnderTest.GetExecutionRequest(theTest);

            request.BreakOnExceptions.ShouldEqual(stopConditions.BreakOnExceptions);
            request.BreakOnWrongs.ShouldEqual(stopConditions.BreakOnWrongs);
            request.TimeoutInSeconds.ShouldEqual(stopConditions.TimeoutInSeconds);
        }
    }

    [TestFixture]
    public class when_running_the_test_and_the_domain_has_not_been_started : InteractionContext<TestEngine>
    {
        private TestStopConditions conditions;
        private Test test;
        private Project project;
        private TestResult theResults;

        protected override void beforeEach()
        {
            conditions = new TestStopConditions()
            {
                BreakOnExceptions = true,
                BreakOnWrongs = true,
                TimeoutInSeconds = 45
            };

            Services.Inject(conditions);

            test = new Test("something");
            theResults = new TestResult()
            {
                Counts = new Counts()
            };

            MockFor<ITestRunnerDomain>().Expect(x => x.HasStarted()).Return(false);
            MockFor<ITestRunnerDomain>()
                .Expect(x => x.RunTest(new TestExecutionRequest(test, conditions)))
                .Return(theResults);



            project = new Project();
            ClassUnderTest.Project = project;

            ClassUnderTest.RunTest(test);
        }

        [Test]
        public void should_first_interrogate_the_runner_domain_to_see_if_it_is_running()
        {
            MockFor<ITestRunnerDomain>().AssertWasCalled(x => x.HasStarted());
        }

        [Test]
        public void should_then_start_the_test_app_domain()
        {
            MockFor<ITestRunnerDomain>().AssertWasCalled(x => x.LoadProject(project));
        }

        [Test]
        public void should_execute_the_test_with_the_values_from_the_test_stop_conditions()
        {
            MockFor<ITestRunnerDomain>().VerifyAllExpectations();
        }

        [Test]
        public void should_put_the_test_results_onto_the_test()
        {
            test.LastResult.ShouldBeTheSameAs(theResults);
        }
    }
}