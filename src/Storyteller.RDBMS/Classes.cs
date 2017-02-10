using System;
using System.Data;
using System.Threading.Tasks;
using Baseline;

namespace Storyteller.RDBMS
{


    // How to get this one into the testing engine?
    public interface ISqlDialect
    {
        IDbConnection NewConnection();

        DbType DbTypeFor(Type type);


        string AliasParameter(string cellKey);
    }

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

    public class Command
    {

        // If no set to check, just execute this
        public Command(CommandType commandType, string sql)
        {
        }

        // Mark whether or not you need to check a set
        public Command VerifySetOf<T>()
        {
            throw new NotImplementedException();
        }

        public Command VerifyReturn<T>()
        {
            throw new NotImplementedException();
        }



    }


}