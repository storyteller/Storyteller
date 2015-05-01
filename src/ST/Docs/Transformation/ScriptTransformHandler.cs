using HtmlTags;
using ST.Docs.Html;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class ScriptTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public ScriptTransformHandler(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key
        {
            get { return "script"; }
        }

        public string Transform(Topic current, string data)
        {
            var url = _urls.ToUrl(current, data);
            return new HtmlTag("script").Attr("type", "text/javascript").Attr("src", url).ToString();
        }
    }
}