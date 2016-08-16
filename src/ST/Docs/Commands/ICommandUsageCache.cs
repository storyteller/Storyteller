using Oakton;
using Oakton.Reporting;

namespace ST.Docs.Commands
{
    public interface ICommandUsageCache
    {
        CommandReport ReportFor(string app, string command);
    }
}