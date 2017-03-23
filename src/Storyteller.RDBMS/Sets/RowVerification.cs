using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.RDBMS.CommandBuilders;
using StoryTeller.Grammars;
using StoryTeller.Grammars.Paragraphs;
using StoryTeller.Grammars.Sets;

namespace StoryTeller.RDBMS.Sets
{
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
        private string _fetchFormat;

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

            var comparison = new RowFieldComparison(databaseFixture, _fields.ToArray(), toCommandBuilder(method));
            grammar = new SetVerificationGrammar(_title, "rows", comparison);

            if (_ordered)
            {
                grammar.Ordered();
            }

            if (method.GetParameters().Any())
            {
                var line = new DbCommandGrammar(databaseFixture, method, _commandType, _sql);
                if (_fetchFormat.IsNotEmpty())
                {
                    line.Format(_fetchFormat);
                }

                line.Execution = new DbSetExecution(new BufferedReader(_fields));

                var paragraph = new ParagraphGrammar(_title);

                paragraph.Children.Add(line);
                paragraph.Children.Add(grammar);

                return paragraph;
            }

            return grammar;
        }

        private IDbCommandBuilder toCommandBuilder(MethodInfo method)
        {
            if (method.GetParameters().Any())
            {
                return null;
            }

            return new SqlCommandBuilder(_sql);
        }

        public RowVerification FetchFormat(string format)
        {
            _fetchFormat = format;

            return this;
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
