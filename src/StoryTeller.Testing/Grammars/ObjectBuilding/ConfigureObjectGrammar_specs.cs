using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.ObjectBuilding;
using StoryTeller.Model;
using StoryTeller.Testing.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.ObjectBuilding
{
    
    public class ConfigureObjectGrammar_specs : SpecRunningContext
    {
        [Fact]
        public void execution()
        {
            execute(@"
=> ConfigureObject
* SetProps: data=Jasper-Missouri
* CityIs#1: city=Jasper
* StateIs#2: state=Missouri
");

            CountsShouldBe(2, 0, 0, 0);

            Step("1").Cell("city").Succeeded();
            Step("2").Cell("state").Succeeded();
        }

        [Fact]
        public void building_up_the_cell()
        {
            var cell = ModelFor<Sentence>("ConfigureObject", "SetProps")
                .cells.Single();

            cell.Key.ShouldBe("data");
            cell.Type.ShouldBe(typeof (string));
            cell.DefaultValue.ShouldBe("Austin-Texas");
        }
    }

    public class ConfigureObjectFixture : Fixture
    {
        public ConfigureObjectFixture()
        {
            var grammar = new ConfigureObjectGrammar<Address, string>("the data is {data}", (a, data) =>
            {
                var values = data.Split('-');
                a.City = values.First();
                a.StateOrProvince = values.Last();
            });

            grammar.CellModifications.DefaultValue("Austin-Texas");

            this["SetProps"] = grammar;
        }

        [FormatAs("The city should be {city}")]
        public string CityIs()
        {
            return Context.State.CurrentObject.As<Address>().City;
        }

        [FormatAs("The city should be {state}")]
        public string StateIs()
        {
            return Context.State.CurrentObject.As<Address>().StateOrProvince;
        }



        public override void SetUp()
        {
            Context.State.CurrentObject = new Address();
        }
    }
}