using System.Linq;
using StorytellerDocGen.Topics;
using StorytellerDocGen.Transformation;

namespace StorytellerDocGen.Commands
{
    public class CommandUsageHeaderTransformHandler : ITransformHandler
    {
        private readonly ICommandUsageCache _cache;

        public CommandUsageHeaderTransformHandler(ICommandUsageCache cache)
        {
            _cache = cache;
        }

        public string Key
        {
            get { return "command-usage"; }
        }

        public string Transform(Topic current, string data)
        {
            var parts = data.Split('/');
            var app = parts.First();
            var command = parts.Last();

            var report = _cache.ReportFor(app, command);

            return new CommandSectionTag(app, report).ToString();
        }
    }
}