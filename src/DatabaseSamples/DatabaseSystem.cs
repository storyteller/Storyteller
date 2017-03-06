using System;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using Npgsql;
using Storyteller.RDBMS;
using StoryTeller;
using StoryTeller.Engine;

namespace DatabaseSamples
{
    public class DatabaseSystem : SimpleSystem
    {
        public static readonly string ConnectionString = "Host=localhost;Port=5432;Database=postgres;Username=postgres";


        public override void BeforeEach(SimpleExecutionContext execution, ISpecContext context)
        {
            context.ConnectionString(ConnectionString);
        }

        public override void AfterEach(ISpecContext context)
        {
            context.DisposeActiveCommandRunner();
        }

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
}