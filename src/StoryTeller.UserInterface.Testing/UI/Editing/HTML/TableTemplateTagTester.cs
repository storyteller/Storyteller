using System.Linq;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;
using StoryTeller.UserInterface.Editing.HTML.Tables;

namespace StoryTeller.UserInterface.Testing.UI.Editing.HTML
{
    [TestFixture]
    public class TableTemplateTagTester
    {
        private TableTemplateTag tag;
        private Table table;

        [SetUp]
        public void SetUp()
        {
            var library = FixtureGraph.Library;
            table = (Table)library.FixtureFor("SampleTable").GrammarFor("Table1");

            tag = new TableTemplateTag(table, new CellBuilderLibrary());
        }

        private Cell cell(string key)
        {
            return table.Cells.First(x => x.Key == key);
        }

        [Test]
        public void cell_header_tag_writes_mandatory_correctly()
        {
            cell("b").DefaultValue.ShouldEqual("Jeremy");
            cell("a").HasDefault().ShouldBeFalse();
            cell("b").HasDefault().ShouldBeTrue();
            new CellHeaderTag(cell("a")).MetaData("mandatory").ShouldEqual(true);
            new CellHeaderTag(cell("b")).MetaData("mandatory").ShouldEqual(false);
        }

        public class SampleTableFixture : Fixture
        {
            [ExposeAsTable("some table", "rows")]
            public void Table1(
                string a,
                [Default("Jeremy")]string b,
                string c,
                [Default("Max")]string d,
                [Default("Max2")]string e,
                [Default("Max3")]string f)
            {

            }
        }
    }
}