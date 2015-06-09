using ST.Docs.Html;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public class UrlTransformer : ITransformHandler
    {
        private readonly IUrlResolver _resolver;

        public UrlTransformer(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public string Key
        {
            get { return "url"; }
        }

        public string Transform(Topic current, string data)
        {
            var url = _resolver.ToUrl(current, data);
            return url;
        }
    }
}