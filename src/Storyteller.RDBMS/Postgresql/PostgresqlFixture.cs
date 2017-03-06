namespace Storyteller.RDBMS.Postgresql
{
    public class PostgresqlFixture : DatabaseFixture
    {
        public PostgresqlFixture() : base(new PostgresDialect())
        {
        }
    }
}