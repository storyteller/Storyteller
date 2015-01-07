using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Results
{
    [TestFixture]
    public class CellResultTester
    {
        [Test]
        public void modify_counts_when_ok()
        {
            var counts = new Counts();
            CellResult.Ok("a").Modify(counts);

            counts.ShouldEqual(0, 0, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_success_state()
        {
            var counts = new Counts();
            CellResult.Success("a").Modify(counts);

            counts.ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_failure_state()
        {
            var counts = new Counts();

            CellResult.Failure("a","foo").Modify(counts);

            counts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_error_state()
        {
            var counts = new Counts();

            CellResult.Error("a","bad message").Modify(counts);

            counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void modify_counts_when_in_missing_state()
        {
            var counts = new Counts();

            CellResult.Missing("a").Modify(counts);

            counts.ShouldEqual(0, 0, 0, 1);
        }
    }
}