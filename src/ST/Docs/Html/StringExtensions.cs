using System.Collections.Generic;
using System.Linq;
using FubuCore;

namespace ST.Docs.Html
{
    public static class StringExtensions
    {
        public static string RelativeUrlTo(this string currentUrl, string url)
        {
            if (currentUrl.IsEmpty() || currentUrl == "/") return url.TrimStart('/');

            var current = currentUrl.TrimStart('/');
            var contentUrl = url.TrimStart('/');

            if (current == string.Empty)
            {
                return contentUrl;
            }

            var prepend = current.Split('/').Select(x => "..").Join("/");
            var relativeUrl = prepend.AppendUrl(contentUrl);

            return relativeUrl;
        }
    }
}