using FubuTestingSupport;
using NUnit.Framework;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class SpecResultsTester
    {
        [Test]
        public void build_for_an_aborted_spec_run()
        {
            var results = SpecResults.ForAbortedRun();

            results.Attempts.ShouldEqual(0);
            results.Counts.ShouldEqual(0, 0, 0, 0);
            results.Performance.Length.ShouldEqual(0);
            results.Results.Length.ShouldEqual(0);
            results.WasAborted.ShouldBeTrue();
        }
    }
}