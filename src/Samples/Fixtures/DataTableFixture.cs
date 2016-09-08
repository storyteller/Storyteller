using System;
using System.Data;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
#if NET46
    public class DataTableFixture : Fixture
    {
        private readonly DataTable _table = new DataTable();

        public DataTableFixture()
        {
            Title = "Verifying DataTables";

            _table.Columns.Add("City", typeof(string));
            _table.Columns.Add("Distance", typeof(int));
            _table.Columns.Add("Zip", typeof(string));
        }

        [Hidden]
        public void AddRow(string City, int Distance, string ZipCode)
        {
            object zip = ZipCode == null ? (object) DBNull.Value : ZipCode;

            _table.Rows.Add(City, Distance, zip);
        }

        public IGrammar TheDataTableIs()
        {
            return this["AddRow"].AsTable("If the DataTable rows are").Before(() => _table.Rows.Clear());
        }

        private DataTable fetchData()
        {
            return _table;
        }


        // SAMPLE: using-verify-data-table
        public IGrammar VerifyRows()
        {
            // fetchData is a method on this Fixture class that returns
            // a DataTable
            return VerifyDataTable(fetchData).Titled("The rows should be")
                .Columns(x =>
                {
                    x.Column<string>("City");
                    x.Column<int>("Distance");
                    x.Column<string>("Zip").Header("Postal Code");
                });
        }
        // ENDSAMPLE 



    }
#endif
}