using System.Linq;
using HtmlTags;
using ST.Docs.Html;
using ST.Docs.Html.Navigation;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public interface ITransformHandler
    {
        string Key { get; }
        string Transform(Topic current, string data);
    }

    public class ParentBreadcrumbsTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _resolver;

        public ParentBreadcrumbsTransformHandler(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public string Key
        {
            get { return "ParentBreadcrumbs"; }
        }

        public string Transform(Topic current, string data)
        {
            return new ParentBreadcrumbsNavigationTag(current, _resolver).ToString();
        }
    }

    public class HorizontalPreviousNextTransformHandler : ITransformHandler
    {
        // TODO -- find all of these things that do nothing but delegate to a 
        // HtmlTag and get a parent superclass going
        private readonly IUrlResolver _resolver;

        public HorizontalPreviousNextTransformHandler(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public string Key
        {
            get { return "HorizontalPreviousNextTopic"; }
        }

        public string Transform(Topic current, string data)
        {
            return new HorizontalPreviousNextTopicsTag(current, _resolver).ToString();
        }
    }

    public class LeftPaneNavigationTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _resolver;

        public LeftPaneNavigationTransformHandler(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public string Key
        {
            get { return "LeftPaneNavigation"; }
        }

        public string Transform(Topic current, string data)
        {
            var list = new TopicTreeBuilder(_resolver).BuildLeftTopicLinks(current);

            return list.ToTagList().ToString();
        }
    }
}