using System;
using System.Collections;
using System.Linq;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{

    public class EngineController : IListener<BatchRunRequest>, IListener<RunSpec>
    {
        private readonly SpecificationEngine _engine;
        private readonly string _specDirectory;


        public EngineController(SpecificationEngine engine)
        {
            _engine = engine;
            _specDirectory = AppDomain.CurrentDomain.BaseDirectory.AppendPath("Specs");
        }

        public void Receive(BatchRunRequest message)
        {
            var top = HierarchyLoader.ReadHierarchy(_specDirectory);
            var nodes = message.Filter(top);

            _engine.RunBatch(nodes).ContinueWith(t =>
            {
                EventAggregator.SendMessage(new BatchRunResponse{results = t.Result.ToArray()});
            });
        }

        public void Receive(RunSpec message)
        {
            var spec = findSpec(message.id);
            _engine.Enqueue(spec);
        }

        // TODO -- obviously make this be much more efficient!!!!!
        private SpecNode findSpec(string id)
        {
            var hierarchy = HierarchyLoader.ReadHierarchy(_specDirectory);
            return hierarchy.GetAllSpecs().FirstOrDefault(x => x.id == id);
        }
    }
}