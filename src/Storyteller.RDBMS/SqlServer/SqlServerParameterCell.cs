using System.Data;
using StoryTeller.Model;

namespace StoryTeller.RDBMS.SqlServer
{
    public class SqlServerParameterCell : ParameterCell
    {
        public SqlServerParameterCell(Cell cell, string parameterName, ParameterDirection direction) : base(cell, parameterName, direction)
        {
        }

        protected override void configureParameter(IDbDataParameter param)
        {
            // Nothing yet
        }

        public override string ReplaceWithCellInput(string format)
        {
            return format.Replace("@" + Cell.Key, FormattedName());
        }
    }
}
