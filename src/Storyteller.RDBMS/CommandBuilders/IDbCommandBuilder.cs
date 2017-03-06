using System.Data.Common;

namespace Storyteller.RDBMS.CommandBuilders
{
    public interface IDbCommandBuilder
    {
        DbCommand BuildCommand(CommandRunner runner);
    }
}