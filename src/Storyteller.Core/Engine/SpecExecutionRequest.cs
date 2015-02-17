using System;
using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public class SpecExecutionRequest
    {
        private readonly IResultObserver _observer;
        public SpecNode Node { get; private set; }
        public Specification Specification { get; private set; }
        public SpecificationPlan Plan { get; private set; }

        public static SpecExecutionRequest For(SpecNode node)
        {
            return new SpecExecutionRequest(node, new NulloResultObserver());
        }

        public SpecExecutionRequest(SpecNode node, IResultObserver observer)
        {
            _observer = observer;
            Node = node;
        }

        public void SpecExecutionFinished(ISpecContext context)
        {
            _observer.SpecExecutionFinished(Node, context.Counts);
        }

        private void performAction(Action action )
        {
            try
            {
                action();
            }
            catch (Exception e)
            {
                IsCancelled = true;
                EventAggregator.SendMessage(new RuntimeError(e));
            }
        }

        public void ReadXml()
        {
            performAction(() =>
            {
                Specification = XmlReader.ReadFromFile(Node.filename);
                Specification.Id = Node.id;
            });
        }

        public void CreatePlan(FixtureLibrary library)
        {
            performAction(() =>
            {
                Plan = Specification.CreatePlan(library);
            });
        }

        public ISpecContext CreateContext(StopConditions stopConditions, IExecutionContext execution)
        {
            var context = new SpecContext(_observer, stopConditions, execution.Services);
            Context = context;

            return context;
        }

        public void Cancel()
        {
            IsCancelled = true;

            if (Context != null)
            {
                Context.RequestCancellation();
            }
        }

        public ISpecContext Context { get; private set; }
        public bool IsCancelled { get; private set; }
    }
}