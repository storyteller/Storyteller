using System;
using System.Threading.Tasks;
using Storyteller.Core.Engine.UserInterface;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchRunner : SpecRunnerBase
    {
        private readonly IBatchObserver _resultObserver;
        private StopConditions _stopConditions = new StopConditions();

        public BatchRunner(IBatchObserver observer)
        {
            _resultObserver = observer;
        }

        public override void BeforeRunning(SpecExecutionRequest request, ISpecContext context)
        {

        }

        public override void AfterRunning(SpecExecutionRequest request, ISpecContext context, IConsumingQueue queue)
        {
            var plan = request.Plan;

            plan.Attempts++;
            if (ShouldRetry(plan, context.Specification))
            {
                _resultObserver.SpecRequeued(plan, context);
                queue.Enqueue(request);
            }
            else
            {
                _resultObserver.SpecHandled(plan, context);
            }
        }


        public override IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context)
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