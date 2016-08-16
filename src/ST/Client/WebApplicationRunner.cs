using System;
using Baseline;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace ST.Client
{
    public class WebApplicationRunner : IDisposable
    {
        private readonly OpenInput _input;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public RemoteController Controller { get; private set; }

        public string BaseAddress
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Dispose()
        {
            Controller.Teardown();
            //_server.SafeDispose();
        }

        public void Start()
        {
            Controller = _input.BuildRemoteController();
            var context = new StorytellerContext(Controller, _input);

            if (Controller.BinPath.IsEmpty())
                throw new Exception(
                    "Could not determine any BinPath for the testing AppDomain. Has the Storyteller specification project been compiled, \nor is Storyteller using the wrong compilation target maybe?\n\ntype 'st.exe ? open' or st.exe ? run' to see the command usages\n\n");

            context.Start();

            throw new NotImplementedException();

            /*
            var registry = new FubuRegistry();


            registry.AlterSettings<DiagnosticsSettings>(_ => _.TraceLevel = TraceLevel.Verbose);
            registry.Mode = "development";
            registry.HostWith<NOWIN>();
            registry.Services.For<IRemoteController>().Use(Controller);
            registry.Services.For<StorytellerContext>().Use(context);
            
            registry.Services.IncludeRegistry<WebApplicationRegistry>();


            _server = registry.ToRuntime();
            var connector = _server.Get<IClientConnector>();
            connector.Start();
            Controller.AddListener(connector);

            _server.Get<AssetFileWatcher>().Start();

            var persistence = _server.Get<IPersistenceController>();
            persistence.StartWatching(context.SpecPath);
            context.AddRemoteListener(persistence);
            */
        }
    }
}