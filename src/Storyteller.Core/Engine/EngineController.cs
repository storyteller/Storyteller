using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    // TODO -- retrofit UT's here
    public class EngineController : IResultObserver,
        IListener<RunSpec>,
        IListener<HierarchyLoaded>
    {
        private readonly ISpecificationEngine _engine;
        private readonly IUserInterfaceObserver _observer;
        private Task<Suite> _hierarchy;

        private readonly IList<SpecExecutionRequest> _outstanding = new List<SpecExecutionRequest>();


        public EngineController(ISpecificationEngine engine, IUserInterfaceObserver observer)
        {
            _engine = engine;
            _observer = observer;
            _hierarchy = Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy());
        }

        public IEnumerable<SpecExecutionRequest> OutstandingRequests()
        {
            return _outstanding.ToArray();
        } 

        public void Receive(RunSpec message)
        {
            var spec = findSpec(message.id);


            _observer.SpecQueued(spec);


            var request = new SpecExecutionRequest(spec,this);

            _engine.Enqueue(request);
        }

        private SpecNode findSpec(string id)
        {
            _hierarchy.Wait(2.Seconds());

            return _hierarchy.Result.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }

        void IResultObserver.Handle<T>(T message)
        {
            _observer.SendToClient(message);
        }

        public void SpecExecutionFinished(SpecNode node, Counts counts)
        {
            _outstanding.RemoveAll(x => x.Node == node);
            _observer.SendToClient(new SpecExecutionCompleted(node.id, counts, 0));
        }

        void IListener<HierarchyLoaded>.Receive(HierarchyLoaded message)
        {
            _hierarchy = Task.FromResult(message.root);
        }
    }
}