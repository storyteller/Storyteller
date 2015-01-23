using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Grammars.Sets;

namespace Storyteller.Core.Testing.Grammars.Sets
{
    [TestFixture]
    public class ObjectComparisonTester
    {
        private ObjectComparison<Address> comparer;
        private readonly Address[] addresses = new Address[]
        {
            new Address{City = "Austin", Address1 = "1 Road", DistanceFromOffice = 5},
            new Address{City = "Round Rock", Address1 = "2 Road", DistanceFromOffice = 10},
            new Address{City = "Cedar Park", Address1 = "3 Road", DistanceFromOffice = 15},
        };

        [SetUp]
        public void SetUp()
        {
            comparer = new ObjectComparison<Address>(c => addresses);
            comparer.MatchOn(x => x.City).MatchOn((x => x.Address1)).MatchOn(x => x.DistanceFromOffice);
        }

        [Test]
        public void build_cells()
        {
            var cells = comparer.BuildCells(CellHandling.Basic());

            cells.Select(x => x.Key).ShouldHaveTheSameElementsAs("City", "Address1", "DistanceFromOffice");
            cells.Select(x => x.Type).ShouldHaveTheSameElementsAs(typeof(string), typeof(string), typeof(double));
        }

        [Test]
        public void fetch()
        {
            var task = comparer.Fetch(SpecContext.ForTesting());
            task.Wait();

            var values = task.Result;
            values.Count().ShouldEqual(3);
            values[0].Get("City").ShouldEqual("Austin");
            values[1].Get("Address1").ShouldEqual("2 Road");
            values[2].Get("DistanceFromOffice").ShouldEqual(15.0);
        }
    }

    public class Address
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateOrProvince { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string TimeZone { get; set; }

        public double DistanceFromOffice { get; set; }

        public string[] Names { get; set; }
    }
}