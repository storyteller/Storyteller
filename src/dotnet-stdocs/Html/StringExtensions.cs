using System.Linq;
using Baseline;

namespace StorytellerDocGen.Html
{
    public static class StringExtensions
    {
        public static string RelativeUrlTo(this string currentUrl, string url)
        {
            if (currentUrl.EqualsIgnoreCase("index.htm")) return url;
            if (!currentUrl.Contains('/')) return url;

            if (currentUrl.IsEmpty() || currentUrl == "/") return url.TrimStart('/');

            var current = currentUrl.TrimStart('/');
            var contentUrl = url.TrimStart('/');

            if (current == string.Empty)
            {
                return contentUrl;
            }

            var prepend = current.Split('/').Skip(1).Select(x => "..").Join("/");
            var relativeUrl = prepend.AppendUrl(contentUrl);

            return relativeUrl;
        }
    }
}