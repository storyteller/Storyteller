using System;
using System.Threading;
using FubuCore;
using Oakton;
using HtmlTags;
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
                return generate(topic);
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, "Failed to transform topic at " + topic.File);
                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());

                var document = new HtmlDocument
                {
                    Title = "Error!"
                };

                document.Add("h1").Text("Error!");

                document.Add("pre").Text(e.ToString());


                return document.ToString();
            }
        }

        private string generate(Topic topic)
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