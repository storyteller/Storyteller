using System;
using System.Collections.Generic;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Remotes
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
            Project.CurrentProject = project;

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

            var runner = new SpecRunner(new UserInterfaceExecutionMode(observer), _system);

            var engine  = new SpecificationEngine(_system, runner, new NulloObserver());
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

            var executionMode = new BatchExecutionMode(batchObserver);
            var runner = new SpecRunner(executionMode, _system);

            var engine = new SpecificationEngine(
                _system, runner, executionObserver);

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