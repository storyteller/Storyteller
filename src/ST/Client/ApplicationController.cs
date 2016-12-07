using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Oakton;
using StoryTeller.Engine.Stepthrough;
using StoryTeller.Grammars.Sets;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace ST.Client
{
    public class ApplicationController : IApplication, IListener<SystemRecycled>,
        IListener<SystemRecycleStarted>,
        IListener<QueueState>,
        IListener<NextStep>,
        IListener<StepResult>,
        IListener<SetVerificationResult>
    {
        private readonly OpenInput _input;
        public IPersistenceController Persistence { get; private set; }
        public IFixtureController Fixtures { get; private set; }
        public IClientConnector Client { get; private set; }
        public IEngineController Engine { get; }
        public IWebApplicationRunner Website { get; }

        public Task<SystemRecycled> Startup { get; private set; }


        public ApplicationController(OpenInput input, IEngineController engine, IWebApplicationRunner website)
        {
            _input = input;
            Engine = engine;
            Website = website;
        }

        public void Start()
        {
            Engine.AssertValid();
            Client = Website.Start(this);

            var starting = Engine.Start();

            Engine.AddListener(Client);

            Fixtures = new FixtureController(Client, new FixtureFileWatcher());
            Fixtures.StartWatching(_input.FixturePath);
            Engine.Messaging.AddListener(Fixtures);

            Persistence = new PersistenceController(Client, new SpecFileWatcher(), Fixtures);
            Persistence.StartWatching(_input.SpecPath);
            Engine.Messaging.AddListener(Persistence);



            Engine.Messaging.AddListener(this);

            Startup = starting.ContinueWith(t =>
            {
                var systemRecycled = t.Result;

                return handleInitialSystemRecycled(systemRecycled);
            });
        }

        private SystemRecycled handleInitialSystemRecycled(SystemRecycled systemRecycled)
        {
            systemRecycled.WriteSystemUsage();

            Fixtures.RecordSystemFixtures(systemRecycled);

            Fixtures.PostProcessAll(Persistence.Hierarchy.Specifications);

            return systemRecycled.CloneWithOverriddenFixtures(Fixtures.CombinedFixtures());
        }

        public SystemRecycled LatestSystemRecycled
        {
            get
            {
                var recycled = Engine.LatestSystemRecycled ?? Startup.Result;
                recycled.properties["Spec Directory"] = _input.SpecPath;

                return recycled.CloneWithOverriddenFixtures(Fixtures.CombinedFixtures());
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                Persistence?.Dispose();
                Website?.Dispose();
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }

        public void Receive(QueueState message)
        {
            QueueState = message;
            Client.SendMessageToClient(message);
        }

        public QueueState QueueState { get; private set; } = new QueueState();

        public Batch BuildInitialModel()
        {
            var hierarchyLoaded = new HierarchyLoaded(Persistence.Hierarchy.Top, Persistence.Results);

            var batch = new Batch(LatestSystemRecycled, hierarchyLoaded);

            QueueState.AddInitialMessages(batch);


            return batch;
        }

        public void Receive(SystemRecycled message)
        {
            message.WriteSystemUsage();

            Fixtures.RecordSystemFixtures(message);
            var cloned = message.CloneWithOverriddenFixtures(Fixtures.CombinedFixtures());

            Fixtures.PostProcessAll(Persistence.Hierarchy.Specifications);

            Client.SendMessageToClient(cloned);
        }

        public void Receive(SystemRecycleStarted message)
        {
            Client.SendMessageToClient(message);
        }

        public void Receive(NextStep message)
        {
            if (QueueState.Stepthrough != null)
            {
                QueueState.Stepthrough.next = message;
            }
        }

        private void recordResultMessageForStepthrough(IResultMessage result)
        {
            if (QueueState.running == result.spec && QueueState.Stepthrough != null)
            {
                QueueState.Stepthrough.Add(result);
            }
        }

        void IListener<StepResult>.Receive(StepResult message)
        {
            recordResultMessageForStepthrough(message);
        }

        void IListener<SetVerificationResult>.Receive(SetVerificationResult message)
        {
            recordResultMessageForStepthrough(message);
        }
    }
}