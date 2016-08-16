using System;
using System.Linq;
using Baseline;
using HtmlTags;
using ST.Docs.Html;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class LinkToTransformHandler : ITransformHandler
    {
        public static readonly string Template = new HtmlTag("a").Attr("href", "{href}").Text("{title}").ToString();

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
            var props = data.Split(';');
            var key = props.First();

            

            try
            {
                var other = findOther(current, key);
                if (other == null) return string.Empty;

                return transformFromTopic(current, other, props);
            }
            catch (ArgumentOutOfRangeException)
            {
                var tag = new HtmlTag("p").AddClass("bg-warning").Style("padding", "5px");
                tag.Add("b").Text("Unknown topic key '{0}'".ToFormat(key));
                tag.Add("small").Text(" -- CTRL+SHIFT+R to force refresh the topic tree");
                return tag.ToString();
            }
        }

        private string transformFromTopic(Topic current, Topic other, string[] props)
        {
            var url = _urls.ToUrl(current, other);

            var title = other.Title;
            var template = Template;

            for (int i = 1; i < props.Length; i++)
            {
                if (props[i].StartsWith("title=", StringComparison.InvariantCulture))
                {
                    title = props[i].Split('=').Last().Trim();
                }
                else
                {
                    template = props[i];
                }
            }

            return template.Replace("{href}", url).Replace("{title}", title);
        }

        private Topic findOther(Topic current, string key)
        {
            if (key.EqualsIgnoreCase("{next}"))
            {
                return current.FindNext();
            }

            if (key.EqualsIgnoreCase("{previous}"))
            {
                return current.FindPrevious();
            }

            var topic = _top.FindByKey(key);
            if (topic == null)
            {
                throw new ArgumentOutOfRangeException("key", "Cannot find a topic with key '{0}'".ToFormat(key));
            }

            return topic;
        }
    }
}

