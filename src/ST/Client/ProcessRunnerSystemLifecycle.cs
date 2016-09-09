using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ProcessRunnerSystemLifecycle : ISystemLifecycle
    {
        public ProcessRunnerSystemLifecycle(Project project)
        {
        }

        public void AssertValid()
        {
            throw new NotImplementedException();
        }

        public void Teardown()
        {
            throw new NotImplementedException();
        }

        public QueueState QueueState()
        {
            throw new NotImplementedException();
        }

        public void Start(EngineMode mode)
        {
            throw new NotImplementedException();
        }
    }

    public interface IProcessLauncher
    {
        
    }

    public class StorytellerAgent
    {
        
    }

    /*
    // NEED a way to "know" when it's done.
    public class StorytellerAgent : IDisposable, IListener<StartProject>, IListener<Shutdown>
    {
        private readonly int _port;
        private readonly ISystem _system;
        private SocketConnection _socket;
        private readonly IList<IDisposable> _disposables = new List<IDisposable>();
        private readonly SpecExpiration _specExpiration = new SpecExpiration();
        private SpecificationEngine _engine;
        private object _controller;

        public StorytellerAgent(int port, ISystem system)
        {
            _port = port;
            _system = system;

            _disposables.Add(system);
        }

        public void Start()
        {
            _socket = new SocketConnection(_port, false, (s, json) =>
            {
                EventAggregator.Messaging.SendJson(json);
            });

            _disposables.Add(_socket);

            EventAggregator.Start(_socket);
            EventAggregator.Messaging.AddListener(this);

            EventAggregator.SendMessage(new AgentReady());
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

        void IListener<StartProject>.Receive(StartProject message)
        {
            Project.CurrentProject = message.Project;

            _engine = message.Mode == EngineMode.Interactive
                ? buildUserInterfaceEngine()
                : buildBatchedEngine(message.Project.TracingStyle);


            _engine.Start(message.Project.StopConditions);
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

        public void Receive(Shutdown message)
        {
            Dispose();
        }
    }
    */
    public class Shutdown : ClientMessage
    {
        public Shutdown() : base("shutdown")
        {
        }
    }

    public class StartProject : ClientMessage
    {
        public StartProject() : base("start-project")
        {
        }

        public EngineMode Mode { get; set; }
        public Project Project { get; set; }
    }

    public class AgentReady : ClientMessage
    {
        public AgentReady() : base("agent-ready")
        {
        }
    }
}