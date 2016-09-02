using HtmlTags;
using StorytellerDocGen.Html;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public class ScriptTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public ScriptTransformHandler(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key => "script";

        public string Transform(Topic current, string data)
        {
            var url = _urls.ToUrl(current, data);
            return new HtmlTag("script").Attr("type", "text/javascript").Attr("src", url).ToString();
        }
    }
}