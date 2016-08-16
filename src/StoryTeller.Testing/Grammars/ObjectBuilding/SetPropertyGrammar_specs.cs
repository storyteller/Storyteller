using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.ObjectBuilding;
using StoryTeller.Model;
using StoryTeller.Testing.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.ObjectBuilding
{
    
    public class SetPropertyGrammar_specs : SpecRunningContext
    {
        [Fact]
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

        [Fact]
        public void build_the_model()
        {
            var model = ModelFor<Sentence>("SetPropertyGrammar", "SetCity");

            model.format.ShouldBe("City = {City}");
            var cell = model.cells.Single();

            cell.Type.ShouldBe(typeof (string));
            cell.Key.ShouldBe("City");

        }

        [Fact]
        public void build_the_model_with_overrides()
        {
            var model = ModelFor<Sentence>("SetPropertyGrammar", "SetCity");
            var cell = model.cells.Single();

            cell.header.ShouldBe("The City");
            cell.DefaultValue.ShouldBe("Austin");
        }
    }

    public class SetPropertyGrammarFixture : Fixture
    {
        public SetPropertyGrammarFixture()
        {
            var grammar = SetPropertyGrammar.For<Address>(x => x.City);
            grammar.CellModifications.Header("The City").DefaultValue("Austin");

            this["SetCity"] = grammar;
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