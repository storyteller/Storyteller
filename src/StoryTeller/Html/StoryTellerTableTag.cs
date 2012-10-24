using System;
using System.Collections.Generic;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using StoryTeller.Model;
using FubuCore;
using System.Linq;

namespace StoryTeller.Html
{



    public class StoryTellerTableTag : TableTag
    {
        private readonly IStep _step;
        private readonly Table _table;
        private TableRowTag _headerRow;
        private Table.TableWriter _writer;

        public StoryTellerTableTag(Table table, IStep step)
        {
            AddClass("table");
            this.AddSafeClassName(table.GetType().Name.ToLower());

            _table = table;
            _step = step;

            _writer = table.GetWriter(_step);

            Attr("cellpadding", "0").Attr("cellspacing", "0");

            AddHeaderRow(x =>
            {
                _headerRow = x;

                _writer.DisplayCells.Each(cell => x.Header(cell.Header));
            });
        }

        private IEnumerable<IStep> rows()
        {
            return _table.GetLeaf(_step).AllSteps();
        }

        public void WritePreview(ITestContext context)
        {
            rows().Each(row => { writePreviewRow(row, context); });
        }

        private void writePreviewRow(IStep step, ITestContext context)
        {
            AddBodyRow(row =>
            {
                _writer.DisplayCells.Each(cell =>
                {
                    var tag = new CellTag(cell, step);
                    tag.WritePreview(context);

                    row.Cell().Append(tag);
                });

                row.FirstChild().AddClass("left-cell");
            });
        }

        public void WriteResults(ITestContext context)
        {
            context.ResultsFor(_step).ForExceptionText(writeExceptionText);

            rows().Each(row => writeResultsRow(row, context));

            _headerRow.FirstChild().AddClass("left-cell");
        }

        private void writeResultsRow(IStep step, ITestContext context)
        {
            AddBodyRow(row =>
            {
                StepResults results = context.ResultsFor(step);
                results.Collapse();

                _writer.DisplayCells.Each(cell =>
                {
                    
                    var tag = new CellTag(cell, step);
                    tag.TagName("td");
                    row.Append(tag);

                    tag.WriteResults(results, context);
                });

                row.FirstChild().AddClass("left-cell");

                results.ForExceptionText(writeExceptionText);
            });
        }

        public void WriteSetVerificationResults(SetVerification verification, ITestContext context)
        {
            if (verification.Ordered)
            {
                _headerRow.InsertFirst(new HtmlTag("th").Text("Order"));
            }

            var results = context.ResultsFor(_step);
            results.ForExceptionText(writeExceptionText);

            var rows = results.GetResult<IList<SetRow>>(_table.LeafName) ?? new List<SetRow>();
            // TODO -- order this the right way

            rows.Each(x =>
            {
                writeVerificationResultRow(x, context, verification.Ordered);
            });

            _headerRow.FirstChild().AddClass("left-cell");
        }

        private void writeVerificationResultRow(SetRow setRow, ITestContext context, bool ordered)
        {
            AddBodyRow(row =>
            {
                if (ordered)
                {
                    row.Cell(setRow.ActualOrder == 0 ? string.Empty : setRow.ActualOrder.ToString());
                }

                _table.Cells.Each(cell =>
                {
                    var display = context.GetDisplay(setRow.Values[cell.Key]);
                    row.Cell(display);
                });

                switch (setRow.Result)
                {
                    case SetMatch.Match:
                        row.AddClass(HtmlClasses.PASS);

                        break;

                    case SetMatch.Extra:
                        row.AddClass(HtmlClasses.FAIL);
                        var firstChild = row.FirstChild();
                        firstChild.Text("Extra:  " + firstChild.Text());
                        break;

                    case SetMatch.Missing:
                        row.AddClass(HtmlClasses.FAIL);
                        var tag = row.FirstChild();
                        tag.Text("Missing:  " + tag.Text());
                        break;

                    case SetMatch.OutOfOrder:
                        row.AddClass(HtmlClasses.FAIL);
                        
                        string text = "Expected {0} but was {1}".ToFormat(setRow.ExpectedOrder, setRow.ActualOrder);
                        row.FirstChild().Text(text);
                        break;
                }

                row.FirstChild().AddClass("left-cell");
            });

            if (setRow.Step != null)
            {
                context.ResultsFor(setRow.Step).ForExceptionText(writeExceptionText);
            }
        }

        private void writeExceptionText(string text)
        {
            AddBodyRow(row =>
            {
                var exceptionTag = new ExceptionTag(text);
                int colSpan = _headerRow.Children.Count;
                row.Cell()
                    .Attr("colspan", colSpan).AddClass(HtmlClasses.EXCEPTION).AddClass("exception-cell")
                    .Append(exceptionTag);
            });
        }
    }
}