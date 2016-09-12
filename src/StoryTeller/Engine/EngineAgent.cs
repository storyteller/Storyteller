using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine.Batching;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
{
    public class EngineAgent : IDisposable
    {
        private readonly IList<IDisposable> _disposables = new List<IDisposable>();
        private SpecificationEngine _engine;
        private object _controller;
        private readonly SocketConnection _socket;
        private Project _project;
        private ISystem _system;
        private SpecExpiration _specExpiration;

        public EngineAgent(int port)
        {
            _socket = new SocketConnection(port, false, (s, json) =>
            {
                EventAggregator.Messaging.SendJson(json);
            });

            _disposables.Add(_socket);

            EventAggregator.Start(_socket);

            ConsoleWriter.Write(ConsoleColor.Cyan, "Sending the agent ready message.");
            EventAggregator.SendMessage(new AgentReady());
        }

        public EngineAgent(int port, ISystem system) : this(port)
        {
            _system = system;

            _disposables.Add(system);
        }


        public void Dispose()
        {
            try
            {
                _disposables.ToArray().Each(x => x.SafeDispose());
                _disposables.Clear();
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());
            }
        }


        public void Start(Project project)
        {
            Console.WriteLine($"Trying to start specification runner for {_system.GetType().Name} at {project.ProjectPath} and port {project.Port}");

            Project.CurrentProject = project;


            _project = project;

            Type systemType = null;

            try
            {
                if (_system == null)
                {
                    systemType = _project.DetermineSystemType();
                    _system = Activator.CreateInstance(systemType).As<ISystem>();
                    _disposables.Add(_system);
                }


                _specExpiration = new SpecExpiration();

                _engine = project.Mode == EngineMode.Interactive
                    ? buildUserInterfaceEngine()
                    : buildBatchedEngine(project.TracingStyle);


                _engine.Start(project.StopConditions);


                ConsoleWriter.Write(ConsoleColor.Cyan, "Specification running engine ready at " + project.ProjectPath);
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());

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

            var runner = new SpecRunner(new UserInterfaceExecutionMode(observer), _system, _specExpiration);

            var executionObserver = new UserInterfaceExecutionObserver();
            var engine = new SpecificationEngine(_system, runner, executionObserver);
            _controller = new EngineController(engine, observer, runner);

            // Super hokey, but we need some way to feed the spec started
            // event up to EngineController
            // TODO -- maybe pull the IExecutionQueue concept from 1-2 back out
            executionObserver.Controller = (EngineController)_controller;


            _disposables.Add(observer);
            _disposables.Add(engine);

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

            _disposables.Add(engine);

            EventAggregator.Messaging.AddListener(_controller);

            return engine;
        }


    }


    public class StartProject : ClientMessage
    {
        public StartProject() : base("start-project")
        {
        }

        public Project Project { get; set; }
    }

    public class AgentReady : ClientMessage
    {
        public AgentReady() : base("agent-ready")
        {
        }
    }
}