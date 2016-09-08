using System;
using System.Collections.Generic;
using StoryTeller;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;

namespace Samples.Fixtures
{
    public class SetsSampleFixture : Fixture
    {
        private IEnumerable<InvoiceDetail> getDetails()
        {
            return new InvoiceDetail[0];
        }

        // SAMPLE: using-cell-expression
        public IGrammar OrderedDetailsAre()
        {
            return VerifySetOf(getDetails)
                .Titled("The Ordered details should be")
                .Ordered()

                // Use this syntax if you want to customize
                // the cells in this SetVerification grammar
                .Comparisons(_ =>
                {
                    _.Compare(o => o.Amount).DefaultValue("100").Header("The Amount");

                    _.Compare(o => o.Date)

                        // Adding a selection list by display/value
                        .SelectionOptions(
                            new Option("Today", "TODAY"), 
                            new Option("Yesterday", "TODAY-1"), 
                            new Option("Tomorrow", "TODAY+1")
                        );

                    _.Compare(o => o.Name)
                        .Header("The Name")

                        // Simple value list
                        .SelectionValues("Hank", "Tom", "Alice");

                    // Simply refer to a selection list 
                    // defined elsewhere by name
                    _.Compare(o => o.Part)
                        .SelectionList("Parts");
                });
        }
        // ENDSAMPLE
    }

    // SAMPLE: sets-fixture
    public class SetsFixture : Fixture
    {
        public IGrammar UnorderedDetailsAre()
        {
            return VerifySetOf(() => _details)
                .Titled("The unordered details should be")

                // Use this shorthand syntax if you don't care about
                // cell defaults or overriding the table headers
                // in the html
                .MatchOn(o => o.Amount, o => o.Date, o => o.Name);
        }

        public IGrammar OrderedDetailsAre()
        {
            return VerifySetOf(() => _details)
                .Titled("The Ordered details should be")
                .Ordered()

                // Use this syntax if you want to customize
                // the cells in this SetVerification grammar
                .Comparisons(_ =>
                {
                    _.Compare(o => o.Amount).DefaultValue("100").Header("The Amount");
                    _.Compare(o => o.Date);
                    _.Compare(o => o.Name).Header("The Name");
                });
        }

        private readonly List<InvoiceDetail> _details = new List<InvoiceDetail>();

        // This grammar is just used to set up the actual results
        // in the specification
        public IGrammar InvoiceDetailsAre()
        {
            return CreateNewObject<InvoiceDetail>("", x =>
            {
                x.SetProperty(o => o.Amount);
                x.SetProperty(o => o.Date);
                x.SetProperty(o => o.Name);
                x.Do(d => _details.Add(d));
            })
            .AsTable("The InvoiceDetails are")
            .Before(() => _details.Clear());
        }
    }
    // ENDSAMPLE

    // SAMPLE: sets-name-list
    public class NameListFixture : Fixture
    {
        private readonly List<string> _names = new List<string>();

        public NameListFixture()
        {
            Title = "Comparing a set of names";
        }

        public IGrammar TheNamesShouldBe()
        {
            return VerifyStringList(() => _names)
                .Titled("The names in order should be", "Name")
                .Ordered();
        }

        // The two grammars below are just to set up the name list
        [Hidden]
        public void AddName(string name)
        {
            _names.Add(name);
        }

        public IGrammar TheNamesAre()
        {
            return this["AddName"]
                .AsTable("The data is")
                .Before(() => _names.Clear());
        }


    }
    // ENDSAMPLE

    // SAMPLE: set-checking-with-arrays
    public class NameArrayFixture : Fixture
    {
        public NameArrayFixture()
        {
            Title = "Comparing arrays";
        }

        [FormatAs("The array of names should be {names}")]
        public string[] TheNameArrayShouldBe()
        {
            return new string[]{"Han", "Luke", "Chewie"};
        }

        [FormatAs("The first 4 numbers in the Fibonacci sequence should be {numbers}")]
        public int[] FibonacciSeries()
        {
            return new int[] {1, 1, 2, 3};
        }
    }
    // ENDSAMPLE

    // SAMPLE: sets-invoice-detail
    public class InvoiceDetail
    {
        public double Amount { get; set; }
        public DateTime Date { get; set; }
        public string Name { get; set; }
        public string Part { get; set; }
    }
    // ENDSAMPLE
}