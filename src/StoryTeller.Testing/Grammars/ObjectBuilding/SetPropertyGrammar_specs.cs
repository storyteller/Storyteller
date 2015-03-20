using System.Linq;
using FubuCore;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Grammars.ObjectBuilding;
using StoryTeller.Model;
using StoryTeller.Testing.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.ObjectBuilding
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

            model.format.ShouldBe("City = {City}");
            var cell = model.cells.Single();

            cell.Type.ShouldBe(typeof (string));
            cell.Key.ShouldBe("City");

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