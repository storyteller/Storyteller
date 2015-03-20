using NUnit.Framework;
using Shouldly;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class SpecResultsTester
    {
        [Test]
        public void build_for_an_aborted_spec_run()
        {
            var results = SpecResults.ForAbortedRun();

            results.Attempts.ShouldBe(0);
            results.Counts.ShouldEqual(0, 0, 0, 0);
            results.Performance.Length.ShouldBe(0);
            results.Results.Length.ShouldBe(0);
            ShouldBeTestExtensions.ShouldBe(results.WasAborted, true);
        }
    }
}