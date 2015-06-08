using System;
using FubuCore;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using StoryTeller.Remotes;
using StructureMap;

namespace ST.Client
{
    public class WebApplicationRunner : IDisposable
    {
        private readonly OpenInput _input;
        private RemoteController _controller;
        private EmbeddedFubuMvcServer _server;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public void Start()
        {
            _controller = _input.BuildRemoteController();
            var context = new StorytellerContext(_controller, _input);

            

            var container = new Container(new WebApplicationRegistry(_controller, context));

            context.Start();

            _server = FubuApplication.DefaultPolicies().StructureMap(container).RunEmbeddedWithAutoPort();
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