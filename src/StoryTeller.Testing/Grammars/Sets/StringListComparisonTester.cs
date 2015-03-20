using System;
using System.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.Sets
{
    [TestFixture]
    public class StringListComparisonTester
    {
        [Test]
        public void build_cells()
        {
            var comparison = new StringListComparison("expected", c => new String[0]);

            var cell = comparison.BuildCells(CellHandling.Basic(), new Fixture()).Single();
            cell.Key.ShouldBe("expected");
            cell.Type.ShouldBe(typeof (string));
        }

        [Test]
        public void fetch()
        {
            var comparison = new StringListComparison("expected", c => new String[]{"red", "blue", "green"});
            var task = comparison.Fetch(SpecContext.ForTesting());

            task.Wait();

            task.Result.Select(x => x.Get("expected"))
                .ShouldHaveTheSameElementsAs("red", "blue", "green");
        }
    }
}