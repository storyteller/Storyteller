using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.Sets
{
    
    public class ObjectComparisonTester
    {
        private ObjectComparison<Address> comparer;
        private readonly Address[] addresses = new Address[]
        {
            new Address{City = "Austin", Address1 = "1 Road", DistanceFromOffice = 5},
            new Address{City = "Round Rock", Address1 = "2 Road", DistanceFromOffice = 10},
            new Address{City = "Cedar Park", Address1 = "3 Road", DistanceFromOffice = 15},
        };


        public ObjectComparisonTester()
        {
            comparer = new ObjectComparison<Address>(c => addresses);
            comparer.Compare(x => x.City);
            comparer.Compare((x => x.Address1));
            comparer.Compare(x => x.DistanceFromOffice);
        }


        [Fact]
        public void build_cells()
        {
            var cells = comparer.BuildCells(CellHandling.Basic(), new Fixture());

            cells.Select(x => x.Key).ShouldHaveTheSameElementsAs("City", "Address1", "DistanceFromOffice");
            cells.Select(x => x.Type).ShouldHaveTheSameElementsAs(typeof(string), typeof(string), typeof(double));
        }

        [Fact]
        public void fetch()
        {
            var task = comparer.Fetch(SpecContext.ForTesting());
            task.Wait();

            var values = task.Result;
            values.Count().ShouldBe(3);
            values[0].Get("City").ShouldBe("Austin");
            values[1].Get("Address1").ShouldBe("2 Road");
            values[2].Get("DistanceFromOffice").ShouldBe(15.0);
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