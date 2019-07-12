using StoryTeller;
using StoryTeller.CSV;

namespace Samples.Fixtures
{
    public class CsvFixture : Fixture
    {
        public IGrammar FiveColumns()
        {
            return CsvFile("With 5 columns", 5, f => { });
        }

        public IGrammar SpecifiedColumns()
        {
            return CsvFile("With specified columns", c =>
            {
                c.AddColumn("One", defaultValue: "1");
                c.AddColumn("Two", defaultValue: "2");
                c.AddColumn("Three", defaultValue: "3").SelectionValues("3", "4", "5");
                c.AddColumn("Omitted").Header("Can be omitted").OmitIfInactive();
                c.AddColumn("Default by row number").UseDefaultIfNotExplicitlyExpressed("Row {0}");
            });
        }
    }
}
