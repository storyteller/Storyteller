using System;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.DSL;
using StoryTeller.Engine;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.DSL
{
    [TestFixture]
    public class ObjectVerificationExpressionTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            grammar = new ParagraphGrammar("an action");
            step = new Step("some grammar");
            TheAddress = null;
        }

        #endregion

        private ParagraphGrammar grammar;
        private IStep step;
        public Address TheAddress;
        public Counts TheCounts;

        private void then()
        {
            var context = new TestContext();
            context.CurrentObject = TheAddress;

            grammar.Execute(step, context);

            TheCounts = context.Counts;
        }

        private void ifTheVerificationIs(Action<ObjectVerificationExpression<Address>> action)
        {
            grammar.ConfigureSteps(x => { x.VerifyPropertiesOf(action); });
        }

        private void andTheExpectationIs(Action<IStep> action)
        {
            action(step);
        }

        [Test]
        public void check_a_single_property_successfully()
        {
            ifTheVerificationIs(x => x.Check(y => y.StateOrProvince));
            andTheExpectationIs(x => { x.SetProperty<Address, string>(y => y.StateOrProvince, "TX"); });

            TheAddress = new Address
            {
                StateOrProvince = "TX"
            };

            then();

            TheCounts.ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void check_a_single_property_that_does_not_match()
        {
            ifTheVerificationIs(x => x.Check(y => y.StateOrProvince));
            andTheExpectationIs(x => { x.SetProperty<Address, string>(y => y.StateOrProvince, "TX"); });

            TheAddress = new Address
            {
                StateOrProvince = "AR",
                Address1 = "TX"
            };

            then();

            TheCounts.ShouldEqual(0, 1, 0, 0);
        }

        [Test]
        public void check_all_simple_properties_successfully()
        {
            ifTheVerificationIs(x => x.CheckAllSimpleProperties());
            andTheExpectationIs(x =>
            {
                x.SetProperty<Address, string>(y => y.Address1, "A1");
                x.SetProperty<Address, string>(y => y.Address2, "A2");
                x.SetProperty<Address, string>(y => y.StateOrProvince, "TX");
                x.SetProperty<Address, string>(y => y.City, "Austin");
                x.SetProperty<Address, string>(y => y.Country, "USA");
                x.SetProperty<Address, string>(y => y.PostalCode, "78703");
                x.SetProperty<Address, string>(y => y.TimeZone, "CT");
                x.SetProperty<Address, double>(y => y.DistanceFromOffice, 112.3);
            });

            TheAddress = new Address
            {
                Address1 = "A1",
                Address2 = "A2",
                City = "Austin",
                StateOrProvince = "TX",
                Country = "USA",
                PostalCode = "78703",
                TimeZone = "CT",
                DistanceFromOffice = 112.3
            };

            then();

            TheCounts.ShouldEqual(8, 0, 0, 0);
        }

        [Test]
        public void check_all_simple_properties_with_three_mismatches()
        {
            ifTheVerificationIs(x => x.CheckAllSimpleProperties());
            andTheExpectationIs(x =>
            {
                x.SetProperty<Address, string>(y => y.Address1, "A1");
                x.SetProperty<Address, string>(y => y.Address2, "A2");
                x.SetProperty<Address, string>(y => y.StateOrProvince, "TX");
                x.SetProperty<Address, string>(y => y.City, "Austin");
                x.SetProperty<Address, string>(y => y.Country, "USA");
                x.SetProperty<Address, string>(y => y.PostalCode, "78703");
                x.SetProperty<Address, string>(y => y.TimeZone, "CT");
                x.SetProperty<Address, double>(y => y.DistanceFromOffice, 112.3);
            });

            TheAddress = new Address
            {
                Address1 = "A1",
                Address2 = "A2",
                City = "Austin",
                StateOrProvince = "TX - Wrong",
                Country = "USA - Wrong",
                PostalCode = "78703 - Wrong",
                TimeZone = "CT",
                DistanceFromOffice = 500.3
            };

            then();

            TheCounts.ShouldEqual(4, 4, 0, 0);
        }
    }


    [TestFixture]
    public class set_up_fixture_grammar_to_find_and_verify_an_object
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            Assert.Fail("Redo.");
            Fixture fixture = new Fixture().With(x =>
            {
                x["CheckAddress"] = Fixture.Paragraph("Check the Address", o => { });

                //x.Grammar("CheckAddress").IsCompositeTitled("Check the Address")
                //    .Before((s, c) => c.CurrentObject = new Address {Address1 = "A1", Address2 = "A2"})
                //    .VerifyPropertiesOf<Address>(y =>
                //    {
                //        y.Check(z => z.Address1);
                //        y.Check(z => z.Address2);
                //    });
            });

            Step stepThatSucceeds = new Step("CheckAddress").With("Address1:A1,Address2:A2");
            Step stepThatFails = new Step("CheckAddress").With("Address1:B1,Address2:A2");

            fixture["CheckAddress"].Execute(stepThatSucceeds).ShouldEqual(2, 0, 0, 0);
            fixture["CheckAddress"].Execute(stepThatFails).ShouldEqual(1, 1, 0, 0);
        }

        #endregion
    }
}