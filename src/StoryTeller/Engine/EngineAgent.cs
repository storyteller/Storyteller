using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Oakton;
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
        private readonly RunningSystem _running;

        public EngineAgent(int port, ISystem system)
        {
            if (system == null) throw new ArgumentNullException(nameof(system));
            
            _socket = new SocketConnection(port, false, (s, json) =>
            {
                EventAggregator.Messaging.SendJson(json);
            });

            _disposables.Add(_socket);

            EventAggregator.Start(_socket);

            Console.WriteLine("AGENT: Sending AgentReady message");
            EventAggregator.SendMessage(new AgentReady());
            
            _running = RunningSystem.Create(system);


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
            if (_running != null)
            {
                Console.WriteLine($"AGENT: Trying to start specification runner for {_running.GetType().Name} at {project.ProjectPath} and port {project.Port}");
            }

            Project.CurrentProject = project;


            _project = project;


            try
            {
                _engine = buildUserInterfaceEngine();


                _engine.Start(project.StopConditions);


                ConsoleWriter.Write("AGENT: Specification running engine ready at " + project.ProjectPath);
            }
            catch (Exception e)
            {
                StorytellerAgent.LogFailure(e);

                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());

                var message = new SystemRecycled
                {
                    error = e.ToString(),
                    success = false,
                };

                EventAggregator.SendMessage(message);
            }


        }

        private SpecificationEngine buildUserInterfaceEngine()
        {
            var observer = new UserInterfaceObserver();
            var executionObserver = new UserInterfaceExecutionObserver();

            var runner = new SpecRunner(new UserInterfaceExecutionMode(observer), _running.System, executionObserver);


            var engine = new SpecificationEngine(_running.System, runner, executionObserver);
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