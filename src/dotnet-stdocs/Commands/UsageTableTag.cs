using Baseline;
using HtmlTags;
using Oakton.Reporting;

namespace StorytellerDocGen.Commands
{
    public class UsageTableTag : TableTag
    {
        public UsageTableTag(CommandReport report)
        {
            AddClass("table");
            AddClass("usages-table");
            AddHeaderRow(tr => tr.Header("Usages").Attr("colspan", 2));

            report.Usages.Each(x =>
            {
                AddBodyRow(tr =>
                {
                    tr.Cell(x.Description);
                    tr.Cell(x.Usage).AddClass("command-usage");
                });
            });
        }
    }
}