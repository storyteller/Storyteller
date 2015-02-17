using System;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    // TODO -- retrofit some UT's here
    public class SpecExecutionRequest
    {
        private readonly Action<SpecNode, Counts> _onExecutionFinished;
        public SpecNode Node { get; private set; }
        public Specification Specification { get; private set; }
        public SpecificationPlan Plan { get; private set; }

        public static SpecExecutionRequest For(SpecNode node)
        {
            return new SpecExecutionRequest(node, (specNode, counts) => { });
        }

        public SpecExecutionRequest(SpecNode node, Action<SpecNode, Counts> onExecutionFinished)
        {
            _onExecutionFinished = onExecutionFinished;
            Node = node;
        }

        public void SpecExecutionFinished(SpecificationPlan plan, ISpecContext context)
        {

        }

        public void ReadXml()
        {
            // TODO -- error handling here
            Specification = XmlReader.ReadFromFile(Node.filename);
            Specification.Id = Node.id;
        }

        public void CreatePlan(FixtureLibrary library)
        {
            Plan = Specification.CreatePlan(library);
        }

        public void Cancel()
        {
            IsCancelled = true;

            // TODO -- if the cancellation token exists, cancel that too
        }

        public bool IsCancelled { get; private set; }
    }
}