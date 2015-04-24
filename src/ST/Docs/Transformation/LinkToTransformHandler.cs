using System;
using HtmlTags;
using ST.Docs.Html;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class LinkToTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;
        private readonly Topic _top;

        public LinkToTransformHandler(IUrlResolver urls, Topic top)
        {
            _urls = urls;
            _top = top;
        }

        public string Key
        {
            get { return "linkto"; }
        }

        public string Transform(Topic current, string data)
        {
            var other = _top.FindByKey(data);
            if (other == null) throw new ArgumentOutOfRangeException("data", "Cannot find a topic with that key");

            var url = _urls.ToUrl(other);

            return new HtmlTag("a").Attr("href", url).Text(other.Title).ToString();
        }
    }

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
            var url = _urls.ToUrl(data);
            return new HtmlTag("script").Attr("type", "text/javascript").Attr("src", url).ToString();
        }
    }

    public class StylesheetTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public StylesheetTransformHandler(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key
        {
            get { return "css"; }
        }
        public string Transform(Topic current, string data)
        {
            var url = _urls.ToUrl(data);

            return new HtmlTag("link")
                .Attr("href", url)
                .Attr("rel", "stylesheet")
                .Attr("type", "text/css")
                .ToString();
        }
    }

    public class RootUrlTransformer : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public RootUrlTransformer(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key
        {
            get { return "RootUrl"; }
        }

        public string Transform(Topic current, string data)
        {
            return _urls.RootUrlFrom(current);
        }
    }
}

