using System;
using System.Data;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.DSL
{
    public class VerifyDataTableExpression
    {
        private readonly Func<ITestContext, DataTable> _dataSource;
        private string _description = string.Empty;
        private string _leafName = "Rows";
        private string _title = "Verify Set of Strings";

        public VerifyDataTableExpression()
        {
        }

        public VerifyDataTableExpression(Func<ITestContext, DataTable> dataSource)
        {
            _dataSource = dataSource;
        }

        public VerifyDataTableExpression Description(string description)
        {
            _description = description;
            return this;
        }

        public VerifyDataTableExpression Titled(string title)
        {
            _title = title;
            return this;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="leafName"></param>
        /// <returns></returns>
        public VerifyDataTableExpression LeafNameIs(string leafName)
        {
            _leafName = leafName;
            return this;
        }

        public SetVerificationGrammar Columns(Action<IDataRowComparer> action)
        {
            var comparer = new DataRowComparer();
            action(comparer);

            var grammar = new SetVerificationGrammar(_leafName, _title, comparer)
            {
                Description = _description
            };
            if (_dataSource != null)
            {
                grammar.Before((step, context) => { context.CurrentObject = _dataSource(context).Rows; });
            }

            return grammar;
        }
    }
}