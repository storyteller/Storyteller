using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using Npgsql;
using StoryTeller.RDBMS;
using StoryTeller;
using StoryTeller.Engine;

namespace DatabaseSamples
{
    // SAMPLE: DatabaseSystem
    public class DatabaseSystem : SimpleSystem
    {
        public static readonly string ConnectionString = "Host=localhost;Port=5432;Database=postgres;Username=postgres";


        protected override void configureCellHandling(CellHandling handling)
        {
            // Add the DatabaseExtension just to let DatabaseFixture's connect
            // to the underlying database
            handling.Extensions.Add(new DatabaseExtension(ConnectionString));
        }

        // The Warmup() hook might be a good place to set up baseline data sets or database
        // state
        public override Task Warmup()
        {
            return Task.Factory.StartNew(async () =>
            {
                var stream = GetType().GetTypeInfo().Assembly.GetManifestResourceStream("DatabaseSamples.Postgres.sql");
                var sql = stream.ReadAllText();

                using (var conn = new NpgsqlConnection(ConnectionString))
                {
                    await conn.OpenAsync();
                    var cmd = conn.CreateCommand();
                    cmd.CommandText = sql;

                    await cmd.ExecuteScalarAsync();
                }
            });


        }
    }
    // ENDSAMPLE
}
