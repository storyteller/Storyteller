using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Grammars.API;

namespace Samples.Fixtures.Api
{
    public class ModelForwardingFixture : Fixture
    {
        public ModelForwardingFixture()
        {
            Title = "Model Forwarding";
        }

        public Address Address { get; set; }

        public IGrammar BuildAddress()
        {
            return Build<Address>("If the address is").With<AddressModelFixture>().Forward(a => Address = a);
        }

        [FormatAs("The city should be {city}")]
        public string CityShouldBe()
        {
            return Address.City;
        }
    }

    public class AddressModelFixture : ModelFixture<Address>
    {
        public AddressModelFixture()
        {
            Title = "Address Model Setup";

            For(x => x.City).SelectionValues("Austin", "Round Rock", "Cedar Park");
        }
    }

    public class NumbersInput
    {
        public int X;
        public int Y;
    }

    public class NumbersOutput
    {
        public int Multiplied;
        public int Added;
    }

    public class SampleApiFixture : ApiFixture<NumbersInput, NumbersOutput>
    {
        public SampleApiFixture()
        {
            Title = "Sample Api Fixture";
            InputTitle = "If the numbers are";
        }

        protected override Task<NumbersOutput> execute(NumbersInput input)
        {
            var output = new NumbersOutput
            {
                Added = input.X + input.Y,
                Multiplied = input.X * input.Y
            };

            return Task.FromResult(output);
        }
    }


}
