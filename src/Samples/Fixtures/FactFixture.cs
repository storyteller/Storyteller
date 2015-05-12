using System;
using StoryTeller;

namespace Samples.Fixtures
{
    public class FactFixture : Fixture
    {
        // SAMPLE: fact-programmatic
        public FactFixture()
        {
            this["AnotherTruth"] 
                = Fact("The thing is activated").VerifiedBy(() => true);
        }
        // ENDSAMPLE

        // SAMPLE: fact-methods
        public void ThisLineAlwaysThrowsExceptions()
        {
            throw new DivideByZeroException("You can't do this!");
        }

        [FormatAs("This line is always true")]
        public bool ThisLineIsAlwaysTrue()
        {
            return true;
        }

        [FormatAs("This line is always false")]
        public bool ThisLineIsAlwaysFalse()
        {
            return false;
        }
        // ENDSAMPLE

        // SAMPLE: fact-more-information
        [FormatAs("The confirmation email was sent")]
        public bool TheConfirmationEmailWasSent()
        {
            StoryTellerAssert
                .Fail(true, "The email server is not reachable");

            return true;
        }
        // ENDSAMPLE

    }
}