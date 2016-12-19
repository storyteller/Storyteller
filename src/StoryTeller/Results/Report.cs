
using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using HtmlTag = StoryTeller.Util.HtmlTag;

namespace StoryTeller.Results
{
    // SAMPLE: ireporter
    public interface Report
    {
        /// <summary>
        /// Creates the html representation of this report
        /// </summary>
        /// <returns></returns>
        string ToHtml();

        /// <summary>
        /// The title to display within the results tab for this report
        /// </summary>
        string Title { get; }

        /// <summary>
        /// Text to display on the tab header for this report
        /// </summary>
        string ShortTitle { get; }

        /// <summary>
        /// Count of messages or logs that this Report shows. 
        /// This report tab will be hidden if the Count = 0.
        /// </summary>
        int Count { get; }
    }
    // ENDSAMPLE

    public class ExceptionReport : Report
    {
        private readonly IList<Exception> _exceptions = new List<Exception>();

        public void Log(Exception e)
        {
            _exceptions.Add(e);
        }

        public string ToHtml()
        {
            return _exceptions.Select(x =>
            {
                return new HtmlTag("pre").Text(x.ToString()).AddClass("bg-warning");
            }).Select(x => x.ToHtmlString()).Join("");
        }

        public string Title => "Logged Exceptions in Storyteller";

        public string ShortTitle => "Exceptions";

        public int Count => _exceptions.Count;
    }
}
