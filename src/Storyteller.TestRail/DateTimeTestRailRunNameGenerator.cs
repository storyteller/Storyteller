using System;

namespace StoryTeller.TestRail
{
    public class DateTimeTestRailRunNameGenerator : ITestRailRunNameGenerator
    {
        public string Generate(params object[] parameters)
        {
            return DateTime.UtcNow.ToString("G");
        }
    }
}
