using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace StoryTeller.Grammars.Reflection
{
    public static class ParsingExtensions
    {
        public static List<string> ParseTemplateKeys(this string template)
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
    }
}