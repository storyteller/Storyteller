using System.Linq;
using Shouldly;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.Markdown;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class loading_table_data_without_explicit_collection_name
    {
        private readonly FixtureLibrary theFixtures = new FixtureLibrary();

        [Fact]
        public void should_read_in_the_table_data_to_the_default_section()
        {
            theFixtures.AddWithDefaultCellHandling<NumberTableFixture>();

            var spec = MarkdownReader.ReadFromText(@"
# Some Specification

[NumberTable]
|> Add
|x|y|sum|
|1|2|3|
|2|3|5|
|6|4|10|

");

            var step = spec.Children.Single().ShouldBeOfType<Section>()
                .Children.Single().ShouldBeOfType<Step>();

            step.Collections.Count.ShouldBe(1);

            step.Collections.Single().Key.ShouldBe(Table.DefaultCollectionName);

            step.Collections[Table.DefaultCollectionName].Children.Count.ShouldBe(3);

            var row1 = step.Collections[Table.DefaultCollectionName].Children.First().ShouldBeOfType<Step>();

            row1.Values["x"].ShouldBe("1");
            row1.Values["y"].ShouldBe("2");
            row1.Values["sum"].ShouldBe("3");
        }
    }

    public class NumberTableFixture : Fixture
    {
        [ExposeAsTable("Adding numbers")]
        public void Add(int x, int y, out int sum)
        {
            sum = x + y;
        }
    }
}