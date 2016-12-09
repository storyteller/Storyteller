using StorytellerDocGen.Html;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
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