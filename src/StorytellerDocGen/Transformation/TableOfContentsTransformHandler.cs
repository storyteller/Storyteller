using StorytellerDocGen.Html;
using StorytellerDocGen.Html.Navigation;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
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