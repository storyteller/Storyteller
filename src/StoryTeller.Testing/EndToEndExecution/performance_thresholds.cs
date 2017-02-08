using System;
using System.Threading;
using Baseline;
using Xunit;

namespace StoryTeller.Testing.EndToEndExecution
{
    public class performance_thresholds : SpecRunningContext
    {
        [Fact]
        public void sentence_happy_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Sentence#1

");

            Step("1").HasNoPerformanceLimitViolation();
            CountsShouldBe(0, 0, 0, 0);
        }

        [Fact]
        public void sentence_sad_path()
        {
            MonitoredFixture.WaitTime = 200.Milliseconds();

            execute(@"
=> Monitored
* Sentence#1

");

            Step("1").ViolatesPerformanceLimit();
            CountsShouldBe(0, 0, 2, 0);
        }

        [Fact]
        public void fact_happy_path()
        {
            MonitoredFixture.WaitTime = TimeSpan.Zero;

            execute(@"
=> Monitored
* Fact#1

");

            Step("1").HasNoPerformanceLimitViolation();
            CountsShouldBe(1, 0, 0, 0);
        }

        [Fact]
        public void fact_sad_path()
        {
            MonitoredFixture.WaitTime = 200.Milliseconds();

            execute(@"
=> Monitored
* Fact#1

");

            Step("1").ViolatesPerformanceLimit();
            CountsShouldBe(0, 0, 2, 0);
        }

        [Fact]
        public void policy_happy_path()
        {
            execute(@"
=> Monitored
* RegisterFakeRecord: runtime=10
");

            CountsShouldBe(0, 0, 0, 0);
        }

        [Fact]
        public void policy_sad_path()
        {
            execute(@"
=> Monitored
* RegisterFakeRecord: runtime=100
");

            CountsShouldBe(0, 0, 1, 0);
        }
    }

    public class MonitoredFixture : Fixture
    {
        public static TimeSpan WaitTime = TimeSpan.Zero;

        public override void SetUp()
        {
            PerformancePolicies.ClearAll();
            PerformancePolicies.PerfLimit(50, r => r.Subject == "Fake");
        }


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

        [FormatAs("Register a fake perf record that runs for {runtime} ms")]
        public void RegisterFakeRecord(int runtime)
        {
            var record = Context.Timings.Subject("Fake", "Fake", 0);
            Thread.Sleep(runtime.Milliseconds());

            Context.Timings.End(record);
        }
    }
}