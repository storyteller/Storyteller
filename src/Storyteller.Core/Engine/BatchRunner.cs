using System;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public class BatchRunner : ISpecRunner
    {
        private readonly IObserver _observer;
        private StopConditions _stopConditions = new StopConditions();

        public BatchRunner(IObserver observer)
        {
            _observer = observer;
        }

        private void execute(SpecificationPlan plan, ISpecContext context, IExecutionQueue queue)
        {
            try
            {
                var stepExecutor = new SynchronousExecutor(context);
                plan.AcceptVisitor(stepExecutor);

                plan.Attempts++;
                if (ShouldRetry(plan, context))
                {
                    _observer.SpecRequeued(plan, context);
                    queue.Enqueue(plan);
                }
                else
                {
                    _observer.SpecHandled(plan.Specification.Id);
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

        public Task<ISpecContext> Execute(SpecificationPlan plan, IExecutionContext execution, IExecutionQueue queue)
        {
            var context = new SpecContext(_observer, _stopConditions, execution.Services);

            
            return Task.Factory.StartNew(() =>
            {
                execute(plan, context, queue);

                return context as ISpecContext;
            }, context.Cancellation);
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}