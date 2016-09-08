using System.Data;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.Sets
{

#if NET46       
    public class data_table_verification_specs : SpecRunningContext
    {
        [Fact]
        public void happy_path()
        {
            execute(@"
Name:DataTable
=> DataTable
* VerifyRows
  -> rows
  * row: City=Austin, Distance=16, Zip=78704
  * row: City=Bentonville, Distance=600, Zip=72712
  * row: City=London, Distance=3500, Zip=NULL
  * row: City=Paris, Distance=4000, Zip=NULL


");

            CountsShouldBe(4, 0, 0, 0);
        }

        [Fact]
        public void sad_path_by_missing_on_one_column()
        {
            execute(@"
Name:DataTable
=> DataTable
* VerifyRows
  -> rows
  * row: City=Austin, Distance=16, Zip=78704
  * row: City=Bentonville, Distance=600, Zip=72712
  * row: City=London, Distance=3500, Zip=NULL
  * row#1: City=Berlin, Distance=4000, Zip=NULL


");

            CountsShouldBe(3, 2, 0, 0);
            var result = theContext.Results.OfType<SetVerificationResult>().Single();

            result.missing.ShouldContain("1");
            result.extras.Single()["City"].ShouldBe("Paris");
        }

        [Fact]
        public void sad_path_with_missing()
        {
            execute(@"
Name:DataTable
=> DataTable
* VerifyRows
  -> rows
  * row: City=Austin, Distance=16, Zip=78704
  * row: City=Bentonville, Distance=600, Zip=72712
  * row: City=London, Distance=3500, Zip=NULL
  * row: City=Paris, Distance=4000, Zip=NULL
  * row#1: City=Berlin, Distance=4500, Zip=NULL


");

            CountsShouldBe(4, 1, 0, 0);

            var result = theContext.Results.OfType<SetVerificationResult>().Single();
            result.missing.ShouldContain("1");
        }

        [Fact]
        public void sad_path_with_extra()
        {
            execute(@"
Name:DataTable
=> DataTable
* VerifyRows
  -> rows
  * row: City=Austin, Distance=16, Zip=78704
  * row: City=Bentonville, Distance=600, Zip=72712
  * row: City=London, Distance=3500, Zip=NULL

");

            CountsShouldBe(3, 1, 0, 0);

            var result = theContext.Results.OfType<SetVerificationResult>().Single();

            result.extras.Single()["City"].ShouldBe("Paris");
        }
    }



    public class DataTableFixture : Fixture
    {
        public IGrammar VerifyRows()
        {
            return VerifyDataTable(makeTable).Titled("The rows should be")
                .Columns(x =>
                {
                    x.Column<string>("City");
                    x.Column<int>("Distance");
                    x.Column<string>("Zip");
                });
        }

        private DataTable makeTable()
        {
            var table = new DataTable();
            table.Columns.Add("City", typeof(string));
            table.Columns.Add("Distance", typeof(int));
            table.Columns.Add("Zip", typeof(string));

            table.Rows.Add("Austin", 16, "78704");
            table.Rows.Add("Bentonville", 600, "72712");
            table.Rows.Add("London", 3500, null);
            table.Rows.Add("Paris", 4000, null);

            return table;
        }
    }
#endif
}