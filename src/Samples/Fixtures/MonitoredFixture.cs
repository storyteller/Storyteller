using System;
using System.Threading;
using Baseline;
using StoryTeller;

namespace Samples.Fixtures
{
    public class PolicySamples
    {
        public void create_policies()
        {
            // SAMPLE: PerformancePolicies
            // All grammars of any kind should run within 5 seconds
            PerformancePolicies.PerfLimit(5000, r => r.Type == "Grammar");

            // No specification should exceed 15 seconds
            PerformancePolicies.PerfLimitBySubject(15000, "Specification");

            // All grammars with "Open" in their name should run in under a second
            PerformancePolicies.PerfLimit(1000, r => r.Subject.Contains("Open"));
            // ENDSAMPLE
        }
    }

    public class MonitoredFixture : Fixture
    {
        public static TimeSpan WaitTime = TimeSpan.Zero;

        public MonitoredFixture()
        {
            

            this["DoSomething"] = Do("Inline grammar that should run within 100 ms", c =>
            {
                Thread.Sleep(WaitTime);
            }).PerfLimit(100);
        }

        public override void SetUp()
        {
            PerformancePolicies.ClearAll();
            PerformancePolicies.PerfLimit(50, r => r.Subject == "Fake");
        }

        [FormatAs("Pause for {waitTime} milliseconds")]
        public void Wait(int waitTime)
        {
            WaitTime = waitTime.Milliseconds();
        }

        // SAMPLE: PerfLimitAttribute
        [PerfLimit(100), FormatAs("Sentence w/ 100 ms threshold")]
        public void Sentence()
        {
            Thread.Sleep(WaitTime);
        }

        [PerfLimit(100), FormatAs("Fact w/ 100 ms threshold")]
        public bool Fact()
        {
            Thread.Sleep(WaitTime);
            return true;
        }

        [PerfLimit(100)]
        public IGrammar SetVerification()
        {
            return VerifyStringList(names).Titled("Check the names within 100ms");
        }
        // ENDSAMPLE

        private string[] names()
        {
            Thread.Sleep(WaitTime);
            return new string[] { "Bill", "Jill", "Jake" };
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