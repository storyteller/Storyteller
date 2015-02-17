using System.Linq;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public class EngineController : IListener<RunSpec>
    {
        private readonly SpecificationEngine _engine;


        public EngineController(SpecificationEngine engine)
        {
            _engine = engine;
        }


        public void Receive(RunSpec message)
        {
            var spec = findSpec(message.id);
            _engine.Enqueue(spec);
        }

        // TODO -- obviously make this be much more efficient!!!!!
        private SpecNode findSpec(string id)
        {
            var hierarchy = HierarchyLoader.ReadHierarchy();
            return hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }
    }
}