namespace StoryTeller.RDBMS.Postgresql
{
    public abstract class PostgresqlFixture : DatabaseFixture
    {
        public PostgresqlFixture() : base(new PostgresDialect())
        {
        }
    }
}
