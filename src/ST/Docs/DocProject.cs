using System;
using System.Collections.Generic;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using ST.Docs.Html;
using ST.Docs.Runner;
using ST.Docs.Samples;
using ST.Docs.Topics;
using ST.Docs.Transformation;
using StructureMap;

namespace ST.Docs
{
    public class DocProject : IDisposable
    {
        private readonly Container _container;
        private readonly Topic _topic;
        private readonly DocSettings _settings;
        private BrowserRefresher _refresher;

        public DocProject(DocSettings settings)
        {
            _topic = TopicLoader.LoadDirectory(settings.Root);
            _settings = settings;

            _container = new Container(_ =>
            {
                _.AddRegistry<SampleRegistry>();
                _.AddRegistry<TransformationRegistry>();

                _.For(typeof(IUrlResolver)).Use(settings.UrlResolverType());

                _.For<DocSettings>().Use(settings);
                _.For<Topic>().Use(_topic);
            });
        }

        public EmbeddedFubuMvcServer LaunchRunner()
        {
            _refresher = new BrowserRefresher();
            _refresher.StartWebSockets();
            _settings.WebsocketAddress = "ws://localhost:" + _refresher.Port;

            var registry = new TopicRegistry(_topic);
            return FubuApplication.For(registry).StructureMap(_container).RunEmbeddedWithAutoPort(_settings.Root);
        }

        public Topic Topic
        {
            get { return _topic; }
        }

        public IEnumerable<Topic> AllTopics()
        {
            return Topic.AllTopicsInOrder();
        }

        public Topic FindTopic(string key)
        {
            return _topic.FindByKey(key);
            
        }

        public ITransformer Transformer
        {
            get { return _container.GetInstance<ITransformer>(); }
        }


        public void Dispose()
        {
            _refresher.Dispose();
            _container.Dispose();
        }
    }
}