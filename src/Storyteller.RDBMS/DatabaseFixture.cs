using System;
using System.Data;
using StoryTeller;
using StoryTeller.Grammars;

namespace Storyteller.RDBMS
{


    public class DatabaseFixture : Fixture
    {
        public ISqlDialect Dialect { get; }

        public CommandRunner Runner
        {
            get
            {
                if (Context == null) throw new InvalidOperationException("Cannot use this method except during Spec execution");

                return Context.RetrieveOrBuildCommandRunner(Dialect);
            }
        }

        public DatabaseFixture(ISqlDialect dialect)
        {
            Dialect = dialect;
        }

        protected IGrammar NoRowsIn(string title, string dbObject)
        {
            return new NoRowsGrammar(title, dbObject);
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

    public class NoRowsGrammar : FactGrammar
    {
        public static Func<ISpecContext, bool> Test(string dbObject)
        {
            return c =>
            {
                var runner = c.State.Retrieve<CommandRunner>();


                var rowCount = runner.RowCount(dbObject);
                StoryTellerAssert.Fail(rowCount > 0, $"Found {rowCount} rows, but expected 0");

                return rowCount == 0;
            };
        }

        public NoRowsGrammar(string title, string dbObject) : base(title, Test(dbObject))
        {

        }
    }
}