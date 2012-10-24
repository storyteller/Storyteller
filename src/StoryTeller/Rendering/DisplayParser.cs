using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Rendering
{
    public class DisplayParser
    {
        private readonly IWriter _writer;

        public DisplayParser(IWriter writer)
        {
            _writer = writer;
        }

        public void Parse(string template, IStep step, IEnumerable<Cell> cells)
        {
            MatchCollection matches = Regex.Matches(template, @"\{(\w+)\}");

            List<string> keys = getKeys(matches);
            validate(template, cells, keys);

            parse(template, matches, cells, step);
        }

        public static List<string> GetKeys(string template)
        {
            MatchCollection matches = Regex.Matches(template, @"\{(\w+)\}");
            return getKeys(matches);
        }

        private static List<string> getKeys(MatchCollection matches)
        {
            var list = new List<string>();

            foreach (Match match in matches)
            {
                string templateKey = match.Groups[1].Value;
                list.Add(templateKey);
            }
            return list;
        }

        private void validate(string template, IEnumerable<Cell> cells, List<string> keys)
        {
            var errors = new ParseErrors(template);
            keys.ForEach(key =>
            {
                if (cells.FirstOrDefault(c => c.Key == key) == null)
                {
                    errors.MarkExtra(key);
                }
            });

            foreach (Cell cell in cells)
            {
                if (!keys.Contains(cell.Key))
                {
                    if (cell.IsBooleanResult()) continue;

                    errors.MarkMissing(cell.Key);
                }
            }

            errors.ThrowIfErrors();
        }


        private void parse(string template, MatchCollection matches, IEnumerable<Cell> cells, IStep step)
        {
            int lastIndex = 0;

            foreach (Match match in matches)
            {
                if (match.Index > lastIndex)
                {
                    _writer.WriteText(template.Substring(lastIndex, match.Index - lastIndex));
                }

                Cell cell = cells.FirstOrDefault(c => c.Key == match.Groups[1].Value);
                _writer.WriteCell(cell, step);

                lastIndex = match.Index + match.Length;
            }

            if (lastIndex < template.Length - 1)
            {
                _writer.WriteText(template.Substring(lastIndex, template.Length - lastIndex));
            }
        }

        public static string FirstKey(string template)
        {
            return DisplayParser.GetKeys(template).First();
        }
    }
}