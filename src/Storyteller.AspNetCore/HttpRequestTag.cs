using System.Linq;
using Baseline;
using Microsoft.AspNetCore.Http;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.AspNetCore
{
    public class HttpRequestTag : TableRowTag
    {
        public HttpRequestTag(HttpContext context, PerfRecord perf) 
        {
            Cell(context.Request.Path);
            Cell(context.Response.StatusCode.ToString());

            Cell(perf.Duration.ToString()).Style("text-align", "right");

            headerCell(context.Request.Headers);
            headerCell(context.Response.Headers);
        }

        private void headerCell(IHeaderDictionary headers)
        {
            var text = headers.Select(x => $"{x.Key}: {x.Value.Join(", ")}").Join(";");
            Cell(text);
        }


    }
}