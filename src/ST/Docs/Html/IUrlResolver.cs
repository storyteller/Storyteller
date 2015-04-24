using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuMVC.Core.Http;
using ST.Docs.Topics;

namespace ST.Docs.Html
{
    public interface IUrlResolver
    {
        string ToUrl(Topic topic);
        string ToUrl(string url);
        string RootUrlFrom(Topic current);
    }

    public class AbsoluteUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic topic)
        {
            return "/" + topic.Url;
        }

        public string ToUrl(string url)
        {
            if (url.StartsWith("/")) return url;

            return "/" + url;
        }

        public string RootUrlFrom(Topic current)
        {
            return "/";
        }
    }

    public class RelativeUrlResolver : IUrlResolver
    {
        private readonly IHttpRequest _request;

        public RelativeUrlResolver(IHttpRequest request)
        {
            _request = request;
        }

        public string ToUrl(string url)
        {
            throw new System.NotImplementedException();
        }

        public string RootUrlFrom(Topic current)
        {
            throw new System.NotImplementedException();
        }

        public string ToUrl(Topic topic)
        {
            var url = topic.Url;
            var requestUrl = _request.RelativeUrl();
            if (requestUrl.IsEmpty() || requestUrl == "/") return url.TrimStart('/');

            var current = requestUrl.TrimStart('/');
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

    public class FileExportUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic topic)
        {
            throw new System.NotImplementedException();
        }

        public string ToUrl(string url)
        {
            throw new System.NotImplementedException();
        }

        public string RootUrlFrom(Topic current)
        {
            throw new System.NotImplementedException();
        }
    }
}