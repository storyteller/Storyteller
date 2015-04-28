using System;
using FubuCore;
using ST.Docs.Topics;

namespace ST.Docs.Transformation
{
    public interface IHtmlGenerator
    {
        string Generate(Topic topic);
    }

    public class HtmlGenerator : IHtmlGenerator
    {
        private readonly ITransformer _transformer;
        private readonly Lazy<string> _template; 

        public HtmlGenerator(DocSettings settings, ITransformer transformer)
        {
            _transformer = transformer;

            _template = new Lazy<string>(() =>
            {
                return new FileSystem().ReadStringFromFile(settings.Root.AppendPath("layout.htm"));
            });
        }

        public string Generate(Topic topic)
        {
            return _transformer.Transform(topic, _template.Value);
        }
    }
}