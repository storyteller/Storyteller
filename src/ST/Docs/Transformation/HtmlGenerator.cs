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
        private readonly DocSettings _settings;

        public HtmlGenerator(DocSettings settings, ITransformer transformer)
        {
            _transformer = transformer;
            _settings = settings;
        }

        public string Generate(Topic topic)
        {
            if (topic.IsSplashPage())
            {
                return _transformer.Transform(topic, new FileSystem().ReadStringFromFile(topic.File));
            }

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