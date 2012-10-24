using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.DSL;
using StoryTeller.Engine;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.DSL
{
    [TestFixture]
    public class ObjectConstructionExpressionTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            _theAddress = null;

            grammar = new ParagraphGrammar();
            expression = new ObjectConstructionExpression<Address>(grammar);

            theStep = new Step();
        }

        #endregion

        private ParagraphGrammar grammar;
        private ObjectConstructionExpression<Address> expression;
        private Address _theAddress;
        private Step theStep;

        private Address theAddress
        {
            get
            {
                if (_theAddress == null)
                {
                    _theAddress = new Address();
                    var context = new TestContext
                    {
                        CurrentObject = _theAddress
                    };
                    var counts = new Counts();
                    grammar.Execute(theStep, context);

                    counts.ShouldEqual(0, 0, 0, 0);
                }

                return _theAddress;
            }
        }

        [Test]
        public void specify_all_the_primitive_properties()
        {
            theStep.With(
                "Address1:1718 Elm Street,Address2:Unit A,City:Austin,StateOrProvince:TX,PostalCode:78703,TimeZone:CT,DistanceFromOffice:112.4,Country:United States");
            expression.SetAllPrimitiveProperties();

            theAddress.Address1.ShouldEqual("1718 Elm Street");
            theAddress.Address2.ShouldEqual("Unit A");
            theAddress.City.ShouldEqual("Austin");
            theAddress.StateOrProvince.ShouldEqual("TX");
            theAddress.PostalCode.ShouldEqual("78703");
            theAddress.TimeZone.ShouldEqual("CT");
            theAddress.DistanceFromOffice.ShouldEqual(112.4);
        }


        [Test]
        public void specify_all_the_primitive_properties_with_extension_method()
        {
            theStep.With(
                "Address1:1718 Elm Street,Address2:Unit A,City:Austin,StateOrProvince:TX,PostalCode:78703,TimeZone:CT,DistanceFromOffice:112.4,Country:United States");

            grammar.ConfigureSteps(x => { x.SetPropertiesOnCurrentObject<Address>(o => o.SetAllPrimitiveProperties()); });

            theAddress.Address1.ShouldEqual("1718 Elm Street");
            theAddress.Address2.ShouldEqual("Unit A");
            theAddress.City.ShouldEqual("Austin");
            theAddress.StateOrProvince.ShouldEqual("TX");
            theAddress.PostalCode.ShouldEqual("78703");
            theAddress.TimeZone.ShouldEqual("CT");
            theAddress.DistanceFromOffice.ShouldEqual(112.4);
        }

        [Test]
        public void specify_properties_one_at_a_time()
        {
            theStep.With("Address1:1718 Elm Street,City:Austin");
            expression.SetProperty(x => x.Address1).SetProperty(x => x.City);

            theAddress.City.ShouldEqual("Austin");
            theAddress.Address1.ShouldEqual("1718 Elm Street");
        }


        [Test]
        public void specify_properties_one_at_a_time_with_extension_methods()
        {
            theStep.With("Address1:1718 Elm Street,City:Austin");

            grammar.ConfigureSteps(
                x => { x.SetPropertiesOnCurrentObject<Address>(o => { o.SetProperties(y => y.Address1, y => y.City); }); });


            theAddress.City.ShouldEqual("Austin");
            theAddress.Address1.ShouldEqual("1718 Elm Street");
        }

        [Test]
        public void specify_properties_with_a_filter()
        {
            theStep.With(
                "Address1:1718 Elm Street,Address2:Unit A,City:Austin,StateOrProvince:TX,PostalCode:78703,TimeZone:CT,DistanceFromOffice:112.4,Country:United States");
            expression.SetAllPrimitiveProperties(prop => prop.Name.StartsWith("Address"));


            theAddress.Address1.ShouldEqual("1718 Elm Street");
            theAddress.Address2.ShouldEqual("Unit A");
            theAddress.City.ShouldBeNull();
            theAddress.StateOrProvince.ShouldBeNull();
            theAddress.PostalCode.ShouldBeNull();
        }


        [Test]
        public void specify_properties_with_a_filter_and_the_extension_method()
        {
            theStep.With(
                "Address1:1718 Elm Street,Address2:Unit A,City:Austin,StateOrProvince:TX,PostalCode:78703,TimeZone:CT,DistanceFromOffice:112.4,Country:United States");


            grammar.ConfigureSteps(
                x =>
                {
                    x.SetPropertiesOnCurrentObject<Address>(
                        o => { o.SetAllPrimitiveProperties(prop => prop.Name.StartsWith("Address")); });
                });

            theAddress.Address1.ShouldEqual("1718 Elm Street");
            theAddress.Address2.ShouldEqual("Unit A");
            theAddress.City.ShouldBeNull();
            theAddress.StateOrProvince.ShouldBeNull();
            theAddress.PostalCode.ShouldBeNull();
        }
    }
}