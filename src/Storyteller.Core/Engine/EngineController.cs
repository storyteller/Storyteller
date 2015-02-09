using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public class EngineController : IListener<BatchRunRequest>
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
    }

    public class BatchRunRequest
    {
        public Lifecycle Lifecycle;
        public string Suite;

        public IEnumerable<SpecNode> Filter(Suite top)
        {
            if (Lifecycle == Lifecycle.Any && Suite.IsEmpty()) return top.GetAllSpecs();

            IEnumerable<SpecNode> nodes = null;

            if (Suite.IsNotEmpty())
            {
                var suite = top.suites.FirstOrDefault(x => x.name == Suite);
                if (suite == null) return new SpecNode[0];

                nodes = suite.GetAllSpecs();
            }
            else
            {
                nodes = top.GetAllSpecs();
            }

            if (Lifecycle != Lifecycle.Any)
            {
                nodes = nodes.Where(x => x.lifecycle == Lifecycle.ToString());
            }

            

            return nodes.ToArray();
        }
    }

    public class BatchRunResponse : ClientMessage
    {
        public BatchRunResponse() : base("batch-run-response")
        {
        }

        public SpecResult[] results;
    }
}