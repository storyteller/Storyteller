using System.Collections.Generic;
using System.IO;

namespace StoryTeller
{
    public static class StringExtensions
    {
        public static string EscapeIllegalChars(this string initial)
        {
            var answer = initial;
            Path.GetInvalidFileNameChars().Each(c =>
            {
                answer = answer.Replace(c.ToString(), "");
            });

            return answer;
        }
    }
}