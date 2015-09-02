using System;
using FubuCore;
using FubuMVC.Core;
using FubuMVC.Core.Http.Hosting;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class WebApplicationRunner : IDisposable
    {
        private readonly OpenInput _input;
        private RemoteController _controller;
        private FubuRuntime _server;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public void Start()
        {
            _controller = _input.BuildRemoteController();
            var context = new StorytellerContext(_controller, _input);

            context.Start();

            var registry = new FubuRegistry();


            registry.AlterSettings<DiagnosticsSettings>(_ => _.TraceLevel = TraceLevel.Verbose);
            registry.HostWith<NOWIN>();
            registry.Services.For<IRemoteController>().Use(_controller);
            registry.Services.For<StorytellerContext>().Use(context);
            
            registry.Services.IncludeRegistry<WebApplicationRegistry>();


            _server = registry.ToRuntime();
        }

        public string BaseAddress
        {
            get { return _server.BaseAddress; }
        }

        public void Dispose()
        {
            _controller.Teardown();
            _server.SafeDispose();
        }
    }
}