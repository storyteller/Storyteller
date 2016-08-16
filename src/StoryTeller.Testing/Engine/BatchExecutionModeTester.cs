using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    
    public class BatchExecutionModeTester : InteractionContext<BatchExecutionMode>
    {
        private Specification theSpecification;
        private SpecResults theResults;
        private SpecRunnerStatus theStatus = SpecRunnerStatus.Valid;

        public BatchExecutionModeTester()
        {
            Project.CurrentProject = new Project { MaxRetries = 0 };

            theSpecification = new Specification();
            theResults = new SpecResults
            {
                HadCriticalException = false,
                Counts = new Counts(0, 1, 0, 0)
            };

            theStatus = SpecRunnerStatus.Valid;
        }


        [Fact]
        public void never_retry_a_spec_that_succeeded()
        {
            theResults.Counts = new Counts(1, 0, 0, 0);
            Project.CurrentProject.MaxRetries = 5;
            theSpecification.MaxRetries = 3;
            theSpecification.Lifecycle = Lifecycle.Regression;
            
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBeFalse();
        }

        [Fact]
        public void never_retry_a_spec_marked_acceptance()
        {
            theSpecification.Lifecycle = Lifecycle.Acceptance;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);
        }


        [Fact]
        public void never_retry_when_the_spec_encountered_a_critical_exception()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theResults.HadCriticalException = true;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);
        }

        [Fact]
        public void never_retry_when_the_spec_runner_is_in_an_invalid_state()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theStatus = SpecRunnerStatus.Invalid;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);
        }

        [Fact]
        public void retry_if_the_number_of_attempts_is_less_than_the_max_retries()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theResults.Attempts = 1;

            theSpecification.MaxRetries = 0;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);

            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(true);

            theResults.Attempts = 2;
            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);
        }

        [Fact]
        public void retry_if_the_number_of_attempts_is_less_than_the_project_minimum()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theResults.Attempts = 1;

            theSpecification.MaxRetries = 0;
            Project.CurrentProject.MaxRetries = 2;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(true);

            theResults.Attempts = 2;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBe(false);
        }

    }
}