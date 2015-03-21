using System.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class cells_reading_lists_integration_specs
    {
        [Test]
        public void get_list_values_from_the_global_handling()
        {
            var handling = CellHandling.Basic();
            handling.Lists["Numbers"].AddValues("1", "2", "3");

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            model.FindGrammar("DoSomething").ShouldBeOfType<Sentence>()
                .FindCell("x").options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("1", "2", "3");
        }

        [Test]
        public void get_list_values_from_fixture()
        {
            var handling = CellHandling.Basic();

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            model.FindGrammar("DoAnotherThing").ShouldBeOfType<Sentence>()
                .FindCell("name").options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("Jeremy", "Monte", "Max");
        }
    }

    public class SelectionValuesFixture : Fixture
    {
        public SelectionValuesFixture()
        {
            AddSelectionValues("Names", "Jeremy", "Monte", "Max");
        }

        [ExposeAsTable("Add some people")]
        public void AddPerson([SelectionValues("Chad", "Josh")] string name)
        {
        }

        public void DoSomething([SelectionValues("Tom", "Todd")] string name, [SelectionList("Numbers")]int x, int y)
        {
        }

        public void DoAnotherThing([SelectionList("Names")] string name, int x, int y)
        {
        }

        [return: SelectionValues("Trevor", "Tommy"), AliasAs("name")]
        public string WhatIsHisName()
        {
            return null;
        }

        [return: SelectionValues("Names"), AliasAs("name")]
        public string WhatIsHerName()
        {
            return null;
        }
    }
}