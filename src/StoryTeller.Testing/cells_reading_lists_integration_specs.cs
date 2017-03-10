using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;

namespace StoryTeller.Testing
{
    
    public class cells_reading_lists_integration_specs
    {
        [Fact]
        public void get_list_values_from_the_global_handling()
        {
            var handling = CellHandling.Basic();

            handling.AddSystemLevelList("Numbers", new[] { "1", "2", "3" });

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            model.FindGrammar("DoSomething").ShouldBeOfType<Sentence>()
                .FindCell("x").options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("1", "2", "3");
        }

        [Fact]
        public void get_list_options_from_the_global_handling()
        {
            var handling = CellHandling.Basic();
            
            var options = new[] { new Option("1", "A"), new Option("2", "B") };

            handling.AddSystemLevelList("Numbers", options);

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            model.FindGrammar("DoSomething").ShouldBeOfType<Sentence>()
                 .FindCell("x").options
                 .ShouldHaveTheSameElementsAs(options);
        }

        [Fact]
        public void get_list_values_from_fixture()
        {
            var handling = CellHandling.Basic();

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            model.FindGrammar("DoAnotherThing").ShouldBeOfType<Sentence>()
                .FindCell("name").options.Select(x => x.value)
                .ShouldHaveTheSameElementsAs("Jeremy", "Monte", "Max");
        }

        [Fact]
        public void get_list_values_when_marked_on_the_cell_type()
        {
            var handling = CellHandling.Basic();

            var fixture = new SelectionValuesFixture();
            var model = fixture.Compile(handling);

            var grammar = model.FindGrammar(nameof(SelectionValuesFixture.ChooseByType))
                .ShouldBeOfType<Sentence>();
            var cell = grammar.FindCell("key");

            cell.options.Select(x => x.value).ShouldHaveTheSameElementsAs("Jeremy", "Monte", "Max");
        }
    }

    [SelectionList("Names")]
    public class TypeWithList
    {
        public string Key { get; }

        public TypeWithList(string key)
        {
            Key = key;
        }
    }
    
    public class SelectionValuesFixture : Fixture
    {
        // SAMPLE: selection-lists-in-fixture
        public SelectionValuesFixture()
        {
            AddSelectionValues("Names", "Jeremy", "Monte", "Max");
        }
        // ENDSAMPLE

        public void ChooseByType(TypeWithList type)
        {

        }

        [ExposeAsTable("Add some people")]
        public void AddPerson([SelectionValues("Chad", "Josh")] string name)
        {
        }

        // SAMPLE: selection-values-cell
        public void DoSomething(
            [SelectionValues("Tom", "Todd")] string name, 
            [SelectionList("Numbers")]int x, int y)
        {
        }
        // ENDSAMPLE

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