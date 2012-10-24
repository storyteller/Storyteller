using HtmlTags;

namespace StoryTeller.Html
{
    public class ExceptionTag : HtmlTag
    {
        public ExceptionTag(string text) : base("div")
        {
            AddClass(HtmlClasses.EXCEPTION);
            AddClass("exception-zone");
            Add("pre").Text(text);
        }

        public string ExceptionText()
        {
            return FirstChild().Text();
        }
    }
}