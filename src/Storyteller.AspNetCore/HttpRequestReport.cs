using Microsoft.AspNetCore.Http;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.AspNetCore
{
    public class HttpRequestReport : Report
    {
        private readonly TableTag _table = new TableTag();

        public HttpRequestReport()
        {
            _table.AddClass("table");

            _table.AddHeaderRow(row =>
            {
                row.Header("Url");
                row.Header("Status Code");
                row.Header("Duration");
                row.Header("Request Headers");
                row.Header("Response Headers");
            });
        }

        public string ToHtml()
        {
            return _table.ToString();
        }

        public void Record(HttpContext context, PerfRecord perf)
        {
            _table.TBody.Append(new HttpRequestTag(context, perf));
        }

        public string Title { get; } = "Http Requests";
        public string ShortTitle { get; } = "Http Requests";
        public int Count => _table.TBody.Children.Count;
    }
}