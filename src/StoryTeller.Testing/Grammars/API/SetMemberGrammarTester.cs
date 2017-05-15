using System.Linq;
using Baseline;
using Shouldly;
using StoryTeller.Grammars.API;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Grammars.API
{
    public class SetMemberGrammarTester : SpecRunningContext
    {
        [Fact]
        public void run_the_grammar()
        {
            execute(@"
=> SetMemberGrammar
* SetCity: City=Austin
* CityShouldBe#1: city=Austin

");

            CountsShouldBe(1, 0, 0, 0);

            Step("1").Cell("city").Succeeded();
        }

        [Fact]
        public void build_the_model()
        {
            var model = ModelFor<Sentence>("SetMemberGrammar", "SetCity");

            model.format.ShouldBe("The City is {City}");
            var cell = model.cells.Single();

            cell.Type.ShouldBe(typeof(string));
            cell.Key.ShouldBe("City");

        }

        [Fact]
        public void build_the_model_with_overrides()
        {
            var model = ModelFor<Sentence>("SetMemberGrammar", "SetCity");
            var cell = model.cells.Single();

            cell.header.ShouldBe("The City");
            cell.DefaultValue.ShouldBe("Austin");
        }

        [Fact]
        public void use_the_grammar_on_a_public_field()
        {
            execute(@"
=> SetMemberGrammar
* SetCounty: County=Travis
* CountyShouldBe#1: county=Travis

");

            CountsShouldBe(1, 0, 0, 0);

            Step("1").Cell("county").Succeeded();
        }

        [Fact]
        public void use_the_grammar_on_a_deep_accessor()
        {
            execute(@"
=> SetMemberGrammar
* SetAreaName: Area.Name=North Central
* AreaNameShouldBe#1: area=North Central

");

            CountsShouldBe(1, 0, 0, 0);

            Step("1").Cell("area").Succeeded();
        }


    }

    public class SetMemberGrammarFixture : Fixture
    {
        public SetMemberGrammarFixture()
        {
            var grammar = SetMemberGrammar.For<Address>(x => x.City);
            grammar.CellModifications.Header("The City").DefaultValue("Austin");

            this["SetCity"] = grammar;
            this["SetCounty"] = SetMemberGrammar.For<Address>(x => x.County);
            this["SetAreaName"] = SetMemberGrammar.For<Address>(x => x.Area.Name);
        }

        [FormatAs("The area name should be {area}")]
        public string AreaNameShouldBe()
        {
            return Context.State.CurrentObject.As<Address>().Area.Name;
        }

        [FormatAs("The city should be {city}")]
        public string CityShouldBe()
        {
            return Context.State.CurrentObject.As<Address>().City;
        }

        [FormatAs("The county should be {county}")]
        public string CountyShouldBe()
        {
            return Context.State.CurrentObject.As<Address>().County;
        }

        public override void SetUp()
        {
            Context.State.CurrentObject = new Address();
        }
    }

    public class Address
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateOrProvince { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string TimeZone { get; set; }

        public double DistanceFromOffice { get; set; }

        public string[] Names { get; set; }

        public string County;

        public Area Area { get; set; }
    }

    public class Area
    {
        public string Name;
    }
}
