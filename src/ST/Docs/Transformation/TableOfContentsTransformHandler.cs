using ST.Docs.Html;
using ST.Docs.Html.Navigation;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class TableOfContentsTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public TableOfContentsTransformHandler(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key
        {
            get { return "TableOfContents"; }
        }

        public string Transform(Topic current, string data)
        {
            return new TableOfContentsTag(current, _urls).ToString();
        }
    }
}