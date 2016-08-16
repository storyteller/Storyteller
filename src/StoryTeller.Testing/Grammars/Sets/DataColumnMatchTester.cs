using System.Data;
using FubuCore;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Sets
{
    
    public class DataColumnMatchTester
    {
        public DataColumnMatchTester()
        {
            table = new DataTable();
            table.Columns.Add("City", typeof(string));
            table.Columns.Add("Distance", typeof(int));
            table.Columns.Add("Zip", typeof(string));

            table.Rows.Add("Austin", 16, "78704");
            table.Rows.Add("London", 8192, "");
            table.Rows.Add("Paris", 4096, null);

            _matchCity = new DataColumnMatch("City", typeof(string));
            _matchDistance = new DataColumnMatch("Distance", typeof(int));
            _matchZip = new DataColumnMatch("Zip", typeof(string));
        }


        private DataTable table;
        private DataColumnMatch _matchCity;
        private DataColumnMatch _matchDistance;
        private DataColumnMatch _matchZip;


        [Fact]
        public void get_cell()
        {
            Cell cell = _matchCity.As<IColumnMatch>().BuildCell(CellHandling.Basic(), new Fixture());
            cell.Key.ShouldBe("City");
            cell.Type.ShouldBe(typeof(string));
        }

        [Fact]
        public void build_cell_with_modifications()
        {
            _matchCity.CellModifications.Header("The City");
            Cell cell = _matchCity.As<IColumnMatch>().BuildCell(CellHandling.Basic(), new Fixture());
            cell.Key.ShouldBe("City");
            cell.header.ShouldBe("The City");
            cell.Type.ShouldBe(typeof(string));
        }

        [Fact]
        public void blow_up_with_descriptive_message_if_the_column_does_not_exist()
        {
            var match = new DataColumnMatch("Foo", typeof(int));
            Exception<StorytellerAssertionException>.ShouldBeThrownBy(() =>
            {
                match.GetValue(table.Rows[0]);
            }).Message.ShouldContain("Requested column 'Foo' does not exist");
        }

        [Fact]
        public void read_the_actual_values()
        {
            var row = table.Rows[2];
            _matchCity.GetValue(row).ShouldBe("Paris");
        }
    }
}