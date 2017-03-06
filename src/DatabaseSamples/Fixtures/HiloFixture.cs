using Storyteller.RDBMS;
using Storyteller.RDBMS.Postgresql;
using StoryTeller;

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
    }
}