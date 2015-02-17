using System.Linq;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine
{
    // TODO -- retrofit UT's here
    public class EngineController : IListener<RunSpec>, IResultObserver
    {
        private readonly ISpecificationEngine _engine;
        private readonly IUserInterfaceObserver _observer;


        public EngineController(ISpecificationEngine engine, IUserInterfaceObserver observer)
        {
            _engine = engine;
            _observer = observer;
        }


        public void Receive(RunSpec message)
        {
            var spec = findSpec(message.id);


            _observer.SpecQueued(spec);


            var request = new SpecExecutionRequest(spec,this);

            _engine.Enqueue(request);
        }

        // TODO -- obviously make this be much more efficient!!!!!
        private SpecNode findSpec(string id)
        {
            var hierarchy = HierarchyLoader.ReadHierarchy();
            return hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }

        void IResultObserver.Handle<T>(T message)
        {
            _observer.SendToClient(message);
        }

        public void SpecExecutionFinished(SpecNode node, Counts counts)
        {
            _observer.SendToClient(new SpecExecutionCompleted(node.id, counts, 0));
        }
    }
}