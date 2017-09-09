using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using Baseline;
using StoryTeller.Model;

namespace StoryTeller.RDBMS.SqlServer
{
    public class SqlServerDialect : ISqlDialect
    {
        public IDbConnection NewConnection()
        {
            return new SqlConnection();
        }

        public ParameterCell ToParameterCell(Cell cell, ParameterDirection direction)
        {
            return new SqlServerParameterCell(cell, cell.Key, direction);
        }

        public long RowCount(IDbConnection conn, string dbObject)
        {
            using (var cmd = conn.CreateCommand().As<DbCommand>())
            {
                cmd.CommandText = "select count_big(*) from " + dbObject;
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
