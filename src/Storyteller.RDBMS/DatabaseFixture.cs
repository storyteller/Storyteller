using StoryTeller;

namespace Storyteller.RDBMS
{
    public class DatabaseFixture : Fixture
    {
        public ISqlDialect Dialect { get; }

        public CommandRunner Runner
        {
            get
            {
                return Context == null
                    ? new CommandRunner(Dialect)
                    : Context.State.RetrieveOrAdd(() => new CommandRunner(Dialect));
            }
        }

        public DatabaseFixture(ISqlDialect dialect)
        {
            Dialect = dialect;
        }
    }
}