using System.Collections.Generic;
using System.Diagnostics;
using System.IO;

namespace Storyteller.Core
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