using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Engine.Batching
{
    public class BatchExecutionMode : IExecutionMode
    {
        private readonly IBatchObserver _resultObserver;

        public BatchExecutionMode(IBatchObserver observer)
        {
            _resultObserver = observer;
        }

        public void BeforeRunning(SpecExecutionRequest request)
        {
        }

        public void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue, SpecRunnerStatus status)
        {
            if (ShouldRetry(results, request.Specification, status))
            {
                _resultObserver.SpecRequeued(request);
                queue.Enqueue(request);
            }
            else
            {
                _resultObserver.SpecHandled(request, results);
            }
        }

        public IStepExecutor BuildExecutor(SpecificationPlan plan, SpecContext context)
        {
            return new SynchronousExecutor(context);
        }

        public bool ShouldRetry(SpecResults results, Specification specification, SpecRunnerStatus status)
        {
            if (status == SpecRunnerStatus.Invalid) return false;

            if (results.HadCriticalException) return false;

            if (specification.Lifecycle == Lifecycle.Acceptance) return false;

            return specification.MaxRetries > (results.Attempts - 1);
        }
    }
}