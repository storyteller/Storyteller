using System;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchRunner : ISpecRunner
    {
        private readonly IBatchObserver _observer;
        private StopConditions _stopConditions = new StopConditions();

        public BatchRunner(IBatchObserver observer)
        {
            _observer = observer;
        }

        private void execute(SpecExecutionRequest request, ISpecContext context, IExecutionQueue queue)
        {
            try
            {
                var plan = request.Plan;
                var stepExecutor = new SynchronousExecutor(context);
                plan.AcceptVisitor(stepExecutor);

                plan.Attempts++;
                if (ShouldRetry(plan, context))
                {
                    _observer.SpecRequeued(plan, context);
                    queue.Enqueue(request);
                }
                else
                {
                    _observer.SpecHandled(plan, context);
                }


            }
            catch (Exception ex)
            {
                // TODO -- log something here about a weird catastrophic error
            }
        }

        public bool ShouldRetry(SpecificationPlan plan, ISpecContext context)
        {
            return false;
        }

        public Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IExecutionQueue queue)
        {
            var context = new SpecContext(_observer, _stopConditions, execution.Services);

            
            return Task.Factory.StartNew(() =>
            {
                execute(request, context, queue);

                return context as ISpecContext;
            }, context.Cancellation);
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}