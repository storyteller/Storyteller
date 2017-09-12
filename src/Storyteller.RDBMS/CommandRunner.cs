using System;
using System.Data;
using System.Data.Common;
using Baseline;

namespace StoryTeller.RDBMS
{
    // How to get this one in?
    public class CommandRunner : IDisposable
    {
        private DbTransaction _activeTransaction;

        public ISqlDialect Dialect { get; }
        private readonly IDbConnection _connection;
        public bool IsConnectionDisposed { get; protected set; } = false;

        public CommandRunner(string connectionString, ISqlDialect dialect)
        {
            Dialect = dialect;
            _connection = dialect.NewConnection();
            _connection.ConnectionString = connectionString;
            _connection.Open();
        }

        public void StartTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted)
        {
            _activeTransaction = _connection.BeginTransaction(isolationLevel).As<DbTransaction>();
        }

        public DbCommand NewCommand()
        {
            return _connection.CreateCommand().As<DbCommand>();
        }

        public long RowCount(string dbObject)
        {
            return Dialect.RowCount(_connection, dbObject);
        }

        public void Execute(IDbCommand command)
        {
            if (_activeTransaction != null) command.Transaction = _activeTransaction;
            command.Connection = _connection;
            command.ExecuteNonQuery();
        }

        public T Execute<T>(IDbCommand command)
        {
            if (_activeTransaction != null) command.Transaction = _activeTransaction;
            command.Connection = _connection;
            return command.ExecuteScalar().As<T>();
        }

        public DbDataReader ExecuteReader(IDbCommand command)
        {
            if (_activeTransaction != null) command.Transaction = _activeTransaction;
            command.Connection = _connection;
            return command.ExecuteReader().As<DbDataReader>();
        }

        public bool IsInTransaction()
        {
            return _activeTransaction != null;
        }

        public void Rollback()
        {
            _activeTransaction?.Rollback();
            _activeTransaction = null;
        }

        public void Commit()
        {
            _activeTransaction?.Commit();
            _activeTransaction = null;
        }

        public void Dispose()
        {
            if (_activeTransaction != null)
            {
                _activeTransaction.Rollback();
                _activeTransaction.Dispose();
            }
            _connection.Dispose();
            IsConnectionDisposed = true;
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




