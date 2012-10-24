using System;
using System.Collections.Generic;
using System.Data;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class InvoiceDetail
    {
        public double Amount { get; set; }
        public DateTime Date { get; set; }
        public string Name { get; set; }
    }

    public class DataTableFixture : Fixture
    {
        private DataTable _table = new DataTable();

        public DataTableFixture()
        {
            Title = "Set Verification with DataTable's";
        }

        [Hidden]
        public void AddData(string firstName, string lastName)
        {
            _table.Rows.Add(firstName, lastName);
        }

        public IGrammar TheDataIs()
        {
            return this["AddData"].AsTable("If the data is").Before(() =>
            {
                _table = new DataTable();
                _table.Columns.Add("First", typeof (string));
                _table.Columns.Add("Last", typeof (string));
            });
        }

        public IGrammar CheckDataLiteral()
        {
            return VerifyDataTable(() => _table).Titled("The data should match").Columns(x =>
            {
                x.MatchOn<string>("First").Header("First Name");
                x.MatchOn<string>("Last").Header("Last Name");
            });
        }

        public IGrammar CheckDataSubstring()
        {
            return VerifyDataTable(() => _table).Titled("The first name should contain").Columns(x =>
            {
                x.MatchOn<string>("First", (s1, s2) => s2.Contains(s1));
            });
        }


    }

    public class SetsFixture : Fixture
    {
        private readonly List<InvoiceDetail> _details = new List<InvoiceDetail>();
        private readonly List<string> _names = new List<string>();

        public SetsFixture()
        {
            this["OrderedStringSet"] = VerifyStringList(() => _names)
                .Ordered()
                .Titled("The names in order should be")
                .Grammar();

            this["UnorderedStringSet"] = VerifyStringList(() => _names)
                .Titled("The names in no order should be")
                .Grammar();

            this["TheDataIs"] = this["AddName"]
                .AsTable("The data is", "name")
                .Before(() => _names.Clear());

            this["InvoiceDetailsAre"] = CreateNewObject<InvoiceDetail>(x =>
            {
                x.CreateNew<InvoiceDetail>();
                x.SetProperty(o => o.Amount);
                x.SetProperty(o => o.Date);
                x.SetProperty(o => o.Name);
                x.Do = d => _details.Add(d);
            }).AsTable("The InvoiceDetails are").Before(() => _details.Clear());

            this["UnorderedDetailsAre"] = VerifySetOf(() => _details)
                .Titled("The unordered details should be")
                .MatchOn(o => o.Amount, o => o.Date, o => o.Name);

            this["OrderedDetailsAre"] = VerifySetOf(() => _details)
                .Titled("The Ordered details should be")
                .Ordered()
                .MatchOn(o => o.Amount, o => o.Date, o => o.Name);
        }

        public IGrammar ThrowsErrorOnDataFetch()
        {
            return VerifySetOf<InvoiceDetail>(() => { throw new NotImplementedException(); }).MatchOn(x => x.Name);
        }

        public void AddName(string name)
        {
            _names.Add(name);
        }
    }
}