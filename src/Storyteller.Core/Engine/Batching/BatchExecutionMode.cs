using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchExecutionMode : IExecutionMode
    {
        private readonly IBatchObserver _resultObserver;

        public BatchExecutionMode(IBatchObserver observer)
        {
            _resultObserver = observer;
        }

        public void BeforeRunning(SpecExecutionRequest request, ISpecContext context)
        {
        }

        public void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue)
        {
            var plan = request.Plan;

            plan.Attempts++;
            if (ShouldRetry(plan, request.Specification))
            {
                _resultObserver.SpecRequeued(request);
                queue.Enqueue(request);
            }
            else
            {
                _resultObserver.SpecHandled(request, results);
            }
        }


        public IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context)
        {
            return new SynchronousExecutor(context);
        }

        public bool ShouldRetry(SpecificationPlan plan, Specification specification)
        {
            if (specification.Lifecycle == Lifecycle.Acceptance) return false;

            return specification.MaxRetries > (plan.Attempts - 1);
        }
    }
}