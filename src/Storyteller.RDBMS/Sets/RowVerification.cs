using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using Baseline;
using Storyteller.RDBMS.CommandBuilders;
using StoryTeller;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Sets;

namespace Storyteller.RDBMS.Sets
{
    // TODO -- as sproc
    // TODO -- with parameters too
    public class RowVerification : IGrammarSource
    {
        public RowVerification(string sql)
        {
            _title = sql;
            _sql = sql;
        }
        
        private readonly IList<IField> _fields = new List<IField>();
        private string _title;
        private string _sql;
        private CommandType _commandType = CommandType.Text;
        private bool _ordered;

        public RowVerification AddField<T>(string name, int ordinal = -1)
        {
            var field = new FieldById<T>(name, ordinal);
            _fields.Add(field);

            return this;
        }

        public RowVerification AsSproc()
        {
            _commandType = CommandType.StoredProcedure;
            return this;
        }
        
        IGrammar IGrammarSource.ToGrammar(MethodInfo method, Fixture fixture)
        {
            var databaseFixture = fixture.As<DatabaseFixture>();

            SetVerificationGrammar grammar = null;

            if (method.GetParameters().Any())
            {
                throw new NotImplementedException("Not dealing with input parameters yet");
            }
            else
            {
                var comparison = new RowFieldComparison(databaseFixture, _fields.ToArray(), toCommandBuilder());
                grammar = new SetVerificationGrammar(_title, "rows", comparison);
            }

            if (_ordered)
            {
                grammar.Ordered();
            }

            return grammar;
        }

        private IDbCommandBuilder toCommandBuilder()
        {
            // TODO -- will get more complicated later
            return new SqlCommandBuilder(_sql);
        }

        public RowVerification Titled(string title)
        {
            _title = title;
            return this;
        }

        public RowVerification Ordered()
        {
            _ordered = true;
            return this;
        }
    }
}