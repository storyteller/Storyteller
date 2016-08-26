﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using Baseline;
using HtmlTags;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json;
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
        private Task _sampleBuilder;
        private readonly ISampleCache _samples = new SampleCache();
        private readonly DocSettings _settings;

        private readonly LightweightCache<string, Topic> _topicByUrl = new LightweightCache<string, Topic>();
        private TopicFileWatcher _topicWatcher;
        private BrowserRefresher _refresher;

        public DocProject(DocSettings settings)
        {
            var port = PortFinder.FindPort(5000);
            BaseAddress = "http://localhost:" + port;

            _settings = settings;
            ReadTopics();


            _container = new Container(_ =>
            {
                _.For<ISampleCache>().Use(this);
                _.For<DocProject>().Use(this);
                _.AddRegistry<SampleRegistry>();
                _.AddRegistry<TransformationRegistry>();

                _.For(typeof(IUrlResolver)).Use(settings.UrlResolverType());

                _.ForSingletonOf<ICommandUsageCache>().Use<CommandUsageCache>();

                _.For<DocSettings>().Use(settings);
                _.For<Topic>().Use(Topic);
            });

            
        }

        public string BaseAddress { get; set; }

        public Topic Topic { get; private set; }

        public ITransformer Transformer => _container.GetInstance<ITransformer>();


        public void Dispose()
        {
            _refresher?.Dispose();
            _topicWatcher?.Dispose();
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
            var scanning = scanForSamples();

            var exporter = _container.GetInstance<Exporter>();

            Console.WriteLine("Cleaning off any existing docs at " + directory);

            exporter.CleanTarget(directory);

            scanning.Wait();

            if (_settings.UrlStyle == UrlStyle.FileExport)
                exporter.ExportTo(directory, Topic, x => x.FileExportPath());
            else if (_settings.UrlStyle == UrlStyle.WebsiteExport)
                exporter.ExportTo(directory, Topic, x => x.WebsiteExportPath());
            else
                exporter.ExportTo(directory, Topic, x => x.WebsiteExportPath());
        }

        public IDisposable LaunchRunner()
        {
            var middleware = new TopicMiddleware(this, _container.GetInstance<IHtmlGenerator>(), _settings);
            var webSockets = new WebSocketsHandler();
            _refresher = new BrowserRefresher(webSockets);

            var port = PortFinder.FindPort(5000);


            _settings.WebsocketAddress = $"ws://localhost:{port}";
            

            _container.Inject<IBrowserRefresher>(_refresher);
            _sampleBuilder = scanForSamples();

            var host = startHost(port, webSockets, middleware);

            _topicWatcher = new TopicFileWatcher(_settings, this);
            

            _topicWatcher.StartWatching(_refresher);

            return host;
        }

        private IWebHost startHost(int port, WebSocketsHandler webSockets, TopicMiddleware middleware)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls($"http://localhost:{port}")
                .Configure(app =>
                {
                    app.UseWebSockets();

                    app.Use(async (http, next) =>
                    {
                        if (http.WebSockets.IsWebSocketRequest)
                        {
                            await webSockets.HandleSocket(http).ConfigureAwait(false);
                        }
                        else
                        {
                            await next().ConfigureAwait(false);
                        }
                    });

                    app.UseStaticFiles(new StaticFileOptions
                    {
                        ServeUnknownFileTypes = true,
                        FileProvider = new PhysicalFileProvider(_settings.Root)
                    });

                    app.Use(async (http, next) =>
                    {
                        if (http.Request.Method.EqualsIgnoreCase("POST"))
                        {
                            switch (http.Request.Path)
                            {
                                case "/refresh":
                                    await HardRefresh().ConfigureAwait(false);

                                    _refresher.RefreshPage();
                                    break;

                                case "/open":
                                    var url = new Uri(http.Request.Headers["referer"]);

                                    var topic = FindTopicByUrl(url.AbsolutePath.TrimStart('/'));
                                    if (topic != null)
                                    {
                                        Process.Start(topic.File);
                                    }

                                    break;
                            }
                        }
                        else
                        {
                            await next().ConfigureAwait(false);
                        }
                    });

                    app.Run(middleware.Invoke);
                })
                .Build();

            host.Start();
            return host;
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