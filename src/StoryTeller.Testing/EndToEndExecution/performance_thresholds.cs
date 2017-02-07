using System;
using System.Threading;
using Xunit;

namespace StoryTeller.Testing.EndToEndExecution
{
    public class performance_thresholds : SpecRunningContext
    {
        //[Fact]
        public void sentence_happy_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Sentence#1

");

            Step("1").HasNoPerformanceLimitViolation();
        }

        //[Fact]
        public void sentence_sad_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Sentence#1

");

            Step("1").ViolatesPerformanceLimit();
        }

        //[Fact]
        public void fact_happy_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Fact#1

");

            Step("1").HasNoPerformanceLimitViolation();
        }

        //[Fact]
        public void fact_sad_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Fact#1

");

            Step("1").ViolatesPerformanceLimit();
        }
    }

    public class MonitoredFixture : Fixture
    {
        public static TimeSpan WaitTime = TimeSpan.Zero;

        [PerfLimit(100)]
        public void Sentence()
        {
            Thread.Sleep(WaitTime);
        }

        [PerfLimit(100)]
        public bool Fact()
        {
            Thread.Sleep(WaitTime);
            return true;
        }

        private string[] names()
        {
            Thread.Sleep(WaitTime);
            return new string[] {"Bill", "Jill", "Jake"};
        }

        public IGrammar SetVerification()
        {
            return VerifyStringList(names).Titled("Check the names");
        }
    }
}