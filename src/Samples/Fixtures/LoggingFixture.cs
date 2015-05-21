using StoryTeller;

namespace Samples.Fixtures
{
    // SAMPLE: logging-fixture
    public class LoggingFixture : Fixture
    {
        [FormatAs("Do something that requires custom logging")]
        public void DoSomething()
        {
            Context.Reporting.Log(
                "I am making a custom log", 
                "<h1>I did something</h1>");
        }
    }
    // ENDSAMPLE
}