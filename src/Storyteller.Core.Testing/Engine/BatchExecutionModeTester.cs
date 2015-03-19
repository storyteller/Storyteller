using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class BatchExecutionModeTester : InteractionContext<BatchExecutionMode>
    {
        private Specification theSpecification;
        private SpecificationPlan thePlan;

        protected override void beforeEach()
        {
            theSpecification = new Specification();
            thePlan = new SpecificationPlan(new CompositeExecution[0]);
        }

        [Test]
        public void never_retry_a_spec_marked_acceptance()
        {
            theSpecification.Lifecycle = Lifecycle.Acceptance;
            ClassUnderTest.ShouldRetry(thePlan, theSpecification)
                .ShouldBeFalse();
        }

        [Test]
        public void retry_if_the_number_of_attempts_is_less_than_the_max_retries()
        {
            theSpecification.Lifecycle = Lifecycle.Regression;
            thePlan.Attempts = 1;

            theSpecification.MaxRetries = 0;
            ClassUnderTest.ShouldRetry(thePlan, theSpecification).ShouldBeFalse();

            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(thePlan, theSpecification).ShouldBeTrue();

            thePlan.Attempts = 2;
            theSpecification.MaxRetries = 1;
            ClassUnderTest.ShouldRetry(thePlan, theSpecification).ShouldBeFalse();
        }

    }
}