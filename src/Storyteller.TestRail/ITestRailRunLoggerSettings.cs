namespace StoryTeller.TestRail
{
    public interface ITestRailRunLoggerSettings
    {
        int ProjectId { get; }
        ITestRailRunNameGenerator TestRailRunNameGenerator { get; }
    }
}
