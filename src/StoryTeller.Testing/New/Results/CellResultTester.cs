using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.New.Results;

namespace StoryTeller.Testing.New.Results
{
    [TestFixture]
    public class CellResultTester
    {
        [Test]
        public void modify_counts_when_ok()
        {
            var counts = new Counts();
            CellResult.Ok.Modify(counts);

            counts.ShouldEqual(0, 0, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_success_state()
        {
            var counts = new Counts();
            CellResult.Success.Modify(counts);

            counts.ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_failure_state()
        {
            var counts = new Counts();

            CellResult.Failure("foo").Modify(counts);

            counts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void modify_counts_when_in_error_state()
        {
            var counts = new Counts();

            CellResult.Error("bad message").Modify(counts);

            counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void modify_counts_when_in_missing_state()
        {
            var counts = new Counts();

            CellResult.Missing.Modify(counts);

            counts.ShouldEqual(0, 0, 0, 1);
        }
    }
}