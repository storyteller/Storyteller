using System.IO;
using System.Linq;
using Baseline;

namespace StoryTeller.CSV
{
    public class CsvFile
    {
        private readonly StringWriter _writer = new StringWriter();

        public void WriteValues(string[] values)
        {
            var line = values.Select(Escape).Join(",");
            _writer.WriteLine(line);
        }

        public static string Escape(string raw)
        {
            return raw.Contains(',') ? $"\"{raw}\"" : raw;
        }

        public override string ToString()
        {
            return _writer.ToString();
        }

        public string Contents()
        {
            return _writer.ToString();
        }

        public void WriteToFile(string path)
        {
            File.WriteAllText(path, _writer.ToString());
        }
    }
}
