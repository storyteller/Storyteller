using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class BatchExecutionModeTester : InteractionContext<BatchExecutionMode>
    {
        private Specification theSpecification;
        private SpecResults theResults;
        private SpecRunnerStatus theStatus = SpecRunnerStatus.Valid;

        protected override void beforeEach()
        {
            theSpecification = new Specification();
            theResults = new SpecResults
            {
                HadCriticalException = false
            };

            theStatus = SpecRunnerStatus.Valid;
        }

        [Test]
        public void never_retry_a_spec_marked_acceptance()
        {
            theSpecification.Lifecycle = Lifecycle.Acceptance;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus)
                .ShouldBeFalse();
        }


        [Test]
        public void never_retry_when_the_spec_encountered_a_critical_exception()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theResults.HadCriticalException = true;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus)
                .ShouldBeFalse();
        }

        [Test]
        public void never_retry_when_the_spec_runner_is_in_an_invalid_state()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theStatus = SpecRunnerStatus.Invalid;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus)
                .ShouldBeFalse();
        }

        [Test]
        public void retry_if_the_number_of_attempts_is_less_than_the_max_retries()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            theResults.Attempts = 1;

            theSpecification.MaxRetries = 0;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBeFalse();

            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBeTrue();

            theResults.Attempts = 2;
            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(theResults, theSpecification, theStatus).ShouldBeFalse();
        }

    }
}