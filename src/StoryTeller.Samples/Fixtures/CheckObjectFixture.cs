using Storyteller.Core;

namespace StoryTeller.Samples.Fixtures
{
    public class CheckObjectFixture : Fixture
    {
        public CheckObjectFixture()
        {
            Title = "Check Properties";
        }

        public IGrammar IfTheAddressIs()
        {
            return CreateNewObject<Address>("If the new address is", x =>
            {
                x.SetAllPrimitivePropertiesSpecificToThisType();
            });
        }

        public IGrammar TheAddressShouldBe()
        {
            return VerifyPropertiesOf<Address>("then the new address properties should be", x =>
            {
                x.Check(o => o.Address1);
                x.Check(o => o.Address2);
                x.Check(o => o.City);
            });
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
    }
}