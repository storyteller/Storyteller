using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars;
using Storyteller.Core.Grammars.ObjectBuilding;
using Storyteller.Core.Model;
using Storyteller.Core.Testing.Grammars.Sets;

namespace Storyteller.Core.Testing.Grammars.ObjectBuilding
{
    [TestFixture]
    public class SetPropertyGrammar_specs : SpecRunningContext
    {
        [Test]
        public void run_the_grammar()
        {
            execute(@"
=> SetPropertyGrammar
* SetCity: City=Austin
* CityShouldBe#1: city=Austin

");

            CountsShouldBe(1, 0, 0, 0);

            Step("1").Cell("city").Succeeded();
        }

        [Test]
        public void build_the_model()
        {
            var model = ModelFor<Sentence>("SetPropertyGrammar", "SetCity");

            model.format.ShouldEqual("City = {City}");
            var cell = model.cells.Single();

            cell.Type.ShouldEqual(typeof (string));
            cell.Key.ShouldEqual("City");

        }
    }

    public class SetPropertyGrammarFixture : Fixture
    {
        public SetPropertyGrammarFixture()
        {
            this["SetCity"] = SetPropertyGrammar.For<Address>(x => x.City);
        }

        [FormatAs("The city should be {city}")]
        public string CityShouldBe()
        {
            return Context.State.CurrentObject.As<Address>().City;
        }

        public override void SetUp()
        {
            Context.State.CurrentObject = new Address();
        }
    }
}