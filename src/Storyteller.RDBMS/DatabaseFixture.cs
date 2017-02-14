using System;
using System.Data;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;

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

        public CommandExpression Sproc(string function)
        {
            return new CommandExpression(CommandType.StoredProcedure, function);
        }

        public CommandExpression Sql(string sql)
        {
            return new CommandExpression(CommandType.Text, sql);
        }

        public class CommandExpression
        {
            private readonly CommandType _commandType;
            private readonly string _sql;

            public CommandExpression(CommandType commandType, string sql)
            {
                _commandType = commandType;
                _sql = sql;
            }

            public IGrammar Execute()
            {
                return new DbCommandGrammar(_commandType, _sql);
            }

            public IGrammar CheckReturn<T>(string cell = "result")
            {
                throw new NotImplementedException();
            }
        }


    }

    public class CheckResultExecution<T> : ICommandExecution
    {
        public string Key { get; }

        public CheckResultExecution(string key = "result")
        {
            Key = key;
        }

        public Cell[] ToCells(CellHandling cellHandling, Fixture fixture)
        {
            return new Cell[]{new Cell(cellHandling, Key, typeof(T)), };
        }

        public void Execute(IDbCommand command, CommandRunner runner, StepValues values, ISpecContext context)
        {
            // Check the actual here.
            throw new NotImplementedException();
        }
    }
}