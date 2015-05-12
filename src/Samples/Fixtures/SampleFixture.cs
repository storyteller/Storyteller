using StoryTeller;

namespace Samples.Fixtures
{
    public class SampleFixture : Fixture
    {
        public SampleFixture()
        {
            Title = "The Sample Fixture";
        }

        public override void SetUp()
        {
            // Perform any actions before this Fixture is used during
            // the execution of a section inside a specification
        }

        public override void TearDown()
        {
            // Perform actions at the end of a section
            // when a specification is executed
        }
    }
}