using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Storyteller.TestRail.Integrations.TestRail
{
    public class TestCaseParser
    {
        private static readonly Regex _testCaseRegex = new Regex("([Cc][0-9]+)", RegexOptions.Compiled);

        public static IEnumerable<int> ParseTestCaseIds(string str)
        {
            MatchCollection matches = _testCaseRegex.Matches(str);
            
            foreach (Match match in matches)
            {
                if (match.Success)
                {
                    yield return Convert.ToInt32(match.Value.ToUpper().Replace("C", string.Empty));
                }
            }
        }
    }
}
