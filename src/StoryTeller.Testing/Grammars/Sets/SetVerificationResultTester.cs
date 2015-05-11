using System;
using System.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Sets;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Grammars.Sets
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

        [Test]
        public void round_trip_serialization()
        {
            theResult.MarkMatched("1");
            theResult.MarkExtra(new StepValues("foo"));
            theResult.MarkMissing("bar"); 
            theResult.MarkWrongOrder(Guid.NewGuid().ToString(), 1);

            var json = JsonSerialization.ToJson(theResult);

            var newResult = JsonSerialization.Deserialize<SetVerificationResult>(json);

            newResult.matches.Single().ShouldBe("1");
            newResult.extras.Count().ShouldBe(1);
            newResult.missing.Single().ShouldBe("bar");
            newResult.wrongOrdered.Count().ShouldBe(1);
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