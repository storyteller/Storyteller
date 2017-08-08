namespace StoryTeller.TestRail
{
    public class TestRailRunLoggerSettings : ITestRailRunLoggerSettings
    {
        public int ProjectId { get; set; }

        private ITestRailRunNameGenerator _testRailRunNameGenerator = new DateTimeTestRailRunNameGenerator();
        public ITestRailRunNameGenerator TestRailRunNameGenerator
        {
            get => _testRailRunNameGenerator;
            set => _testRailRunNameGenerator = value ?? new DateTimeTestRailRunNameGenerator();
        }

        #region ITestRailRunLoggerSettings

        public TestRailRunLoggerSettings(int projectId, ITestRailRunNameGenerator testRailRunNameGenerator = null)
        {
            ProjectId = projectId;
            TestRailRunNameGenerator = testRailRunNameGenerator;
        }

        #endregion
    }
}
