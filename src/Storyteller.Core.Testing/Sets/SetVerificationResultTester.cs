using System;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Sets;

namespace Storyteller.Core.Testing.Sets
{
    [TestFixture]
    public class SetVerificationResultTester
    {
        private SetVerificationResult theResult;

        [SetUp]
        public void SetUp()
        {
            theResult = new SetVerificationResult();
        }

        private void theCountsShouldBe(int right, int wrong, int ex, int syntax)
        {
            var counts = new Counts();
            theResult.Tabulate(counts);

            counts.ShouldEqual(right, wrong, ex, syntax);
        }

        [Test]
        public void tabulate_matches()
        {
            theResult.MarkMatched("1");
            theResult.MarkMatched("2");
            theResult.MarkMatched("3");

            theCountsShouldBe(3, 0, 0, 0);
        }

        [Test]
        public void tabulate_extras()
        {
            theResult.MarkExtra(new StepValues("foo"));
            theResult.MarkExtra(new StepValues("bar"));

            theCountsShouldBe(0, 2, 0, 0);
        }

        [Test]
        public void tabulate_missing()
        {
            theResult.MarkMissing(Guid.NewGuid().ToString());
            theResult.MarkMissing(Guid.NewGuid().ToString());
            theResult.MarkMissing(Guid.NewGuid().ToString());
            theResult.MarkMissing(Guid.NewGuid().ToString());

            theCountsShouldBe(0, 4, 0, 0);
        }

        [Test]
        public void tabulate_out_of_orders()
        {
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);

            theCountsShouldBe(0, 7, 0, 0);
        }
    }
}