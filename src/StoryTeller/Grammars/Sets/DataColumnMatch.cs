using System;
using System.Collections.Generic;
using System.Data;
using Baseline;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class DataColumnMatch : IColumnMatch
    {
        private readonly Type _columnType;

        public DataColumnMatch(string columnName, Type columnType)
        {
            Name = columnName;
            _columnType = columnType;

            CellModifications = new CellModifications();
        }

        public string Name { get; private set; }
        public object GetValue(object actual)
        {
            var dataRow = actual.As<DataRow>();
            assertColumnExists(dataRow);

            return dataRow[Name] == DBNull.Value ? null : dataRow[Name];
        }

        public Cell BuildCell(CellHandling handling, Fixture fixture)
        {
            var cell = new Cell(handling, Name, _columnType);
            CellModifications.Apply(cell);

            return cell;
        }

        public CellModifications CellModifications { get; private set; }



        private void assertColumnExists(DataRow row)
        {
            if (!row.Table.Columns.Contains(Name))
            {
                string message =
                    "Requested column '{0}' does not exist in this table\nThe available columns are:\n".ToFormat(
                        Name);
                foreach (DataColumn column in row.Table.Columns)
                {
                    message += column.ColumnName + ", ";
                }

                StoryTellerAssert.Fail(message);
            }
        }
    }

    internal static class DataTableExtensions
    {
        internal static IEnumerable<DataRow> ToRows(this DataTable table)
        {
            foreach (DataRow row in table.Rows)
            {
                yield return row;
            }
        } 
    }
}