using FubuCore;
using StoryTeller.Assertions;
using StoryTeller.Engine;

namespace StoryTeller.Gallery.Fixtures
{
    public class RetryAttemptFixture : Fixture
    {
        [FormatAs("Test will only pass on the attempt {retryAttempt}")]
        public void OnlyPassesOnAttempt(int retryAttempt)
        {
            var testContext = Retrieve<ITestContext>();
            StoryTellerAssert.Fail(testContext.RetryAttemptNumber != retryAttempt, "Should fail until attempt {0}".ToFormat(retryAttempt));
        }
    }
}