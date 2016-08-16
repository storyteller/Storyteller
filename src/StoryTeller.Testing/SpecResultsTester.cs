using System.Linq;
using Xunit;
using Shouldly;

namespace StoryTeller.Testing
{
    
    public class SpecResultsTester
    {
        [Fact]
        public void build_for_an_aborted_spec_run()
        {
            var results = SpecResults.ForAbortedRun("foo");

            results.Attempts.ShouldBe(0);
            results.Counts.ShouldEqual(0, 0, 1, 0);
            results.Performance.Length.ShouldBe(0);
            results.Results.Length.ShouldBe(1);

            results.Results.Single().id.ShouldBe("foo");

            results.WasAborted.ShouldBe(true);
        }

        [Fact]
        public void build_for_expired_run()
        {
            var results = SpecResults.ForExpiredRun("foo");

            results.Attempts.ShouldBe(0);
            results.Counts.ShouldEqual(0, 0, 1, 0);
            results.Performance.Length.ShouldBe(0);
            results.Results.Length.ShouldBe(1);

            results.Results.Single().id.ShouldBe("foo");

            results.WasAborted.ShouldBe(true);
        }
    }
}
