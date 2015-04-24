using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using ST.Docs.Html;
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

        public DocProject(DocSettings settings)
        {
            _container = new Container(_ =>
            {
                _.AddRegistry<SampleRegistry>();
                _.AddRegistry<TransformationRegistry>();

                _.For(typeof(IUrlResolver)).Use(settings.UrlResolverType());

                _.For<DocSettings>().Use(settings);
            });

            _topic = TopicLoader.LoadDirectory(settings.Root);
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
            return AllTopics().FirstOrDefault(x => x.Key == key);
        }

        public ITransformer Transformer
        {
            get { return _container.GetInstance<ITransformer>(); }
        }


        public void Dispose()
        {
            _container.Dispose();
        }
    }
}