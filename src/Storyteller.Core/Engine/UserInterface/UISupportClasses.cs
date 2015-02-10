using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Engine.Batching;
using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine.UserInterface
{
    public interface IUserInterfaceObserver : IObserver
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
    }

    public class PassthroughMessage
    {
        public PassthroughMessage()
        {
        }

        public PassthroughMessage(object inner)
        {
            json = JsonSerialization.ToCleanJson(inner);
        }

        public string json;
    }

    public class UserInterfaceObserver : IUserInterfaceObserver
    {
        private void sendToClient(object o)
        {
            var passthrough = new PassthroughMessage(o);
            EventAggregator.SendMessage(passthrough);
        }

        public void SpecExecutionFinished(SpecificationPlan plan, ISpecContext context)
        {
            sendToClient(new SpecExecutionCompleted(plan.Specification.Id, context.Counts, 0));
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            sendToClient(message);
        }

        public Task<IEnumerable<SpecResult>> MonitorBatch(IEnumerable<SpecNode> nodes)
        {
            throw new System.NotSupportedException();
        }

        public void SendProgress(SpecProgress progress)
        {
            sendToClient(progress);
        }

        public void SpecStarted(SpecificationPlan plan)
        {
            sendToClient(new SpecRunning(plan.Specification.Id));
        }
    }

    public class InstrumentedExecutor : SynchronousExecutor
    {
        private readonly IUserInterfaceObserver _observer;
        private readonly int _total;
        private int _step;
        private readonly SpecificationPlan _plan;

        public InstrumentedExecutor(ISpecContext context, SpecificationPlan plan, IUserInterfaceObserver observer) : base(context)
        {
            _observer = observer;
            _total = plan.Count();
            _step = 0;
            _plan = plan;
        }

        public override void Line(ILineExecution execution)
        {
            base.Line(execution);

            var progress = new SpecProgress(_plan.Specification.Id, CurrentContext.Counts.Clone(), ++_step, _total);
            _observer.SendProgress(progress);
        }
    }

    public class InstrumentedRunner : ISpecRunner
    {
        private readonly IUserInterfaceObserver _observer;
        private StopConditions _stopConditions;

        public InstrumentedRunner(IUserInterfaceObserver observer)
        {
            _observer = observer;
        }

        public Task<ISpecContext> Execute(SpecificationPlan plan, IExecutionContext execution, IExecutionQueue queue)
        {
            var context = new SpecContext(_observer, _stopConditions, execution.Services);


            return Task.Factory.StartNew(() =>
            {
                _observer.SpecStarted(plan);
                var executor = new InstrumentedExecutor(context, plan, _observer);
                plan.AcceptVisitor(executor);

                _observer.SpecExecutionFinished(plan, context);

                return context as ISpecContext;
            }, context.Cancellation);
        }


        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}