namespace StoryTeller.RDBMS.SqlServer
{
    // SAMPLE: SqlServerFixture
    /// <summary>
    /// DatabaseFixture specifically for Sql Server
    /// </summary>
    public abstract class SqlServerFixture : DatabaseFixture
    {
        protected SqlServerFixture() : base(new SqlServerDialect())
        {
        }
    }
    // ENDSAMPLE
}
