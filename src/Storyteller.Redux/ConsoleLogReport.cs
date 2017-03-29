using System.Collections.Generic;
using StoryTeller.Results;
using StoryTeller.Util;

namespace Storyteller.Redux
{
    public class ConsoleLogReport : Report
    {
        public readonly IList<string> Logs = new List<string>();
        public string ToHtml()
        {
            var div = new HtmlTag("div");

            foreach (var log in Logs)
            {
                div.Add("pre").Text(log);
                div.Add("hr");
            }

            return div.ToString();
        }

        public string Title { get; } = "console.log";
        public string ShortTitle { get; } = "console.log";
        public int Count => Logs.Count;
    }
}