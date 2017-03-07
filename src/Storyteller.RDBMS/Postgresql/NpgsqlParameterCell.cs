using System.Data;
using Baseline;
using Npgsql;
using NpgsqlTypes;
using StoryTeller.Model;

namespace Storyteller.RDBMS.Postgresql
{
    public class NpgsqlParameterCell : ParameterCell
    {
        public NpgsqlParameterCell(Cell cell, string parameterName, ParameterDirection direction, NpgsqlDbType? dbType = null)
            : base(cell, parameterName, direction)
        {
            NpgsqlDbType = dbType;
        }

        public NpgsqlDbType? NpgsqlDbType { get; }

        protected override void configureParameter(IDbDataParameter param)
        {
            if (NpgsqlDbType != null)
            {
                param.As<NpgsqlParameter>().NpgsqlDbType = NpgsqlDbType.Value;
            }
        }

        public override string ReplaceWithCellInput(string format)
        {
            return format.Replace(":" + Cell.Key, FormattedName());
        }
    }
}