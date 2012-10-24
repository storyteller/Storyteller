namespace StoryTeller.Execution
{
    public class TestStopConditions
    {
        public TestStopConditions()
        {
            TimeoutInSeconds = 60;
        }

        public bool BreakOnExceptions { get; set; }
        public bool BreakOnWrongs { get; set; }
        public int TimeoutInSeconds { get; set; }
    }
}