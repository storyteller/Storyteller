using System;
using System.Threading;
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
        private DocSettings _settings;

        public HtmlGenerator(DocSettings settings, ITransformer transformer)
        {
            _transformer = transformer;
            _settings = settings;

            _template = new Lazy<string>(() =>
            {
                return new FileSystem().ReadStringFromFile(settings.Root.AppendPath("layout.htm"));
            });
        }

        public string Generate(Topic topic)
        {
            try
            {
                var template = readTemplate();

                return _transformer.Transform(topic, template);
            }
            catch (Exception)
            {
                Thread.Sleep(100);

                // One retry because of over-eager file locking
                var template = readTemplate();

                return _transformer.Transform(topic, template);
            }


        }

        private string readTemplate()
        {
            return new FileSystem().ReadStringFromFile(_settings.Root.AppendPath("layout.htm"));
        }
    }
}