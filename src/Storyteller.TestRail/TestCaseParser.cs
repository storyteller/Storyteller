using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace StoryTeller.TestRail
{
    public class TestCaseParser
    {
        public static readonly Regex TestCaseRegex = new Regex(@"([\[][Cc][0-9]+[\]])", RegexOptions.Compiled);

        public static IEnumerable<int> ParseTestCaseIds(string str)
        {
            if (str == null)
                str = "";

            MatchCollection matches = TestCaseRegex.Matches(str);
            
            foreach (Match match in matches)
            {
                if (match.Success)
                {
                    yield return Convert.ToInt32(match.Value.ToUpper().Replace("[C", string.Empty).Replace("]", string.Empty));
                }
            }
        }
    }
}
