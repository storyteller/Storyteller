using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Xml;
using HtmlTags;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    public class ValidationError
    {
        public string Field { get; set; }
        public string Message { get; set; }
    }

    [TestFixture]
    public class SetVerificationTesting
    {
        private HtmlDocument writePreview(string xml)
        {
            Test test = TestUtility.ReadTest(xml);
            var runner = new TestRunner();

            return runner.WritePreview(test);
        }

        private string writeResults(string xml)
        {
            Test test = TestUtility.ReadTest(xml);
            var runner = new TestRunner();

            runner.RunTest(test);

            return test.LastResult.Html;
        }

        [Test]
        public void run_a_completely_matching_test_1()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 ='4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
                <Row Address1 = '22 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");
            test.LastResult.Counts.ShouldEqual(5, 0, 0, 0);
        }

        [Test]
        public void run_a_completely_matching_test_2()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
                <Row Address1 = '22 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(5, 0, 0, 0);
        }

        [Test]
        public void run_a_test_with_a_fixture_defined_with_a_grammar_that_has_before_steps()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 ='4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
                <Row Address1 = '22 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(5, 0, 0, 0);
        }

        [Test]
        public void run_a_test_with_all_matches_but_in_wrong_order()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddressesOrdered>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
                <Row Address1 = '22 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
            </Address>
        </CheckAddressesOrdered>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(3, 2, 0, 0);
        }

        [Test]
        public void run_a_test_with_matches_and_missing_and_extras()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = 'Missing Address' City = 'Joplin' StateOrProvince = 'MO' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(3, 3, 0, 0);
        }

        [Test]
        public void run_a_test_with_one_extra_row()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(4, 1, 0, 0);
        }

        [Test]
        public void run_a_test_with_one_missing_expected_row()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = '123 Elm Drive' City = 'Joplin' StateOrProvince = 'MO' />
                <Row Address1 = '22 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
                <Row Address1 = '100 Cherry Lane' City = 'Georgetown' StateOrProvince = 'TX' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            test.LastResult.Counts.ShouldEqual(5, 1, 0, 0);
        }


        [Test]
        public void smoke_test_writing_preview()
        {
            HtmlDocument html =
                writePreview(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = 'Missing Address' City = 'Joplin' StateOrProvince = 'MO' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            string htmlString = html.ToString();
            htmlString.ShouldContain("Address1");
            htmlString.ShouldContain("City");
            htmlString.ShouldContain("StateOrProvince");

            //html.OpenResultsInBrowser();
        }


        [Test]
        public void smoke_test_writing_results()
        {
            string htmlString =
                writeResults(
                    @"
<Test name='something'>
    <AddressCheck>
        <CheckAddresses>
            <Address>
                <Row Address1 = '4 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '5 Brookhaven' City = 'Bentonville' StateOrProvince = 'AR' />
                <Row Address1 = '1700 W 10th St' City = 'Austin' StateOrProvince = 'TX' />
                <Row Address1 = 'Missing Address' City = 'Joplin' StateOrProvince = 'MO' />
            </Address>
        </CheckAddresses>
    </AddressCheck>
</Test>
");

            htmlString.ShouldContain("Address1");
            htmlString.ShouldContain("City");
            htmlString.ShouldContain("StateOrProvince");

            //html.OpenResultsInBrowser();
        }

        [Test]
        public void when_writing_the_grammar_structure()
        {
            SetVerificationGrammar grammar = Fixture.VerifySetOf(c => new ValidationError[0])
                .Titled("the title")
                .LeafNameIs("group1")
                .MatchOn(x => x.Field, x => x.Message);


            var setVerification = grammar.ToStructure(null).ShouldBeOfType<SetVerification>();
            var expected = new SetVerification("the title", "group1", Cell.For<string>("Field"),
                                               Cell.For<string>("Message"));

            setVerification.ShouldEqual(expected);

        }

    }


    public class AddressCheckFixture : Fixture
    {
        public AddressCheckFixture()
        {
            this["CheckAddresses"] = VerifySetOf<Address>(LoadList1)
                .Titled("Check the Address List")
                .LeafNameIs("Address")
                .MatchOn(x => x.Address1, x => x.City, x => x.StateOrProvince);
            this["CheckAddressesOrdered"] = VerifySetOf<Address>(LoadList1).Ordered()
                .Titled("Check the Address List")
                .LeafNameIs("Address")
                .MatchOn(x => x.Address1, x => x.City, x => x.StateOrProvince);
        }

        public Address[] LoadList1()
        {
            return new[]
            {
                new Address
                {
                    Address1 = "4 Brookhaven",
                    City = "Bentonville",
                    StateOrProvince = "AR"
                },
                new Address
                {
                    Address1 = "5 Brookhaven",
                    City = "Bentonville",
                    StateOrProvince = "AR"
                },
                new Address
                {
                    Address1 = "1700 W 10th St",
                    City = "Austin",
                    StateOrProvince = "TX"
                },
                new Address
                {
                    Address1 = "123 Elm Drive",
                    City = "Joplin",
                    StateOrProvince = "MO"
                },
                new Address
                {
                    Address1 = "22 Cherry Lane",
                    City = "Georgetown",
                    StateOrProvince = "TX"
                }
            };
        }

        public void LoadList2()
        {
            Context.CurrentObject = new[]
            {
                new Address
                {
                    Address1 = "1700 W 10th St",
                    City = "Austin",
                    StateOrProvince = "TX"
                },
                new Address
                {
                    Address1 = "123 Elm Drive",
                    City = "Joplin",
                    StateOrProvince = "MO"
                },
                new Address
                {
                    Address1 = "4 Brookhaven",
                    City = "Bentonville",
                    StateOrProvince = "AR"
                },
                new Address
                {
                    Address1 = "5 Brookhaven",
                    City = "Bentonville",
                    StateOrProvince = "AR"
                },
                new Address
                {
                    Address1 = "22 Cherry Lane",
                    City = "Georgetown",
                    StateOrProvince = "TX"
                }
            };
        }
    }


    [TestFixture]
    public class can_compare_nulls_and_blanks
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            errors = new[]
            {
                new ValidationError
                {
                    Field = null,
                    Message = string.Empty
                }
            };
            grammar =
                Fixture.VerifySetOf(c => errors).Titled("The validation errors are").LeafNameIs("error").MatchOn(
                    x => x.Field, x => x.Message);

            childStep = new Step().With("Field", "NULL").With("Message", "BLANK");
            step = new Step().WithChildren("error", childStep);

            context = new TestContext();

            grammar.Execute(step, context);
        }

        #endregion

        private ValidationError[] errors;
        private IGrammar grammar;
        private Step step;
        private TestContext context;
        private Step childStep;

        [Test]
        public void should_have_succeeded()
        {
            context.Counts.ShouldEqual(1, 0, 0, 0);
        }

        [Test]
        public void the_results_should_completely_match()
        {
            var result = context.ResultsFor(step).GetResult<IList<SetRow>>("error");

            result.Count(x => x.Result == SetMatch.Match).ShouldEqual(1);
        }
    }
}