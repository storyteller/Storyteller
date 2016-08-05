using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
{
    public class EngineController : IResultObserver,
        IListener<RunSpec>,
        IListener<RunSpecs>,
        IListener<CancelSpec>,
        IListener<CancelAllSpecs>
    {
        private readonly ISpecificationEngine _engine;
        private readonly IUserInterfaceObserver _observer;
        private readonly ISpecRunner _runner;

        private readonly IList<SpecExecutionRequest> _outstanding = new List<SpecExecutionRequest>();


        public EngineController(ISpecificationEngine engine, IUserInterfaceObserver observer, ISpecRunner runner)
        {
            _engine = engine;
            _observer = observer;
            _runner = runner;
        }

        public IEnumerable<SpecExecutionRequest> OutstandingRequests()
        {
            return _outstanding.ToArray();
        }

        public void Receive(RunSpec message)
        {
            RunSpec(message.id, message.spec);
            SendQueueState();
        }

        public virtual void RunSpec(string id, Specification specification)
        {
            if (OutstandingRequests().Any(x => x.Specification.id == id)) return;

            var request = new SpecExecutionRequest(specification, this);
            _outstanding.Add(request);

            _engine.Enqueue(request);
        }

        void IResultObserver.Handle<T>(T message)
        {
            _observer.SendToClient(message.As<ClientMessage>());
        }

        public void SpecExecutionFinished(Specification specification, SpecResults results)
        {
            var outstanding = _outstanding.FirstOrDefault(x => Equals(x.Specification, specification));
            if (outstanding == null) return;

            _outstanding.Remove(outstanding);

            _observer.SendToClient(new SpecExecutionCompleted(specification.id, results, specification));

            SendQueueState();
        }

        public void Receive(CancelSpec message)
        {
            CancelSpec(message.id);
            SendQueueState();
        }

        public virtual void CancelSpec(string id)
        {
            _outstanding.Where(x => x.Specification.id == id).Each(x => x.Cancel());
            _outstanding.RemoveAll(x => x.Specification.id == id);

            _engine.CancelRunningSpec(id);
        }

        public void Receive(CancelAllSpecs message)
        {
            _engine.CancelRunningSpec(null);

            OutstandingRequests().Each(x => x.Cancel());

            _outstanding.Clear();

            SendQueueState();
        }

        public void Receive(RunSpecs message)
        {
            message.specs.Each(x => RunSpec(x.id, x));

            SendQueueState();
        }

        public QueueState QueueState()
        {
            var running = _runner.RunningSpecId();
            return new QueueState
            {
                queued = _outstanding.Where(x => x.Specification.id != running).Select(x => x.Specification.id).ToArray(),
                running = running
            };
        }

        public void SendQueueState()
        {
            _observer.SendToClient(QueueState());
        }
    }
}