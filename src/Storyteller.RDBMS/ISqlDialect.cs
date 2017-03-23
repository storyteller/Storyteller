using System.Data;
using StoryTeller.Model;

namespace StoryTeller.RDBMS
{
    public interface ISqlDialect
    {
        IDbConnection NewConnection();

        ParameterCell ToParameterCell(Cell cell, ParameterDirection direction);
        long RowCount(IDbConnection conn, string dbObject);
    }
}
