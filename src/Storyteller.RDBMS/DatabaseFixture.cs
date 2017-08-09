using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using Baseline;
using StoryTeller.RDBMS.Sets;
using StoryTeller.Grammars;

namespace StoryTeller.RDBMS
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

        protected DatabaseOperationExpression Sql(string sql)
        {
            return new DatabaseOperationExpression(this, sql, CommandType.Text);
        }

        protected DatabaseOperationExpression Sproc(string command)
        {
            return new DatabaseOperationExpression(this, command, CommandType.StoredProcedure);
        }
        
        protected RowVerification VerifyRows(string sql)
        {
            return new RowVerification(sql);
        }

        public class DatabaseOperationExpression : IGrammarSource
        {
            private DatabaseFixture _parent;
            private readonly string _sql;
            private readonly CommandType _commandType;

            private readonly IList<Action<DbCommandGrammar>> _configurations
                = new List<Action<DbCommandGrammar>>();

            public DatabaseOperationExpression(DatabaseFixture parent, string sql, CommandType commandType)
            {
                _parent = parent;
                _sql = sql;
                _commandType = commandType;
            }

            public DatabaseOperationExpression CheckResult<T>(string cell = "result")
            {
                _configurations.Add(g => g.CheckResult<T>(cell));
                return this;
            }

            public DatabaseOperationExpression ResultAction<T>(Action<T> action)
            {
                _configurations.Add(g => g.ResultAction<T>(action));
                return this;
            }

            public DatabaseOperationExpression Format(string format)
            {
                _configurations.Add(g => g.Format(format));
                return this;
            }

            IGrammar IGrammarSource.ToGrammar(MethodInfo method, Fixture fixture)
            {
                // TODO -- will get fancier later I'm sure.
                var grammar = new DbCommandGrammar(fixture.As<DatabaseFixture>(), method, _commandType, new ExternalParameter[0], _sql);
                foreach (var configuration in _configurations)
                {
                    configuration(grammar);
                }

                return grammar;
            }
        }
    }
}
