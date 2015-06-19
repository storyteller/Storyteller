
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using HtmlTags;

namespace StoryTeller.Results
{
    // SAMPLE: ireporter
    public interface Report
    {
        string ToHtml();
        string Title { get; }
        string ShortTitle { get; }
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
            }).ToTagList().ToHtmlString();
        }

        public string Title
        {
            get { return "Logged Exceptions in Storyteller"; }
        }

        public string ShortTitle
        {
            get { return "Exceptions"; }
        }

        public int Count
        {
            get { return _exceptions.Count; }
        }
    }
}
