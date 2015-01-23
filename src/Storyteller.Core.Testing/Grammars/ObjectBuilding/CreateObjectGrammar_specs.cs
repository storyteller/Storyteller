using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.ObjectBuilding;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Grammars.ObjectBuilding
{
    [TestFixture]
    public class CreateObjectGrammar_specs : SpecRunningContext
    {
        [Test]
        public void execute()
        {
            execute(@"
Name: whatever
=> NumberedThing
* Create: number=45
* TheNumberShouldBe#1: number=45
");

            CountsShouldBe(1, 0, 0, 0);
            Step("1").Cell("number").Succeeded();

        }

        [Test]
        public void builds_up_the_cell()
        {
            var cell = ModelFor<Sentence>("NumberedThing", "Create")
                .cells.Single();

            cell.Key.ShouldEqual("number");
            cell.Type.ShouldEqual(typeof (int));
            cell.default_value.ShouldEqual("24");
        }
    }

    public class NumberedThingFixture : Fixture
    {
        public NumberedThingFixture()
        {
            this["Create"] = new CreateObjectGrammar<NumberedThing, int>("number", x => new NumberedThing(x))
                .Default("24");
            
        }

        [FormatAs("The number should be {number}")]
        public int TheNumberShouldBe()
        {
            return Context.State.CurrentObject.As<NumberedThing>().Number;
        }
    }

    public class NumberedThing
    {
        private readonly int _number;

        public NumberedThing(int number)
        {
            _number = number;
        }

        public int Number
        {
            get { return _number; }
        }
    }
}