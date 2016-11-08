using Baseline;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class TableTester
    {
        [Fact]
        public void create_sample_step_for_table_grammar()
        {
            var grammar = new SampleTablesFixture().Compile(CellHandling.Basic()).FindGrammar("AddNumbers");
            var step = grammar
                .ToSampleStep();

            step.Key.ShouldBe("AddNumbers");
            step.Collections.ShouldHaveSingleItem();

            var section = step.Collections[grammar.As<Table>().collection];
            section.Children.Count.ShouldBe(3);

            foreach (Step child in section.Children)
            {
                child.Values["x"].ShouldBe("x");
                child.Values["y"].ShouldBe("y");
            }
        }


        public class SampleTablesFixture : Fixture
        {
            [ExposeAsTable("Add some numbers")]
            public void AddNumbers([Header("X")]int x, [Header("Y")]int y)
            {

            }
        }
    }
}