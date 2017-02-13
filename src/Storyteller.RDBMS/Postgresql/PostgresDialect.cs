using System;
using System.Data;
using Baseline;
using Npgsql;
using NpgsqlTypes;
using StoryTeller.Model;

namespace Storyteller.RDBMS.Postgresql
{
    public class PostgresDialect : ISqlDialect
    {
        public IDbConnection NewConnection()
        {
            return new NpgsqlConnection();
        }

        public ParameterCell ToParameterCell(Cell cell, ParameterDirection direction)
        {
            return new NpgsqlParameterCell(cell, cell.Key, direction);
        }
    }

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
    }
}