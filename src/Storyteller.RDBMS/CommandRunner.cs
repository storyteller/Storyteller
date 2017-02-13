using System;
using System.Data;
using Baseline;

namespace Storyteller.RDBMS
{

    // How to get this one in?
    public class CommandRunner : IDisposable
    {
        public ISqlDialect Dialect { get; }
        private readonly IDbConnection _connection;

        public CommandRunner(ISqlDialect dialect)
        {
            Dialect = dialect;
            _connection = dialect.NewConnection();
        }

        public IDbCommand NewCommand()
        {
            return _connection.CreateCommand();
        }

        public T Execute<T>(Func<IDbConnection, T> execution)
        {
            throw new NotImplementedException();
        }

        public void Execute(IDbCommand command)
        {
            // TODO -- does this need a TX too?
            command.Connection = _connection;
            command.ExecuteNonQuery();
        }

        public T Execute<T>(IDbCommand command)
        {
            // TODO -- does this need a TX too?
            command.Connection = _connection;
            return command.ExecuteScalar().As<T>();
        }



        public void Dispose()
        {
        }
    }

    // Going to be used strictly for running a sql command with no
    // results or a return value


    // Need something that can read a method signature and decide how to




}