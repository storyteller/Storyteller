using System.Data;
using StoryTeller.Model;

namespace StoryTeller.RDBMS.SqlServer
{
    // SAMPLE: SqlServerParameterCell
    public class SqlServerParameterCell : ParameterCell
    {
        public SqlServerParameterCell(Cell cell, string parameterName, ParameterDirection direction) : base(cell, parameterName, direction)
        {
        }

        protected override void configureParameter(IDbDataParameter param)
        {
            // Nothing to do here for Sql Server
        }

        public override string ReplaceWithCellInput(string format)
        {
            // A parameter named "foo" would be referred to as
            // @foo in sql commands
            return format.Replace("@" + Cell.Key, FormattedName());
        }
    }
    // ENDSAMPLE
}
