using System;
using System.Collections;
using System.Collections.Generic;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Remotes
{
    public class RemoteProxy : MarshalByRefObject, IDisposable
    {
        private object _controller;
        private SpecificationEngine _engine;
        private Project _project;
        private ISystem _system;
        private readonly IList<IDisposable> _services = new List<IDisposable>();

        public void Dispose()
        {
            _services.Each(x => x.Dispose());
            _services.Clear();
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
                _services.Add(_system);

                _engine = mode == EngineMode.Batch
                    ? buildBatchedEngine(project.TracingStyle)
                    : buildUserInterfaceEngine();


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

            var engine  = new SpecificationEngine(_system, new InstrumentedRunner(observer), new NulloObserver());
            _controller = new EngineController(engine, observer);


            _services.Add(observer);
            _services.Add(engine);

            EventAggregator.Messaging.AddListener(_controller);

            return engine;
        }

        private SpecificationEngine buildBatchedEngine(string tracingStyle)
        {
            IBatchObserver batchObserver = new BatchObserver();
            IExecutionObserver executionObserver = new NulloObserver();

            if ("TeamCity" == tracingStyle)
            {
                batchObserver = new TeamCityBatchObserver(batchObserver);
                executionObserver = new TeamCityExecutionObserver();
            }

            var engine = new SpecificationEngine(
                _system, new BatchRunner(batchObserver), executionObserver);

            _controller = new BatchController(engine, batchObserver);

            _services.Add(engine);

            EventAggregator.Messaging.AddListener(_controller);

            return engine;
        }

        public void SendMessage(string json)
        {
            EventAggregator.Messaging.SendJson(json);
        }

    }
}