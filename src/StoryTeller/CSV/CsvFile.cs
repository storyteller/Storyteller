using System.IO;
using System.Linq;
using Baseline;
using StoryTeller.Grammars.API;

namespace StoryTeller.CSV
{
    public class CsvFile
    {
        private readonly StringWriter _writer = new StringWriter();

        public void WriteValues(params string[] values)
        {
            var line = values.Select(Escape).Join(",");
            _writer.WriteLine(line);
        }

        public static string Escape(string raw)
        {
            var shouldBeEscaped = raw.Contains(",") || raw.Contains("\"");

            if (shouldBeEscaped)
            {
                var escaped = raw.Replace("\"", "\"\"");
                return $"\"{escaped}\"";
            }

            return raw;
            


        }

        public override string ToString()
        {
            return _writer.ToString();
        }

        /// <summary>
        /// Generated string for the Csv content
        /// </summary>
        /// <returns></returns>
        public string Contents()
        {
            return _writer.ToString();
        }

        /// <summary>
        /// Write the generated contents of this CsvFile to the file system
        /// </summary>
        /// <param name="path"></param>
        public void WriteToFile(string path)
        {
            File.WriteAllText(path, _writer.ToString());
        }
    }
}
