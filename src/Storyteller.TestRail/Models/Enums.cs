namespace Storyteller.TestRail
{
	public enum TestResultStatus
	{
		Passed = 1,
		Blocked = 2,
		Untested = 3, // (not allowed when adding a result)
		Retest = 4,
		Failed = 5
	}
}
