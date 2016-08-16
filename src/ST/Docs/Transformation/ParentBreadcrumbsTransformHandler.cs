using System.Collections.Generic;
using Baseline;
using HtmlTags;
using ST.Docs.Html;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class ParentBreadcrumbsTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _resolver;

        public ParentBreadcrumbsTransformHandler(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public string Key
        {
            get { return "Breadcrumbs"; }
        }

        public string Transform(Topic current, string data)
        {
            var ol = new HtmlTag("ol").AddClass("breadcrumb");

            current.Ancestors().Each(x =>
            {
                ol.Add("li/a").Attr("href", _resolver.ToUrl(current, x)).Text(x.Title);
            });

            ol.Add("li").AddClass("active").Text(current.Title);

            return ol.ToString();
        }
    }

}