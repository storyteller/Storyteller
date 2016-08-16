using System.Collections.Generic;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.Testing.Grammars.Sets
{
    
    public class VerifySetOf_specs : SpecRunningContext
    {

        [Fact]
        public void spot_check_the_model_for_unordered()
        {
            var verification = ModelFor<SetVerification>("VerifyAddressSet", "TheAddressesShouldBe");
            verification.collection.ShouldBe("rows");
            verification.title.ShouldBe("The cities should be");
            verification.cells.Select(x => x.Key)
                .ShouldHaveTheSameElementsAs("City", "StateOrProvince", "PostalCode");

            verification.ordered.ShouldBe(false);
        }

        [Fact]
        public void spot_check_the_model_for_ordered()
        {
            var verification = ModelFor<SetVerification>("VerifyAddressSet", "TheOrderedAddressesShouldBe");
            verification.collection.ShouldBe("rows");
            verification.title.ShouldBe("The cities in order should be");
            verification.cells.Select(x => x.Key)
                .ShouldHaveTheSameElementsAs("City", "StateOrProvince", "PostalCode");

            verification.ordered.ShouldBe(true);
        }

        [Fact]
        public void execute_unordered_happy_path()
        {
            execute(@"
=> VerifyAddressSet
* TheAddressesShouldBe
  -> rows
  * row: City=Jasper, StateOrProvince=Missouri, PostalCode=64755
  * row: City=Austin, StateOrProvince=Texas, PostalCode=78750
  * row: City=Bentonville, StateOrProvince=Arkansas, PostalCode=72712


");

            CountsShouldBe(3, 0, 0, 0);
        }

        [Fact]
        public void on_ordered_wrong_because_of_a_bad_value()
        {
            execute(@"
=> VerifyAddressSet
* TheAddressesShouldBe
  -> rows
  * row#1: City=Lamar, StateOrProvince=Missouri, PostalCode=64755
  * row: City=Austin, StateOrProvince=Texas, PostalCode=78750
  * row: City=Bentonville, StateOrProvince=Arkansas, PostalCode=72712


");

            CountsShouldBe(2, 2, 0, 0);

            var result = theContext.Results.OfType<SetVerificationResult>().Single();

            result.missing.ShouldContain("1");
            result.extras.Single()["City"].ShouldBe("Jasper");
        }


        [Fact]
        public void execute_ordered_happy_path()
        {
            execute(@"
=> VerifyAddressSet
* TheOrderedAddressesShouldBe
  -> rows
  * row: City=Austin, StateOrProvince=Texas, PostalCode=78750
  * row: City=Jasper, StateOrProvince=Missouri, PostalCode=64755
  * row: City=Bentonville, StateOrProvince=Arkansas, PostalCode=72712

");

            CountsShouldBe(3, 0, 0, 0);
        }

        [Fact]
        public void execute_out_of_order()
        {
            execute(@"
=> VerifyAddressSet
* TheOrderedAddressesShouldBe
  -> rows
  * row: City=Austin, StateOrProvince=Texas, PostalCode=78750
  * row#1: City=Bentonville, StateOrProvince=Arkansas, PostalCode=72712
  * row#2: City=Jasper, StateOrProvince=Missouri, PostalCode=64755

");

            CountsShouldBe(1, 2, 0, 0);

            var result = theContext.Results.OfType<SetVerificationResult>().Single();

            result.wrongOrdered.ShouldHaveTheSameElementsAs(new WrongOrder("1", 3), new WrongOrder("2", 2));
        }

    }

    public class VerifyAddressSetFixture : Fixture
    {
        public IGrammar TheAddressesShouldBe()
        {
            return VerifySetOf(addresses).Titled("The cities should be")
                .MatchOn(x => x.City, x => x.StateOrProvince, x => x.PostalCode);
        }

        public IGrammar TheOrderedAddressesShouldBe()
        {
            return VerifySetOf(addresses).Titled("The cities in order should be")
                .MatchOn(x => x.City, x => x.StateOrProvince, x => x.PostalCode)
                .Ordered();
        }

        private IEnumerable<Address> addresses()
        {
            yield return new Address {City = "Austin", StateOrProvince = "Texas", PostalCode = "78750"};
            yield return new Address {City = "Jasper", StateOrProvince = "Missouri", PostalCode = "64755"};
            yield return new Address {City = "Bentonville", StateOrProvince = "Arkansas", PostalCode = "72712"};
        }
    }
}