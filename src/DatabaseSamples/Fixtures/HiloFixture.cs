using StoryTeller.RDBMS.Postgresql;
using StoryTeller.RDBMS.Sets;
using StoryTeller;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Tables;
using StoryTeller.RDBMS;

namespace DatabaseSamples.Fixtures
{
    // SAMPLE: programmatically-connecting-to-the-database
    public class SampleDbFixture : PostgresqlFixture
    {
        public override void SetUp()
        {
            Context.ConnectionString("some connection string");
        }

        public override void TearDown()
        {
            // Clean up any active connections used by this Fixture
            Context.DisposeActiveCommandRunner();
        }
    }
    // ENDSAMPLE

    public class HiloFixture : PostgresqlFixture
    {
        public HiloFixture()
        {
            Title = "The HiLo Objects";
        }

        public override void SetUp()
        {
            WriteTrace("Deleting from mt_hilo");

            Runner.StartTransaction();

            Runner.Execute("delete from mt_hilo");
        }

        public override void TearDown()
        {
            Runner.Rollback();
        }

        // SAMPLE: NoRows
        public IGrammar NoRows()
        {
            return NoRowsIn("There should be no rows in the mt_hilo table", "public.mt_hilo");
        }
        // ENDSAMPLE

        // SAMPLE: InsertRows
        [ExposeAsTable("Insert rows into mt_hilo")]
        public IGrammarSource InsertRows(string entity, int hiValue)
        {
            return Sql("insert into mt_hilo (entity_name, hi_value) values (:entity, :hiValue)");
        }
        // ENDSAMPLE

        public IGrammarSource UglyInsertRow(string entity, int hiValue)
        {
            return Sql("insert into mt_hilo (entity_name, hi_value) values (:entity, :hiValue)");
        }

        // SAMPLE: CheckTheRows
        public RowVerification CheckTheRows()
        {
            // The Sql to be executed
            return VerifyRows("select entity_name, hi_value from mt_hilo")
                .Titled("The rows in mt_hilo should be")

                // Specify which fields in the result set to verify
                // and what the underlying .Net type is to better
                // establish equality
                .AddField<string>("entity_name")
                .AddField<long>("hi_value");

        }
        // ENDSAMPLE


        public RowVerification CheckTheRowsOrdered()
        {
            return VerifyRows("select entity_name, hi_value from mt_hilo order by entity_name")
                .Titled("The rows in mt_hilo in order should be")
                .Ordered()
                .AddField<string>("entity_name")
                .AddField<long>("hi_value");
        }

        // SAMPLE: HigherThanPage
        public RowVerification HigherThan(int page)
        {
            return VerifyRows("select entity_name from mt_hilo where hi_value > :page")
                .Titled("Entities past a certain page threshold")

                // This specifies how the sentence grammar that actually
                // executes the Sql statement will appear in the specification
                // html
                .FetchFormat("find entities where hi_value > {page}")

                // Specify which fields to verify by name and the .Net type
                // Storyteller should use to do a value comparison
                .AddField<string>("entity_name");
        }
        // ENDSAMPLE

        [FormatAs("For page size threshold {size}")]
        public void PageSize(int size)
        {
            Context.State.Store(size);
        }

        // SAMPLE: higherthanpage-with-parameter
        public RowVerification HigherThanPage()
        {
            return VerifyRows("select entity_name from mt_hilo where hi_value > :page")
                .Titled("These entities have more")

                // This specifies how the command finds the value of the
                // page parameter in the sql statement
                .Parameter("page", c => c.State.Retrieve<int>())

                .AddField<string>("entity_name");
        }
        // ENDSAMPLE


        // SAMPLE: GetNextHi
        public IGrammarSource GetNextHi(string entity)
        {
            return Sproc("mt_get_next_hi")
                // Specify how this grammar will appear within the Specification
                // HTML
                .Format("Get the next Hi value for entity {entity} should be {result}")

                // Do an assertion against the value returned from the function
                // as an integer
                .CheckResult<int>();
        }
        // ENDSAMPLE

        // SAMPLE: GetNextHiTable
        public IGrammar GetNextHiTable()
        {
            return this["GetNextHi"].AsTable("Retrieving the Next Hi Number");
        }
        // ENDSAMPLE

        public IGrammarSource UglyGetNextHi(string entity)
        {
            return Sproc("mt_get_next_hi")
                .CheckResult<int>();
        }

    }
}
