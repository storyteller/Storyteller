using System.Data;
using System.Data.Common;
using Baseline;
using Npgsql;
using StoryTeller.Model;

namespace StoryTeller.RDBMS.Postgresql
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

        public long RowCount(IDbConnection conn, string dbObject)
        {
            using (var cmd = conn.CreateCommand().As<DbCommand>())
            {
                cmd.CommandText = "select count(*) from " + dbObject;
                using (var reader = cmd.ExecuteReader())
                {
                    return !reader.Read()
                        ? 0
                        : reader.GetFieldValue<long>(0);
                }
            }
        }
    }
}
