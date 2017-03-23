using System.Data.Common;

namespace StoryTeller.RDBMS.CommandBuilders
{
    public class SqlCommandBuilder : IDbCommandBuilder
    {
        private readonly string _sql;

        public SqlCommandBuilder(string sql)
        {
            _sql = sql;
        }

        public DbCommand BuildCommand(CommandRunner runner)
        {
            var cmd = runner.NewCommand();
            cmd.CommandText = _sql;

            return cmd;
        }
    }
}
