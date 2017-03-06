using Storyteller.RDBMS;
using Storyteller.RDBMS.Postgresql;
using Storyteller.RDBMS.Sets;
using StoryTeller;
using StoryTeller.Grammars;

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
            Runner.Execute("delete from mt_hilo");
        }

        public IGrammar NoRows()
        {
            return NoRowsIn("There should be no rows in the mt_hilo table", "public.mt_hilo");
        }



        public RowVerification CheckTheRows()
        {
            return VerifyRows("select entity_name, hi_value from mt_hilo")
                .Titled("The rows in mt_hilo should be")
                .AddField<string>("entity_name")
                .AddField<long>("hi_value");

        }

        public IGrammarSource GetNextHi(string entity)
        {
            return Sproc("mt_get_next_hi")
                .Format("Get the next Hi value for entity {entity} should be {result}")
                .CheckResult<int>();
        }

    }
}