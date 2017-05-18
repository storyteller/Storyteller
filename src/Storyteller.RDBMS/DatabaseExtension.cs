using System.Threading.Tasks;

namespace StoryTeller.RDBMS
{
    /// <summary>
    /// Simplistic extension just to manage the lifecycle of the
    /// command runner within DatabaseFixture's
    /// </summary>
    public class DatabaseExtension : IExtension
    {
        private readonly string _connectionString;

        public DatabaseExtension(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Dispose()
        {
            // Nothing
        }

        public Task Start()
        {
            return Task.CompletedTask;
        }

        public void BeforeEach(ISpecContext context)
        {
            context.ConnectionString(_connectionString);
        }

        public void AfterEach(ISpecContext context)
        {
            context.DisposeActiveCommandRunner();
        }
    }
}
