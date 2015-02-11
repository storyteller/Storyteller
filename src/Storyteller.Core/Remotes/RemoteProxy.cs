using System;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Remotes
{
    public class RemoteProxy : MarshalByRefObject, IDisposable
    {
        private EngineController _controller;
        private SpecificationEngine _engine;
        private Project _project;
        private ISystem _system;

        public void Dispose()
        {
            if (_engine != null) _engine.Dispose();
            if (_system != null) _system.Dispose();
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public void Start(EngineMode mode, Project project, MarshalByRefObject remoteListener)
        {
            EventAggregator.Start((IRemoteListener) remoteListener);

            _project = project;

            Type systemType = null;

            try
            {
                systemType = _project.DetermineSystemType();
                _system = Activator.CreateInstance(systemType).As<ISystem>();

                _engine = mode == EngineMode.Batch
                    ? buildBatchedEngine()
                    : buildUserInterfaceEngine();

                _controller = new EngineController(_engine);
                EventAggregator.Messaging.AddListener(_controller);
                _engine.Start(project.StopConditions);

                
            }
            catch (Exception e)
            {
                var message = new SystemRecycled
                {
                    error = e.ToString(),
                    success = false,
                };

                if (systemType != null)
                {
                    message.system_name = systemType.AssemblyQualifiedName;
                }

                EventAggregator.SendMessage(message);
            }
        }

        private SpecificationEngine buildUserInterfaceEngine()
        {
            var observer = new UserInterfaceObserver();
            return new SpecificationEngine(_system, observer, new InstrumentedRunner(observer));
        }

        private SpecificationEngine buildBatchedEngine()
        {
            var batchObserver = new BatchObserver();
            return new SpecificationEngine(_system, batchObserver, new BatchRunner(batchObserver));
        }

        public void SendMessage(string json)
        {
            EventAggregator.Messaging.SendJson(json);
        }

    }
}