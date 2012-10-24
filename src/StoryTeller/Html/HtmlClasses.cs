using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text.RegularExpressions;
using HtmlTags;

namespace StoryTeller.Html
{
    public static class HtmlClasses
    {
        public static readonly string CAPTION = "caption";
        public static readonly string COMMENT = "Comment";
        public static readonly string COMPOUND_HOLDER = "compoundHolder";
        public static readonly string CONTAINER = "container";
        public static readonly string EXCEPTION = "exception";
        public static readonly string FAIL = "fail";
        public static readonly string GRID = "grid";
        public static readonly string INPUT = "input";
        public static readonly string PASS = "pass";
        public static readonly string SECTION = "section";
        public static readonly string SECTION_TITLE = "section-title";
        public static readonly string TEST_EDITOR = "test-editor";
        public static readonly string TAGS = "TestTags";
        public static readonly string TEST_NAME = "testName";
        public static readonly string STEP_HOLDER = "step-holder";

        public static string GetResourceFileContents(string resourceName)
        {
            Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof (HtmlClasses), resourceName);
            var reader = new StreamReader(stream);

            return reader.ReadToEnd();
        }

        public static string CSS()
        {
            return GetResourceFileContents("style.css");
        }

        public static string JQuery()
        {
            return GetResourceFileContents("jquery.js");
        }

        public static string SummaryFilter()
        {
            return GetResourceFileContents("summaryFilter.js");
        }

        public static HtmlTag AddSafeClassName(this HtmlTag tag, string unsafeClassName)
        {
            return tag.AddClass(CssClassNameValidator.SanitizeClassName(unsafeClassName));
        }

        public static HtmlTag Pre(this HtmlTag tag, string text)
        {
            tag.Add("pre").Text(text);
            return tag;
        }

        public static HtmlTag Span(this HtmlTag tag, string text, params string[] classes)
        {
            HtmlTag span = tag.Add("span").Text(text);

            classes.Each(x => span.AddSafeClassName(x));

            return tag;
        }

        public static HtmlTag Divider(this HtmlTag tag)
        {
            tag.Add("hr");
            return tag;
        }
    }
}