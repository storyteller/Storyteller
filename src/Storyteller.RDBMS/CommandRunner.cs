using System;
using System.Data;
using System.Data.Common;
using Baseline;

namespace Storyteller.RDBMS
{
    // How to get this one in?
    public class CommandRunner : IDisposable
    {


        public ISqlDialect Dialect { get; }
        private readonly IDbConnection _connection;

        public CommandRunner(string connectionString, ISqlDialect dialect)
        {
            Dialect = dialect;
            _connection = dialect.NewConnection();
            _connection.ConnectionString = connectionString;
            _connection.Open();
        }

        public IDbCommand NewCommand()
        {
            return _connection.CreateCommand();
        }

        public long RowCount(string dbObject)
        {
            return Dialect.RowCount(_connection, dbObject);
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

        public DbDataReader ExecuteReader(IDbCommand command)
        {
            // TODO -- does this need a TX too?
            command.Connection = _connection;
            return command.ExecuteReader().As<DbDataReader>();
        }



        public void Dispose()
        {
            _connection.Dispose();
        }

        public void Execute(string sql)
        {
            using (var cmd = NewCommand())
            {
                cmd.CommandText = sql;

                cmd.ExecuteNonQuery();
            }

        }
    }
}




