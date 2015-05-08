using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class SpecTransformHandler : ITransformHandler
    {
        public string Key
        {
            get { return "spec"; }
        }

        public string Transform(Topic current, string data)
        {
            return new HtmlTag("div").Attr("data-path", data).AddClass("spec-preview").ToString();
        }
    }

    public class SpecResultTransformHandler : ITransformHandler
    {
        public string Key
        {
            get { return "spec-result"; }
        }

        public string Transform(Topic current, string data)
        {
            return new HtmlTag("div").Attr("data-path", data).AddClass("spec-result").ToString();
        }
    }
}