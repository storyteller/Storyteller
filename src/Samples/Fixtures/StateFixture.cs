using System;
using System.Collections.Generic;
using Baseline;
using StoryTeller;

namespace Samples.Fixtures
{
    // SAMPLE: invoice-invoice-detail
    public class Invoice
    {
        public readonly IList<InvoiceDetail> Details
            = new List<InvoiceDetail>();
    }

    // ENDSAMPLE

    // SAMPLE: read-object-from-state
    [Hidden]
    public class InvoiceDetailFixture : Fixture
    {
        public void TheDetailIs(double amount, DateTime date, string name, string part)
        {
            // Build a new detail
            var detail = new InvoiceDetail
            {
                Amount = amount,
                Date = date,
                Name = name,
                Part = part
            };

            // Add the new detail to the current Invoice
            Context.State.Retrieve<Invoice>().Details.Add(detail);
        }

        // And many more grammars for all the optional properties of a
        // real world invoice detail
    }

    // ENDSAMPLE

    // SAMPLE: store-object-in-state
    [Hidden]
    public class InvoiceFixture : Fixture
    {
        public override void SetUp()
        {
            // The ISpecContext *is* available during SetUp()
            Context.State.Store(new Invoice());
        }

        public IGrammar AddDetail()
        {
            return Embed<InvoiceDetailFixture>("with invoice detail:");
        }
    }

    // ENDSAMPLE


    [Hidden]
    public class UsingCurrentObjectFixture : Fixture
    {
        // SAMPLE: using-current-object
        [FormatAs("When the system receives a new invoice")]
        public void WithNewInvoice()
        {
            // Other grammars, built in grammars,
            // and other fixtures can now share and
            // use *this* particular Invoice object
            CurrentObject = new Invoice();

            // The code above is just shorthand for this below:
            // Context.State.CurrentObject = new Invoice();
        }

        // ENDSAMPLE
    }

    [Hidden]
    public class UsingSpecificationFixture : Fixture
    {
        // SAMPLE: use-specification-from-fixture
        [FormatAs("Load the file {filename}")]
        public void LoadFile(string filename)
        {
            var currentDirectory = Context.Specification.Filename.ParentDirectory();
            var path = currentDirectory.AppendPath(filename);

            // do something with the file at 'path'
        }

        // ENDSAMPLE
    }
}