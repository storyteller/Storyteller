using System;
using Baseline;

namespace StoryTeller.RDBMS
{
    public static class SpecContextExtensions
    {
        public static readonly string ConnectionStringKey = "ConnectionString";

        public static void ConnectionString(this ISpecContext context, string connectionString)
        {
            context.State.Store(ConnectionStringKey, connectionString);
        }

        public static string ConnectionString(this ISpecContext context)
        {
            return context.State.TryRetrieve<string>(ConnectionStringKey);
        }

        public static CommandRunner RetrieveOrBuildCommandRunner(this ISpecContext context, ISqlDialect dialect)
        {
            var connectionString = context.ConnectionString();

            if (connectionString.IsEmpty())
            {
                throw new InvalidOperationException($"No connection string is known. Use {nameof(ISpecContext)}.{nameof(SpecContextExtensions.ConnectionString)}(connection string) in your system bootstrapping");
            }

            return context.State.RetrieveOrAdd(() => new CommandRunner(connectionString, dialect));
        }

        public static void DisposeActiveCommandRunner(this ISpecContext context)
        {
            context.State.TryRetrieve<CommandRunner>()?.Dispose();
        }
    }
}
