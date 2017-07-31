namespace StoryTeller.TestRail
{
    public class TestRailRunContext
    {
        private static TestRailRunContext _instance;
        public static TestRailRunContext Current => _instance;
        public int RunId { get; }

        internal TestRailRunContext(int runId)
        {
            RunId = runId;
        }

        public static void Create(int runId)
        {
            _instance = new TestRailRunContext(runId);
        }

        public static void Destroy()
        {
            _instance = null;
        }
    }
}
