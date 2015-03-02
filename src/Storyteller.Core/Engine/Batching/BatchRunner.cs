using System;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchRunner : ISpecRunner
    {
        private readonly IBatchObserver _resultObserver;
        private StopConditions _stopConditions = new StopConditions();

        public BatchRunner(IBatchObserver observer)
        {
            _resultObserver = observer;
        }

        private void execute(SpecExecutionRequest request, ISpecContext context, IConsumingQueue queue)
        {
            try
            {
                var plan = request.Plan;
                var stepExecutor = new SynchronousExecutor(context);
                plan.AcceptVisitor(stepExecutor);

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
            catch (Exception ex)
            {
                // TODO -- log something here about a weird catastrophic error
            }
        }

        public bool ShouldRetry(SpecificationPlan plan, Specification specification)
        {
            if (specification.Lifecycle == Lifecycle.Acceptance) return false;

            return specification.MaxRetries > (plan.Attempts - 1);
        }

        public Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IConsumingQueue queue)
        {
            var context = request.CreateContext(_stopConditions, execution);

            
            return Task.Factory.StartNew(() =>
            {
                execute(request, context, queue);

                return context;
            }, context.Cancellation);
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}