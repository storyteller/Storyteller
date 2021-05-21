using Baseline;
using Shouldly;
using StoryTeller.Grammars.API;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Grammars.API
{
    public class ModelFixtureTester : SpecRunningContext
    {
        [Fact]
        public void can_compile_a_fixture_with_a_mix_of_fields_and_properties()
        {
            var fixture = new AddressBuilderFixture();
            fixture.Compile(CellHandling.Basic());

            fixture["City"].ShouldBeOfType<SetMemberGrammar>();
            fixture["County"].ShouldBeOfType<SetMemberGrammar>();
            fixture["Area.Name"].ShouldBeOfType<SetMemberGrammar>();
        }

        [Fact]
        public void can_customize_cell_display_and_usage()
        {
            var fixture = new AddressBuilderFixture();
            var model = fixture.Compile(CellHandling.Basic());
            var sentence = model.FindGrammar("City").As<Sentence>();

            sentence.cells[0].options.Length.ShouldBe(3);
            sentence.cells[0].Editor.ShouldBe("select");
        }

        [Fact]
        public void pass_the_model_through_state()
        {
            execute(@"
=> AddressBuilder
* City: City=Austin
=> CheckAddress
* CityShouldBe#1: city=Austin
");

            CountsShouldBe(1, 0, 0, 0);

            Step("1").Cell("city").Succeeded();
        }


    }


    public class AddressBuilderFixture : ModelFixture<Address>
    {
        public AddressBuilderFixture()
        {
            For(x => x.City).SelectionValues("Austin", "Round Rock", "Cedar Park");
        }
    }

    public class CheckAddressFixture : Fixture
    {
        private Address _address;

        public override void SetUp()
        {
            _address = Context.State.Retrieve<Address>();
        }

        [FormatAs("The city should be {city}")]
        public string CityShouldBe()
        {
            return _address.City;
        }
    }
}
