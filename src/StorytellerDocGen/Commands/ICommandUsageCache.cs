using Oakton.Reporting;

namespace StorytellerDocGen.Commands
{
    public interface ICommandUsageCache
    {
        CommandReport ReportFor(string app, string command);
    }
}