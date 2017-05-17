using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Grammars.API;

namespace Samples.Fixtures.Api
{
    // SAMPLE: ModelForwardingFixture
    public class ModelForwardingFixture : CheckModelFixture<Address>
    {
        public ModelForwardingFixture()
        {
            Title = "Build and Verify Address";

            // You can customize the Cell editing and appearance
            // of any of the automatically generated grammars by
            // property or field name. The expression can be deep as
            // well
            For(x => x.City).Header("The city");

            // The Model property is an easy way to set the current Address model
            // that should be verified by all the children grammars
            Model = new Address();
        }

        public IGrammar BuildAddress()
        {
            // This is a new 4.2 helper to build a model object
            // with an embedded section and use that object within
            // the containing Fixture
            return Build<Address>("If the address is")
                .With<AddressModelFixture>()
                .Forward(a => Model = a);
        }
    }
    // ENDSAMPLE

    // SAMPLE: AddressModelFixture
    public class AddressModelFixture : ModelFixture<Address>
    {
        public AddressModelFixture()
        {
            Title = "Address Model Setup";

            // The For() statement is a helper to customize the editing
            // or rendering of the Cell's for the public properties or fields
            For(x => x.City)
                .SelectionValues("Austin", "Round Rock", "Cedar Park");
        }
    }
    // ENDSAMPLE

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

    // SAMPLE: SpecialModelFixture
    public class SpecialModel
    {
        public string Name { get; }

        public SpecialModel(string name)
        {
            Name = name;
        }
    }

    public class SpecialModelFixture : ModelFixture<SpecialModel>
    {
        [FormatAs("For the name {name}")]
        public void ForName(string name)
        {
            Model = new SpecialModel(name);
        }
    }
    // ENDSAMPLE


}
