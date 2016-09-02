using System.Linq;
using HtmlTags;
using StorytellerDocGen.Html;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public class ImageTransformHandler : ITransformHandler
    {
        private readonly IUrlResolver _urls;

        public ImageTransformHandler(IUrlResolver urls)
        {
            _urls = urls;
        }

        public string Key => "img";

        public string Transform(Topic current, string data)
        {
            var parts = data.Split(';');
            var url = _urls.ToUrl(current, parts.First());



            var image = new HtmlTag("img").Attr("src", url).Style("max-width", "100%");

            if (parts.Length == 0)
            {
                return image.ToString();
            }

            var header = new HtmlTag("h5", x =>
            {
                x.Add("strong").Text(parts.Last());
            });

            return header.ToString() + image.ToString();

        }
    }
}