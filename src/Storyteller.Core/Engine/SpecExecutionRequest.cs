using System;
using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public class SpecExecutionRequest : IDisposable
    {
        private readonly IResultObserver _observer;
        public SpecNode Node { get; private set; }
        public Specification Specification { get; private set; }
        public SpecificationPlan Plan { get; private set; }

        public static SpecExecutionRequest For(SpecNode node)
        {
            return new SpecExecutionRequest(node, new NulloResultObserver());
        }

        public SpecExecutionRequest(SpecNode node, IResultObserver observer, Specification specification = null)
        {
            _observer = observer;
            Node = node;
            Specification = specification;
        }

        public void SpecExecutionFinished(ISpecContext context)
        {
            _observer.SpecExecutionFinished(Node, context.FinalizeResults());
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
                Specification = XmlReader.ReadFromFile(Node.Filename);
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

        public ISpecContext CreateContext(StopConditions stopConditions, IExecutionContext execution, Timings timings)
        {
            var context = new SpecContext(Specification, timings, _observer, stopConditions, execution.Services);
            Context = context;

            context.Reporting.StartDebugListening();

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

        protected bool Equals(SpecExecutionRequest other)
        {
            return Equals(Node.id, other.Node.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecExecutionRequest) obj);
        }

        public override int GetHashCode()
        {
            return (Node != null ? Node.GetHashCode() : 0);
        }

        public void Dispose()
        {
            if (Context != null) Context.Dispose();
        }

        public override string ToString()
        {
            return string.Format("SpecExecutionRequest for {0} ({1})", Node.id, Node.name);
        }

        public Timings StartNewTimings()
        {
            var timings = new Timings();
            timings.Start(Specification);

            return timings;
        }
    }
}