using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars.Decisions;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Grammars.Decisions
{
    [TestFixture]
    public class DecisionTableGrammar_specs : SpecRunningContext
    {
        [Test]
        public void execute()
        {
            execute(@"
=> MathDecisions
* Math
  -> table
  * row#1:X=1, Y=2, Sum=3, Product=2
  * row#2:X=2, Y=2, Sum=4, Product=4
  * row#3:X=2, Y=2, Sum=5, Product=4
  * row#4:X=1, Y=2, Sum=3, Product=5

");

            CountsShouldBe(6, 2, 0, 0);

            Step("1").Cell("Sum").Succeeded();

            Step("2").Cell("Product").Succeeded();

            Step("3").Cell("Sum").FailedWithActual("4");
            Step("4").Cell("Product").FailedWithActual("2");

        }

        [Test]
        public void check_the_model()
        {
            var table = ModelFor<Table>("MathDecisions", "Math");

            table.title.ShouldEqual("Adding and Multiplying");
            table.collection.ShouldEqual("table");
            table.cells.Select(x => x.Key)
                .ShouldHaveTheSameElementsAs("X", "Y", "Sum", "Product");

            table.cells.Select(x => x.output)
                .ShouldHaveTheSameElementsAs(false, false, true, true);
        }
    }

    public class MathDecisionsFixture : Fixture
    {
        public IGrammar Math()
        {
            return new MathDecisions();
        }
    }

    public class MathDecisions : DecisionTableGrammar
    {
        public MathDecisions() : base("Adding and Multiplying")
        {
        }

        public int X { get; set; }
        public int Y { get; set; }

        public int Sum
        {
            get { return X + Y; }
        }

        public int Product
        {
            get { return X*Y; }
        }
    }
}