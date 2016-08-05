using System;
using System.Collections.Generic;
using System.IO;
using Baseline;
using StoryTeller.Model;

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

        public static Lifecycle AsLifecycle(this string text)
        {
            if (text.IsEmpty()) return Lifecycle.Acceptance;

            return (Lifecycle) Enum.Parse(typeof (Lifecycle), text);
        }
    }
}