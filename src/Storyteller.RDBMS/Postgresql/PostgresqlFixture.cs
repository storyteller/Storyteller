namespace StoryTeller.RDBMS.Postgresql
{
    // SAMPLE: PostgresqlFixture
    /// <summary>
    /// DatabaseFixture specifically for Postgresql
    /// </summary>
    public abstract class PostgresqlFixture : DatabaseFixture
    {
        public PostgresqlFixture() : base(new PostgresDialect())
        {
        }
    }
    // ENDSAMPLE
}
