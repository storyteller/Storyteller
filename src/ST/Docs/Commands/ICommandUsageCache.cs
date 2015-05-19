using FubuCore.CommandLine;

namespace ST.Docs.Commands
{
    public interface ICommandUsageCache
    {
        CommandReport ReportFor(string app, string command);
    }
}