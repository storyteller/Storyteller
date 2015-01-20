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
                // TODO -- will need to care about position when we do Paragraph's
                var result = new StepResult(values.Id, ResultStatus.ok)
                {
                    cells = values.Errors.ToArray()
                };

                context.LogResult(result);

                return;
            }

            try
            {
                var result = execute(context);

                context.LogResult(result);
            }
            catch (Exception ex)
            {
                context.LogException(values.Id, ex);
            }
        }

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