using System;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars.Sets;

namespace Storyteller.Core.Testing.Grammars.Sets
{
    [TestFixture]
    public class StringListComparisonTester
    {
        [Test]
        public void build_cells()
        {
            var comparison = new StringListComparison("expected", c => new String[0]);

            var cell = comparison.BuildCells(CellHandling.Basic()).Single();
            cell.Key.ShouldEqual("expected");
            cell.Type.ShouldEqual(typeof (string));
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