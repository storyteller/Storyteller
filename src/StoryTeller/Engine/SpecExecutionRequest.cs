using System;
using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
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

        public SpecExecutionRequest(SpecNode node, IResultObserver observer, Specification specification = null)
        {
            _observer = observer;
            Node = node;
            Specification = specification;
        }

        public void SpecExecutionFinished(SpecResults results)
        {
            _observer.SpecExecutionFinished(Node, results);
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
                Specification.id = Node.id;
            });
        }

        public void CreatePlan(FixtureLibrary library)
        {
            performAction(() =>
            {
                Plan = Specification.CreatePlan(library);
            });
        }


        public void Cancel()
        {
            IsCancelled = true;
        }

        public bool IsCancelled { get; private set; }

        public IResultObserver Observer
        {
            get { return _observer; }
        }

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