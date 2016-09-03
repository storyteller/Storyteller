#if NET46
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class VerifyDataTableExpression
    {
        private readonly Func<ISpecContext, DataTable> _dataSource;
        private string _description = string.Empty;
        private string _leafName = "rows";
        private string _title = "Verify Set of Strings";

        public VerifyDataTableExpression()
        {
        }

        public VerifyDataTableExpression(Func<ISpecContext, DataTable> dataSource)
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

        public SetVerificationGrammar Columns(Action<DataRowComparer> configuration)
        {
            var comparer = new DataRowComparer();
            configuration(comparer);

            var comparison = new ObjectComparison<DataRow>(c =>
            {
                var table = _dataSource(c);
                return table.ToRows().ToArray();
            });

            comparison.AddMatches(comparer.Matches);

            return new SetVerificationGrammar(_title, _leafName, comparison);
        }

        public class DataRowComparer
        {
            internal readonly IList<DataColumnMatch> Matches = new List<DataColumnMatch>(); 

            public CellModifications Column<TDataType>(string columnName)
            {
                return Column(columnName, typeof (TDataType));
            }

            public CellModifications Column(string columnName, Type columnType)
            {
                var match = new DataColumnMatch(columnName, columnType);
                Matches.Add(match);

                return match.CellModifications;
            }
        }
    }
}

#endif