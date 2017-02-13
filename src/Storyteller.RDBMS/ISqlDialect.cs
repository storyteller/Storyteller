using System.Data;
using StoryTeller.Model;

namespace Storyteller.RDBMS
{
    public interface ISqlDialect
    {
        IDbConnection NewConnection();

        ParameterCell ToParameterCell(Cell cell, ParameterDirection direction);
    }
}