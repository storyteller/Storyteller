using System.Data;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine.Sets
{
    [TestFixture]
    public class DataRowSetTesting
    {
        [Test]
        public void run_a_test_with_a_fixture_defined_with_a_grammar_that_does_not_have_before_steps_that_does_not_match
            ()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <DataTable2>
        <CheckData1>
            <Rows>
                <Row City = 'Austin' StateOrProvince = 'TX' Distance='16'/>
                <Row City = 'Jasper' StateOrProvince = 'MO' Distance='589' />
                <Row City = 'Bentonville' StateOrProvince = 'AR' Distance='523' />
                <Row City = 'Grove' StateOrProvince = 'OK' Distance='540' />
            </Rows>
        </CheckData1>
    </DataTable2>
</Test>
");

            test.LastResult.Counts.ShouldEqual(4, 1, 0, 0);
        }


        [Test]
        public void
            run_a_test_with_a_fixture_defined_with_a_grammar_that_does_not_have_before_steps_that_does_not_match_2()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <DataTable2>
        <CheckData1>
            <Rows>
                <Row City = 'Austin' StateOrProvince = 'TX' Distance='16'/>
                <Row City = 'Jasper' StateOrProvince = 'KS' Distance='589' />
                <Row City = 'Bentonville' StateOrProvince = 'AR' Distance='523' />
                <Row City = 'Grove' StateOrProvince = 'OK' Distance='540' />
                <Row City = 'Miami' StateOrProvince = 'OK' Distance='545' />
            </Rows>
        </CheckData1>
    </DataTable2>
</Test>
");
            test.LastResult.Counts.ShouldEqual(3, 4, 0, 0);
        }

        [Test]
        public void run_a_test_with_a_fixture_defined_with_a_grammar_that_has_before_steps()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <DataTable2>
        <CheckData1>
            <Rows>
                <Row City = 'Austin' StateOrProvince = 'TX' Distance='16'/>
                <Row City = 'Jasper' StateOrProvince = 'MO' Distance='589' />
                <Row City = 'Bentonville' StateOrProvince = 'AR' Distance='523' />
                <Row City = 'Grove' StateOrProvince = 'OK' Distance='540' />
                <Row City = 'Georgetown' StateOrProvince = 'TX' Distance='32' />
            </Rows>
        </CheckData1>
    </DataTable2>
</Test>
");

            test.LastResult.Counts.ShouldEqual(5, 0, 0, 0);
        }

        [Test]
        public void run_a_test_with_a_fixture_defined_with_a_grammar_that_has_before_steps_that_does_not_match()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='something'>
    <DataTable2>
        <CheckData1>
            <Rows>
                <Row City = 'Austin' StateOrProvince = 'TX' Distance='16'/>
                <Row City = 'Jasper' StateOrProvince = 'MO' Distance='589' />
                <Row City = 'Bentonville' StateOrProvince = 'AR' Distance='523' />
                <Row City = 'Grove' StateOrProvince = 'OK' Distance='540' />
                <Row City = 'Georgetown' StateOrProvince = 'TX' Distance='32' />
            </Rows>
        </CheckData1>
    </DataTable2>
</Test>
");

            test.LastResult.Counts.ShouldEqual(5, 0, 0, 0);
        }
    }

    public class DataTable2Fixture : Fixture
    {
        public DataTable2Fixture()
        {
            this["CheckData1"] = VerifyDataTable(c => LoadData())
                .Titled("Check the address data")
                .Columns(x => {
                    x.MatchOn<string>("City");
                    x.MatchOn<string>("StateOrProvince");
                    x.MatchOn<int>("Distance");
                });
        }

        public DataTable LoadData()
        {
            var table = new DataTable();
            table.Columns.Add("City", typeof (string));
            table.Columns.Add("StateOrProvince", typeof (string));
            table.Columns.Add("Distance", typeof (int));

            table.Rows.Add("Austin", "TX", 16);
            table.Rows.Add("Jasper", "MO", 589);
            table.Rows.Add("Bentonville", "AR", 523);
            table.Rows.Add("Grove", "OK", 540);
            table.Rows.Add("Georgetown", "TX", 32);

            return table;
        }
    }
}