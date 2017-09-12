using System;
using Baseline;

namespace StoryTeller.RDBMS
{
    public static class SpecContextExtensions
    {
        public static readonly string ConnectionStringKey = "ConnectionString";

        /// <summary>
        /// Set the connection string to the database for this specification
        /// </summary>
        /// <param name="context"></param>
        /// <param name="connectionString"></param>
        public static void ConnectionString(this ISpecContext context, string connectionString)
        {
            context.State.Store(ConnectionStringKey, connectionString);
        }

        /// <summary>
        /// Retrieve the current connection string
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
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

            var commandRunner = context.State.TryRetrieve<CommandRunner>();
            if (commandRunner == default(CommandRunner) || commandRunner.IsConnectionDisposed)
            {
                commandRunner = new CommandRunner(connectionString, dialect);
                context.State.Store(commandRunner);
            }
            return commandRunner;
        }

        /// <summary>
        /// Shuts down any open connection using in the testing
        /// </summary>
        /// <param name="context"></param>
        public static void DisposeActiveCommandRunner(this ISpecContext context)
        {
            context.State.TryRetrieve<CommandRunner>()?.Dispose();
        }
    }
}
