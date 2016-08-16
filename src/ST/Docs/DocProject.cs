using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using StructureMap;
using ST.Docs.Commands;
using ST.Docs.Exporting;
using ST.Docs.Html;
using ST.Docs.Runner;
using ST.Docs.Samples;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs
{
    public class DocProject : IDisposable, ISampleCache
    {
        private readonly Container _container;
        private readonly Task _sampleBuilder;
        private readonly ISampleCache _samples = new SampleCache();
        private readonly DocSettings _settings;

        private readonly Cache<string, Topic> _topicByUrl = new Cache<string, Topic>();
        private TopicFileWatcher _topicWatcher;

        public DocProject(DocSettings settings)
        {
            _settings = settings;
            ReadTopics();


            _container = new Container(_ =>
            {
                _.For<ISampleCache>().Use(this);
                _.For<DocProject>().Use(this);
                _.AddRegistry<SampleRegistry>();
                _.AddRegistry<TransformationRegistry>();

                _.ForSingletonOf<IBrowserRefresher>().Use<BrowserRefresher>();
                _.For(typeof(IUrlResolver)).Use(settings.UrlResolverType());

                _.ForSingletonOf<ICommandUsageCache>().Use<CommandUsageCache>();

                _.For<DocSettings>().Use(settings);
                _.For<Topic>().Use(Topic);
            });

            _sampleBuilder = scanForSamples();
        }

        public Topic Topic { get; private set; }

        public ITransformer Transformer
        {
            get { return _container.GetInstance<ITransformer>(); }
        }


        public void Dispose()
        {
            if (_topicWatcher != null) _topicWatcher.Dispose();
            _container.Dispose();
        }

        void ISampleCache.AddOrReplace(Sample sample)
        {
            _samples.AddOrReplace(sample);
        }

        Sample ISampleCache.Find(string name)
        {
            if (!_sampleBuilder.IsCompleted) _sampleBuilder.Wait();

            return _samples.Find(name);
        }

        IEnumerable<Sample> ISampleCache.All()
        {
            if (!_sampleBuilder.IsCompleted) _sampleBuilder.Wait();

            return _samples.All();
        }

        public void ReadTopics()
        {
            Topic = TopicLoader.LoadDirectory(_settings.Root);

            Topic.ParseAndOrder().Wait();

            _topicByUrl.ClearAll();
            Topic.AllTopicsInOrder().Each(x => _topicByUrl[x.Url] = x);
        }

        public void ExportTo(string directory)
        {
            var exporter = _container.GetInstance<Exporter>();

            Console.WriteLine("Cleaning off any existing docs at " + directory);

            exporter.CleanTarget(directory);

            scanForSamples();

            if (_settings.UrlStyle == UrlStyle.FileExport)
                exporter.ExportTo(directory, Topic, x => x.FileExportPath());
            else if (_settings.UrlStyle == UrlStyle.WebsiteExport)
                exporter.ExportTo(directory, Topic, x => x.WebsiteExportPath());
            else
                exporter.ExportTo(directory, Topic, x => x.WebsiteExportPath());
        }

        public IDisposable LaunchRunner()
        {
            throw new NotImplementedException();

            /*


            var refresher = _container.GetInstance<IBrowserRefresher>();

            refresher.StartWebSockets();
            _settings.WebsocketAddress = "ws://localhost:" + refresher.Port;


            _topicWatcher = new TopicFileWatcher(_settings, this);
            _topicWatcher.StartWatching(refresher);

            var registry = new TopicRegistry() {RootPath = _settings.Root};
            registry.AlterSettings<OwinSettings>(_ =>
            {
                _.Middleware.InsertFirst(new MiddlewareNode<TopicMiddleware>());
            });

            registry.StructureMap(_container);

            return registry.ToRuntime();
            */
        }

        private Task scanForSamples()
        {
            return Task.Factory.StartNew(() =>
            {
                var sampleBuilder = _container.GetInstance<ISampleBuilder>();
                var tasks = _settings.SampleDirectories.Select(sampleBuilder.ScanFolder).ToList();
                tasks.Add(sampleBuilder.ScanFolder(_settings.Root));
            }).ContinueWith(t => Task.WhenAll(t)).Unwrap();
        }

        public IEnumerable<Topic> AllTopics()
        {
            return Topic.AllTopicsInOrder();
        }

        public Topic FindTopic(string key)
        {
            return Topic.FindByKey(key);
        }

        public Topic FindTopicByUrl(string url)
        {
            return _topicByUrl.Has(url) ? _topicByUrl[url] : null;
        }


        public Task HardRefresh()
        {
            var samples = scanForSamples();
            ReadTopics();

            return samples;
        }
    }
}