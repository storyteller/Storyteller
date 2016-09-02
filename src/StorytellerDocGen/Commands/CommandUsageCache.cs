using System.IO;
using System.Linq;
using System.Xml.Serialization;
using Baseline;
using Oakton.Reporting;

namespace StorytellerDocGen.Commands
{
    public class CommandUsageCache : ICommandUsageCache
    {
        private readonly LightweightCache<string, CommandLineApplicationReport> _reports;
        private readonly DocSettings _settings;

        public CommandUsageCache(DocSettings settings)
        {
            _settings = settings;

            _reports = new LightweightCache<string, CommandLineApplicationReport>(app =>
            {
                var file = _settings.Root.AppendPath("content", app + ".usage.xml");
                if (!File.Exists(file))
                    throw new FileNotFoundException("Cannot find a command usage file for {0} at {1}".ToFormat(app, file));

                var serializer = new XmlSerializer(typeof(CommandLineApplicationReport));
                using (var reader = new StreamReader(file))
                {
                    return serializer.Deserialize(reader).As<CommandLineApplicationReport>();
                }
            });
        }

        public CommandReport ReportFor(string app, string command)
        {
            return _reports[app].Commands.FirstOrDefault(x => x.Name == command);
        }
    }
}