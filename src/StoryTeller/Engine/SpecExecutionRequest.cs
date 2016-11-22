using System;
using System.Globalization;
using System.Threading;
using Baseline;
using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
{
    public class SpecExecutionRequest
    {
        public SpecExecutionRequest(Specification specification, IResultObserver observer)
        {
            Observer = observer;
            Specification = specification;
        }

        public Specification Specification { get; }
        public SpecificationPlan Plan { get; private set; }

        private readonly CancellationTokenSource _cancellation = new CancellationTokenSource();

        public string Id
        {
            get
            {
                if (Specification != null) return Specification.id;
                if (Specification != null) return Specification.id;
                return Plan.Specification.id;
            }
        }

        public CancellationToken Cancellation => _cancellation.Token;

        public bool IsCancelled => _cancellation.IsCancellationRequested;

        public IResultObserver Observer { get; }

        public static SpecExecutionRequest For(Specification spec)
        {
            return new SpecExecutionRequest(spec, new NulloResultObserver());
        }

        public void SpecExecutionFinished(SpecResults results)
        {
            Observer.SpecExecutionFinished(Specification, results);
        }

        private void performAction(Action action)
        {
            try
            {
                action();
            }
            catch (Exception e)
            {
                Cancel();
                EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(e)));
            }
        }

        public void CreatePlan(FixtureLibrary library)
        {
            var culture = Project.CurrentProject?.Culture;
            if (culture.IsNotEmpty())
            {
#if NET46
                Thread.CurrentThread.CurrentCulture = new CultureInfo(culture);
#else
                CultureInfo.CurrentCulture = new CultureInfo(culture);
#endif
            }

            performAction(() =>
            {
                Plan = Specification.CreatePlan(library);
            });
        }


        public void Cancel()
        {
            _cancellation.Cancel();
        }

        protected bool Equals(SpecExecutionRequest other)
        {
            return Equals(Specification.id, other.Specification.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((SpecExecutionRequest) obj);
        }

        public override int GetHashCode()
        {
            return Specification != null ? Specification.GetHashCode() : 0;
        }

        public override string ToString()
        {
            return string.Format("SpecExecutionRequest for {0} ({1})", Specification.id, Specification.name);
        }

        public Timings StartNewTimings()
        {
            var timings = new Timings();
            timings.Start(Specification);

            return timings;
        }
    }
}