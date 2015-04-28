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
}

