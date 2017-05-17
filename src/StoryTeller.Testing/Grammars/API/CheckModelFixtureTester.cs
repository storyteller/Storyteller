using System;
using Baseline;
using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Grammars.API;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Grammars.API
{
    public class CheckModelFixtureTester : SpecRunningContext
    {
        [Fact]
        public void has_all_the_props_and_fields()
        {
            var fixture = new AddressCheckerFixture();
            fixture.Compile(CellHandling.Basic());

            fixture["City"].ShouldBeOfType<CheckPropertyGrammar>();
            fixture["County"].ShouldBeOfType<CheckPropertyGrammar>();
            fixture["Area.Name"].ShouldBeOfType<CheckPropertyGrammar>();
        }

        [Fact]
        public void can_customize_cell_display_and_usage()
        {
            var fixture = new AddressCheckerFixture();
            var model = fixture.Compile(CellHandling.Basic());
            var sentence = model.FindGrammar("City").As<Sentence>();

            sentence.cells[0].options.Length.ShouldBe(3);
            sentence.cells[0].editor.ShouldBe("select");
        }

        [Fact]
        public void run_some_checks_happy_path()
        {
            execute(@"
=> AddressChecker
* City#1: City=Austin
* Area.Name#2: Area.Name=North Central
");

            CountsShouldBe(2, 0, 0, 0);

            Step("1").Cell("City").Succeeded();
            Step("2").Cell("Area.Name").Succeeded();
        }

        [Fact]
        public void run_some_checks_sad_path()
        {
            execute(@"
=> AddressChecker
* City#1: City=Austin
* Area.Name#2: Area.Name=Southwest
");

            CountsShouldBe(1, 1, 0, 0);

            Step("1").Cell("City").Succeeded();
            Step("2").Cell("Area.Name").FailedWithActual("North Central");
        }
    }

    public class AddressCheckerFixture : CheckModelFixture<Address>
    {
        public AddressCheckerFixture()
        {


            Check(x => x.Area.Name);
            For(x => x.City).SelectionValues("San Antonio", "Austin", "Waco");
        }

        public override void SetUp()
        {
            Model = new Address
            {
                City = "Austin",
                Area = new Area { Name = "North Central" }
            };
        }
    }
}
