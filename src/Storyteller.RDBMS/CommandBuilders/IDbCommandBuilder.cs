using System.Data.Common;

namespace StoryTeller.RDBMS.CommandBuilders
{
    public interface IDbCommandBuilder
    {
        DbCommand BuildCommand(CommandRunner runner);
    }
}
