using System.Collections.Generic;
using StoryTeller.Results;
using StoryTeller.Util;

namespace Storyteller.Redux
{
    public class JavascriptErrors : Report
    {
        public readonly IList<string> Errors = new List<string>();
        public string ToHtml()
        {
            var div = new HtmlTag("div");

            foreach (var log in Errors)
            {
                div.Add("pre").AddClass("bg-warning").Text(log);
            }

            return div.ToString();
        }

        public string Title { get; } = "Javascript Errors";
        public string ShortTitle { get; } = "JS Errors";
        public int Count => Errors.Count;
    }
}