using StoryTeller;

namespace Samples.Fixtures
{
    public class SplashFixture : Fixture
    {
        public SplashFixture()
        {
            Title = "Using Storyteller";
        }

        [FormatAs("As a member of a Software Development Team...")]
        public void AsMember()
        {
            
        }

        [FormatAs("I want unambiguous, example-based requirements...")]
        public void WantRequirements()
        {
            
        }

        [FormatAs("That are human readable..")]
        public bool AreHumanReadable()
        {
            return true;
        }

        [FormatAs("And also act as reliable automated acceptance and regression tests")]
        public bool ThatAreAutomated()
        {
            return true;
        }

        [FormatAs("So that I have better requirements and fewer regression problems")]
        public bool SoThat()
        {
            return true;
        }
    }
}