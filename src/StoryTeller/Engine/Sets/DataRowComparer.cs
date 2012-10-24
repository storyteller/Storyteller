using System;
using System.Collections.Generic;
using System.Data;
using FubuCore;
using StoryTeller.Assertions;
using StoryTeller.Domain;

namespace StoryTeller.Engine.Sets
{
    public interface IDataRowComparer
    {
        DataColumnMatch MatchOn<T>(string columnName);
        DataColumnMatch MatchOn<T>(string columnName, Func<T, T, bool> comparer) where T : class;
    }

    public class DataRowComparer : ISetComparer, IDataRowComparer
    {
        private readonly IList<ISetColumn> _columns = new List<ISetColumn>();

        public DataColumnMatch MatchOn<T>(string columnName)
        {
            var match = new DataColumnMatch(columnName, typeof (T));
            _columns.Add(match);

            return match;
        }

        public DataColumnMatch MatchOn<T>(string columnName, Func<T, T, bool> matcher) where T : class
        {
            var match = new DataColumnMatch(columnName, typeof(T));
            match.Matcher = (one, two) => matcher(one as T, two as T);
            _columns.Add(match);

            return match;
        }

        public IEnumerable<ISetColumn> Columns
        {
            get { return _columns; } 
        }
    }

    public class DataColumnMatch : ISetColumn
    {
        private readonly string _columnName;
        private readonly Type _columnType;
        private readonly Cell _cell;

        public DataColumnMatch(string columnName, Type columnType)
        {
            _columnName = columnName;
            _columnType = columnType;

            _cell = new Cell(columnName, _columnType);
        }

        Cell ISetColumn.Cell
        {
            get 
            {
                return new Cell(_columnName, _columnType);
            } 
        }

        public DataColumnMatch Header(string header)
        {
            _cell.Header = header;
            return this;
        }

        public Func<object, object, bool> Matcher { get; set; }

        void ISetColumn.ReadExpected(ITestContext context, IStep step, SetRow row)
        {
            _cell.ReadArgument(context, step, x =>
            {
                row.Values[_columnName] = x;
            });
        }

        void ISetColumn.ReadActual(object target, SetRow row)
        {
            var dataRow = target.As<DataRow>();
            assertColumnExists(dataRow);
            
            row.Values[_columnName] = dataRow[_columnName] == DBNull.Value ? null : dataRow[_columnName];
        }

        void ISetColumn.ConfigureMatcher(RowValueMatcher matcher)
        {
            if (Matcher != null)
            {
                matcher.RegisterMatcher(_cell.Key, Matcher);
            }
        }

        private void assertColumnExists(DataRow row)
        {
            if (!row.Table.Columns.Contains(_columnName))
            {
                string message =
                    "Requested column '{0}' does not exist in this table\nThe available columns are:\n".ToFormat(
                        _columnName);
                foreach (DataColumn column in row.Table.Columns)
                {
                    message += column.ColumnName + ", ";
                }

                StoryTellerAssert.Fail(message);
            }
        }
    }
}