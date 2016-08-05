using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
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
        private SpecExpiration _specExpiration;


        public void Dispose()
        {
            try
            {
                _services.ToArray().Each(x => x.SafeDispose());
                _services.Clear();
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());
            }
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public QueueState QueueState()
        {
            var controller = _controller as EngineController;
            return controller == null ? new QueueState() : controller.QueueState();
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

                _specExpiration = new SpecExpiration();

                if (mode == EngineMode.Interactive)
                {
                    _engine = buildUserInterfaceEngine();
                }
                else
                {
                    _engine = buildBatchedEngine(project.TracingStyle);
                }


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

            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
            AppDomain.CurrentDomain.DomainUnload += CurrentDomainOnDomainUnload;
        }

        private void CurrentDomainOnDomainUnload(object sender, EventArgs eventArgs)
        {
            if (_engine != null)
            {
                _engine.SafeDispose();
            }
        }

        void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            Console.WriteLine("Uncaught exception, shutting down.");
            Console.WriteLine(e.ExceptionObject.ToString());
            if (_engine != null)
            {
                _engine.Dispose();
            }
        }

        private SpecificationEngine buildUserInterfaceEngine()
        {
            var observer = new UserInterfaceObserver();

            var runner = new SpecRunner(new UserInterfaceExecutionMode(observer), _system, _specExpiration);

            var executionObserver = new UserInterfaceExecutionObserver();
            var engine  = new SpecificationEngine(_system, runner, executionObserver);
            _controller = new EngineController(engine, observer, runner);

            // Super hokey, but we need some way to feed the spec started
            // event up to EngineController
            // TODO -- maybe pull the IExecutionQueue concept from 1-2 back out
            executionObserver.Controller = (EngineController) _controller;


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
            var runner = new SpecRunner(executionMode, _system, _specExpiration);

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
