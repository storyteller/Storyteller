using System.Diagnostics;
using StoryTeller;

namespace Samples.Fixtures
{
    // SAMPLE: sample-fixture
    public class SampleFixture : Fixture
    {
        public SampleFixture()
        {
            Title = "The Sample Fixture";

            // Programmatically adding a Grammar to this Fixture
            this["SayHello"] 
                = Do("Say Hello", c => Debug.WriteLine("Well, hello there!"));

        }

        // Add a grammar from a Sentence method
        public void SayGoodbye()
        {
            Debug.WriteLine("Goodbye.");
        }

        public IGrammar SayYourName()
        {
            return Do("Say your name", c => Debug.WriteLine("My name is Storyteller"));
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
    // ENDSAMPLE
}