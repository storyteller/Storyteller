using StoryTeller;

namespace Samples.Fixtures
{
    public class StorytellerAssertSample
    {
        public static void Go()
        {
            // SAMPLE: using-storyteller-assert
            // Fail immediately with this message
            StoryTellerAssert.Fail("Something is wrong");

            // Fail if the Func<bool> filter is true
            StoryTellerAssert.Fail(() => true, "The condition is {0}", true);

            // Fail if the boolean condition is true
            var value = 1;
            StoryTellerAssert.Fail(value > 0, "The number was not supposed to be bigger than one");

            // ENDSAMPLE
        } 
    }
}