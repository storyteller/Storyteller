using System.Linq;
using Baseline;
using HtmlTags;
using Oakton.Reporting;

namespace StorytellerDocGen.Commands
{
    public class SingleUsageTag : HtmlTag
    {
        public SingleUsageTag(UsageReport report)
            : base("div")
        {
            AddClass("single-command-usage");

            var parts = report.Usage.Split(' ');
            var command = parts.Take(2).Join(" ");
            var argsAndFlags = parts.Skip(2).Join(" ");

            Add("em").Text(command);
            Append(new LiteralTag(argsAndFlags));
        }
    }
}