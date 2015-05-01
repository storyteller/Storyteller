using ST.Docs.Topics;

namespace ST.Docs.Html
{
    public class WebsiteExportUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic current, string url)
        {
            var currentUrl = current.Url;
            return currentUrl.RelativeUrlTo(url);
        }

        public string RootUrlFrom(Topic current)
        {
            return current.Url.RelativeUrlTo("/");
        }

        public string ToUrl(Topic current, Topic topic)
        {
            return current.Url.RelativeUrlTo(topic.Url);
        }
    }
}