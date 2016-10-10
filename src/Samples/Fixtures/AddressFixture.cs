using System.ComponentModel;
using System.Linq;
using StoryTeller;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class AddressFixture : Fixture
    {
        public AddressFixture()
        {
            Title = "Address Setup";
        }

        // SAMPLE: create-new-object-with-explicit-props
        public IGrammar IfTheAddressIs2()
        {
            return CreateNewObject<Address>("If the new address is", _ =>
            {
                _.SetProperty(o => o.Address1);
                _.SetProperty(o => o.Address2);

                // Customize the cell for 'City'
                _.SetProperty(o => o.City)
                    .Header("City or Township")
                    .DefaultValue("Austin");

                // and more properties

            });
        }
        // ENDSAMPLE

        // SAMPLE: using-set-properties-list
        [Hidden]
        public IGrammar SelectAddressesExplicitly()
        {
            return CreateNewObject<Address>("If the new address is", _ =>
            {
                _.SetProperties(o => o.Address1, o => o.City, o => o.StateOrProvince);
            });
        }
        // ENDSAMPLE


        // SAMPLE: using-create-object-as-table
        public IGrammar TheAddressesAre()
        {
            return this["IfTheAddressIs2"]
                .AsTable("The addresses are");
        }
        // ENDSAMPLE

        // SAMPLE: create-new-object-with-all-primitive-props
        public IGrammar IfTheAddressIs()
        {
            return CreateNewObject<Address>("If the new address is", x =>
            {
                x.SetAllPrimitivePropertiesSpecificToThisType();
            });
        }
        // ENDSAMPLE


        // SAMPLE: do-something-with-the-object-being-created
        public IGrammar IfTheAddressIs3()
        {
            return CreateNewObject<Address>("If the new address is", x =>
            {
                x.SetAllPrimitivePropertiesSpecificToThisType();

                x.Do(address =>
                {
                    // Add the new address to a list somewhere?
                    // Set a private field on the Fixture?
                    // Stash in Context.State?
                    // WriteToText to a database or file?
                    // Send to another service as an input?
                });
            });
        }
        // ENDSAMPLE


        // SAMPLE: using-load-object-by
        [Hidden]
        [FormatAs("Street Address {line1}, {line2}")]
        public void AddressIs(string line1, [DefaultValue("EMPTY")]string line2)
        {
            CurrentObject = new Address
            {
                Address1 = line1,
                Address2 = line2
            };
        }

        public IGrammar AddressByStreet()
        {
            return CreateObject<Address>("The address by street is", _ =>
            {
                _.LoadObjectBy = this["AddressIs"];

                _.SetProperty(o => o.City);
                _.SetProperty(o => o.StateOrProvince);
                // and the rest of the properties
            });
        }
        // ENDSAMPLE

        // SAMPLE: using-with-input        
        public IGrammar AddressWithStreetAddress()
        {
            return CreateNewObject<Address>("The address by street is", _ =>
            {
                _.WithInput<string>("The street address is {street}").Configure((address, data) =>
                {
                    var parts = data.Split(',');
                    address.Address1 = parts.First();
                    address.Address2 = parts.Length == 2
                        ? parts[1]
                        : null;
                });

                _.SetProperty(o => o.City);
                _.SetProperty(o => o.StateOrProvince);
                // and the rest of the properties
            });
        }
        // ENDSAMPLE

        // SAMPLE: using-object-is
        public IGrammar AddressWithObjectIs()
        {
            return CreateObject<Address>("An address in Dallas, TX", _ =>
            {
                _.ObjectIs = c => new Address
                {
                    City = "Dallas", 
                    StateOrProvince = "TX", 
                    Country = "USA"
                };

                _.SetProperty(o => o.Address1);
                _.SetProperty(o => o.Address2);
            });
        }
        // ENDSAMPLE

        // SAMPLE: using-verify-properties-of
        public IGrammar TheAddressShouldBe()
        {
            return VerifyPropertiesOf<Address>("then the new address properties should be", x =>
            {
                x.Check(o => o.Address1);
                x.Check(o => o.Address2);
                x.Check(o => o.City);
            });
        }
        // ENDSAMPLE
    }

    // SAMPLE: address
    public class Address
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateOrProvince { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
    }
    // ENDSAMPLE
}