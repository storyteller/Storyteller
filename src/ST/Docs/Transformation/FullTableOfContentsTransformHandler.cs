using ST.Docs.Html;
using ST.Docs.Html.Navigation;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class FullTableOfContentsTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;
        private readonly Topic _top;

        public FullTableOfContentsTransformHandler(IUrlResolver urls, Topic top)
        {
            _urls = urls;
            _top = top;
        }

        public string Key
        {
            get { return "FullTableOfContents"; }
        }

        public string Transform(Topic current, string data)
        {
            return new TableOfContentsTag(_top, _urls).ToString();
        }
    }
}