using HtmlTags;
using Oakton.Reporting;

namespace StorytellerDocGen.Commands
{
    public class CommandSectionTag : HtmlTag
    {
        public CommandSectionTag(string applicationName, CommandReport report)
            : base("section")
        {
            AddClass("command-section");
            var h4 = Add("h4");

            h4.Add("span")
                .Text(applicationName + " " + report.Name)
                .AddClass("section-header")
                .Id(report.Name);

            h4.Add("i").AddClass("command-description").Text(report.Description);
        }
    }
}