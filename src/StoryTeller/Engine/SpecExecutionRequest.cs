using System;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;
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

            _completion = new TaskCompletionSource<SpecResults>();
        }

        public Specification Specification { get; }
        
        [Obsolete]
        public SpecificationPlan Plan { get; private set; }

        public ExecutionMode Mode { get; set; } = ExecutionMode.normal;

        private readonly CancellationTokenSource _cancellation = new CancellationTokenSource();
        private readonly TaskCompletionSource<SpecResults> _completion;

        public string Id
        {
            get
            {
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
            _completion.SetResult(results);
        }

        public Task<SpecResults> Completion => _completion.Task;

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

            try
            {
                Plan = Specification.CreatePlan(library);
            }
            catch (Exception e)
            {
                Cancel();
                EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(e)));
            }
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
            return $"SpecExecutionRequest for {Specification.id} ({Specification.name})";
        }

        public Timings StartNewTimings()
        {
            var timings = new Timings();
            timings.Start(Specification);

            return timings;
        }
    }
}