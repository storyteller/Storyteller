using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using System.Linq;

namespace StoryTeller.Testing.Engine.Sets
{

    [TestFixture]
    public class ObjectComparerTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            comparer = new ObjectComparer<Address>();
            comparer.MatchOn(x => x.City).MatchOn((x => x.Address1)).MatchOn(x => x.DistanceFromOffice);
        }

        #endregion

        private ObjectComparer<Address> comparer;


        [Test]
        public void get_cells_has_a_cell_for_each_property()
        {
            List<Cell> actual = comparer.Columns.Select(x => x.Cell).ToList();
            var expected = new List<Cell>
            {
                Cell.For<string>("City"),
                Cell.For<string>("Address1"),
                Cell.For<double>("DistanceFromOffice")
            };

            TestUtility.AssertListMatches(actual, expected);
        }

    }
}