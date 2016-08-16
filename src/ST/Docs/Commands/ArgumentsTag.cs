using System.Collections.Generic;
using Baseline;
using Oakton;
using HtmlTags;
using Oakton.Reporting;

namespace ST.Docs.Commands
{
    public class ArgumentsTag : TableTag
    {
        public ArgumentsTag(CommandReport report)
        {
            AddClass("table");
            AddHeaderRow(tr => tr.Header("Arguments").Attr("colspan", 2));

            report.Arguments.Each(x =>
            {
                AddBodyRow(tr =>
                {
                    tr.Cell(x.Name).AddClass("command-arg-name");
                    tr.Cell(x.Description).AddClass("command-arg-description");
                });
            });
        }
    }
}