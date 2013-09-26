using System.Windows.Forms.VisualStyles;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Html;

namespace StoryTeller.Execution
{
    public class PreviewSummary : HtmlDocument
    {
        private readonly TableTag _table;


        public PreviewSummary(string title)
        {
            Title = title;

            Body.Style("margin", "30px");

            AddStyle(HtmlClasses.CSS());
            Add("h1").Text(title);

            Add("hr");

            _table = new TableTag();
            _table.AddClass("summary-table");
            Add(_table);

            _table.AddHeaderRow(row => {
                row.Header("Name");
                row.Header("Suite");
                row.Header("Lifecycle");
            });
        }

        public void AddTest(Test test, string relativePath)
        {
            _table.AddBodyRow(row => {
                row.Cell().Add("a").Attr("href", relativePath).Text(test.Name);

                row.Cell(test.SuiteName);
                
                row.Cell(test.Lifecycle.ToString());
            });
        }
    }
}