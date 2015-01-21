using System;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public abstract class LineStepBase : ILineExecution
    {
        protected StepValues values { get; private set; }

        protected LineStepBase(StepValues values)
        {
            this.values = values;
        }

        protected abstract StepResult execute(ISpecContext context);

        public void Execute(ISpecContext context)
        {
            values.DoDelayedConversions(context);

            if (values.Errors.Any())
            {
                var result = values.ToConversionErrorResult();
                result.position = Position;

                context.LogResult(result);

                return;
            }

            try
            {
                var result = execute(context);

                result.position = Position;

                context.LogResult(result);
            }
            catch (Exception ex)
            {
                context.LogException(values.Id, ex, Position);
            }
        }

        public object Position { get; set; }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            executor.Line(this);
        }
    }
}