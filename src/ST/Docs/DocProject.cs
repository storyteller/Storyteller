using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Caching;
using FubuCore;
using FubuCore.Util;
using FubuMVC.Core;
using FubuMVC.Core.Http.Owin;
using FubuMVC.Core.Http.Owin.Middleware;
using FubuMVC.Core.Runtime.Files;
using ST.Docs.Commands;
using ST.Docs.Exporting;
using ST.Docs.Html;
using ST.Docs.Runner;
using ST.Docs.Samples;
using ST.Docs.Topics;
using ST.Docs.Transformation;
using StructureMap;

namespace ST.Docs
{
    public class DocProject : IDisposable, ISampleCache
    {
        private readonly Container _container;
        private Topic _topic;
        private readonly DocSettings _settings;
        private TopicFileWatcher _topicWatcher;

        private readonly Cache<string, Topic> _topicByUrl = new Cache<string, Topic>();
        private readonly Task _sampleBuilder;
        private readonly ISampleCache _samples = new SampleCache();

        public DocProject(DocSettings settings)
        {

            _settings = settings;
            readTopics();


            _container = new Container(_ =>
            {
                _.For<ISampleCache>().Use(this);
                _.For<DocProject>().Use(this);
                _.AddRegistry<SampleRegistry>();
                _.AddRegistry<TransformationRegistry>();

                _.ForSingletonOf<IBrowserRefresher>().Use<BrowserRefresher>();
                _.For(typeof (IUrlResolver)).Use(settings.UrlResolverType());

                _.ForSingletonOf<ICommandUsageCache>().Use<CommandUsageCache>();

                _.For<DocSettings>().Use(settings);
                _.For<Topic>().Use(_topic);
            });

            _sampleBuilder = scanForSamples();

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

        private void readTopics()
        {
            _topic = TopicLoader.LoadDirectory(_settings.Root);

            _topic.ParseAndOrder().Wait();

            _topicByUrl.ClearAll();
            _topic.AllTopicsInOrder().Each(x => _topicByUrl[x.Url] = x);
        }

        public void ExportTo(string directory)
        {
            var exporter = _container.GetInstance<Exporter>();

            Console.WriteLine("Cleaning off any existing docs at " + directory);

            exporter.CleanTarget(directory);

            scanForSamples();

            if (_settings.UrlStyle == UrlStyle.FileExport)
            {
                exporter.ExportTo(directory, _topic, x => x.FileExportPath());
            }
            else
            {
                exporter.ExportTo(directory, _topic, x => x.WebsiteExportPath());
            }
        }

        public FubuRuntime LaunchRunner()
        {
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
        }

        private Task scanForSamples()
        {
            var sampleBuilder = _container.GetInstance<ISampleBuilder>();
            var tasks = _settings.SampleDirectories.Select(sampleBuilder.ScanFolder).ToList();
            tasks.Add(sampleBuilder.ScanFolder(_settings.Root));

            return Task.WhenAll(tasks);
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
            if (_topicWatcher != null) _topicWatcher.Dispose();
            _container.Dispose();
        }

        public Topic FindTopicByUrl(string url)
        {
            return _topicByUrl.Has(url) ? _topicByUrl[url] : null;
        }



        public class TopicFileWatcher : IDisposable, IChangeSetHandler
        {
            private readonly DocSettings _settings;
            private readonly DocProject _project;
            private FileChangeWatcher _watcher;
            private IBrowserRefresher _refresher;

            public TopicFileWatcher(DocSettings settings, DocProject project)
            {
                _settings = settings;
                _project = project;
            }

            public void StartWatching(IBrowserRefresher refresher)
            {
                _refresher = refresher;

                _watcher = new FileChangeWatcher(_settings.Root, FileSet.Deep("*.*"), this);
                _watcher.Start();
            }


            public void Dispose()
            {
                _watcher.Dispose();
            }

            public bool FileChangeShouldRegenerateTopicTree(string file)
            {
                if (Path.GetExtension(file) == ".md") return true;

                var name = Path.GetFileName(file);

                return name.EqualsIgnoreCase("splash.htm") || name.EqualsIgnoreCase("order.txt");
            }

            void IChangeSetHandler.Handle(ChangeSet changes)
            {
                if (changes.Added.Concat(changes.Changed).Any(x => FileChangeShouldRegenerateTopicTree(x.Path)) ||
                    changes.Deleted.Any())
                {
                    _project.readTopics();
                    _refresher.RefreshPage();
                }
                else
                {
                    _refresher.RefreshPage();
                }


            }
        }
    }
}