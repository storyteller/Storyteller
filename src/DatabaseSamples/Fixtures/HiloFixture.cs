using StoryTeller.RDBMS.Postgresql;
using StoryTeller.RDBMS.Sets;
using StoryTeller;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Tables;

namespace DatabaseSamples.Fixtures
{
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

        public IGrammar NoRows()
        {
            return NoRowsIn("There should be no rows in the mt_hilo table", "public.mt_hilo");
        }

        [ExposeAsTable("Insert rows into mt_hilo")]
        public IGrammarSource InsertRows(string entity, int hiValue)
        {
            return Sql("insert into mt_hilo (entity_name, hi_value) values (:entity, :hiValue)");
        }

        public IGrammarSource UglyInsertRow(string entity, int hiValue)
        {
            return Sql("insert into mt_hilo (entity_name, hi_value) values (:entity, :hiValue)");
        }

        public RowVerification CheckTheRows()
        {
            return VerifyRows("select entity_name, hi_value from mt_hilo")
                .Titled("The rows in mt_hilo should be")
                .AddField<string>("entity_name")
                .AddField<long>("hi_value");

        }

        public RowVerification CheckTheRowsOrdered()
        {
            return VerifyRows("select entity_name, hi_value from mt_hilo order by entity_name")
                .Titled("The rows in mt_hilo in order should be")
                .Ordered()
                .AddField<string>("entity_name")
                .AddField<long>("hi_value");
        }

        public RowVerification HigherThan(int page)
        {
            return VerifyRows("select entity_name from mt_hilo where hi_value > :page")
                .Titled("Entities past a certain page threshold")
                .FetchFormat("find entities where hi_value > {page}")
                .AddField<string>("entity_name");
        }

        public IGrammarSource GetNextHi(string entity)
        {
            return Sproc("mt_get_next_hi")
                .Format("Get the next Hi value for entity {entity} should be {result}")
                .CheckResult<int>();
        }

        public IGrammarSource UglyGetNextHi(string entity)
        {
            return Sproc("mt_get_next_hi")
                .CheckResult<int>();
        }

    }
}
