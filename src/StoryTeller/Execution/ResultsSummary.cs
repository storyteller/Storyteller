using System;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Html;

namespace StoryTeller.Execution
{
    public class ResultsSummary : IResultsSummary
    {
        private HtmlDocument _document;
        private HtmlTag _table;
        private HtmlTag _tbody;

        #region IResultsSummary Members

        public void Start(string description, DateTime runningTime)
        {
            _document = new HtmlDocument();
            _document.AddStyle(HtmlClasses.CSS());
            _document.Add("h1").Text(description);

            _document.AddJavaScript(HtmlClasses.JQuery());
            _document.AddJavaScript(HtmlClasses.SummaryFilter());
            _document.Add("div").Text("Executed at {0}".ToFormat(runningTime)).AddClass(HtmlClasses.CAPTION);

            _document.Add("hr");

            // _document and _table are HtmlTag objects
            _table = _document.Add("table");
            _table.Add("thead/tr", x =>
            {
                x.Add("th").Text("Test");
                x.Add("th").Text("Lifecycle");
                x.Add("th").Text("Result");
            });

            _tbody = _table.Add("tbody");
        }

        public void AddTest(Test test, string resultsFile)
        {
            _tbody.Add("tr", x =>
            {
                x.AddClass(test.WasSuccessful() ? HtmlClasses.PASS : HtmlClasses.FAIL);

                x.Add("td").Text(test.GetPath().Locator);
                x.Add("td").Text(test.Lifecycle.ToString());
                x.Add("td")
                    .Add("a")
                    .Text(test.GetStatus())
                    .Attr("href", resultsFile);
            });
        }


        public void WriteFile(string fileName)
        {
            _document.WriteToFile(fileName);
        }

        #endregion
    }
}