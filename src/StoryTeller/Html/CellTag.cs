using System;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Html
{
    public class CellTag : HtmlTag
    {
        private readonly Cell _cell;
        private readonly IStep _step;

        public CellTag(Cell cell, IStep step)
            : base("span")
        {
            if (step == null) throw new ArgumentNullException("step");

            _cell = cell;
            _step = step;

            AddClass(HtmlClasses.INPUT);

            if (cell.DefaultValue.IsNotEmpty())
            {
                MetaData("defaultValue", cell.DefaultValue);
            }
        }

        public void WritePreview(ITestContext context)
        {
            string display = _cell.GetDisplay(_step);
            Text(context.GetDisplay(display));
        }

        public void WriteResults(StepResults results, ITestContext context)
        {
            if (!_cell.IsResult)
            {
                WritePreview(context);

                if (results.IsInException(_cell.Key))
                {
                    AddClass(HtmlClasses.EXCEPTION);
                }

                return;
            }

            var expected = _step.Get(_cell.Key);
            if (results.IsInException(_cell.Key))
            {
                Text(expected);
                AddClass(HtmlClasses.EXCEPTION);

                return;
            }

            bool hasResult = results.HasActual(_cell.Key);
            if (!hasResult)
            {
                Text("{0} (no result)".ToFormat(expected));
                AddClass(HtmlClasses.EXCEPTION);
                return;
            }

            var actual = results.GetActual(_cell.Key);

            if (results.IsFailure(_cell.Key))
            {
                string text = "{0}, but was '{1}'".ToFormat(expected, actual);
                Text(text);
                AddClass(HtmlClasses.FAIL);
            }
            else
            {
                Text(context.GetDisplay(actual));
                AddClass(HtmlClasses.PASS);
            }
        }
    }
}