using System.Data;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    [TestFixture]
    public class DataColumnMatchTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
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

        #endregion

        private DataTable table;
        private DataColumnMatch _matchCity;
        private DataColumnMatch _matchDistance;
        private DataColumnMatch _matchZip;


        [Test]
        public void get_cell()
        {
            Cell cell = _matchCity.As<ISetColumn>().Cell;
            cell.Key.ShouldEqual("City");
            cell.Type.ShouldEqual(typeof(string));
        }


        [Test]
        public void read_step_successfully_if_it_exists_and_is_formatted_correctly()
        {
            Step step = new Step().With("City:Dallas,Distance:189");
            var row = new SetRow();

            var context = new TestContext();

            _matchCity.As<ISetColumn>().ReadExpected(context, step, row);
            _matchDistance.As<ISetColumn>().ReadExpected(context, step, row);

            row.Values["City"].ShouldEqual("Dallas");
            row.Values["Distance"].ShouldEqual(189);
        }

        [Test]
        public void read_the_actual_values()
        {
            var row = new SetRow();

            _matchCity.As<ISetColumn>().ReadActual(table.Rows[0], row);
            _matchDistance.As<ISetColumn>().ReadActual(table.Rows[0], row);

            row.Values["City"].ShouldEqual("Austin");
            row.Values["Distance"].ShouldEqual(16);
        }

    }
}