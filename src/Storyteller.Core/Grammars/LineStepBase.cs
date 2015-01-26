using System;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public abstract class LineStepBase : ILineExecution
    {
        public StepValues Values { get; private set; }

        protected LineStepBase(StepValues values)
        {
            Values = values;
        }

        protected abstract StepResult execute(ISpecContext context);

        public void Execute(ISpecContext context)
        {
            Values.DoDelayedConversions(context);

            if (Values.Errors.Any())
            {
                var result = Values.ToConversionErrorResult();
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
                context.LogException(Values.Id, ex, Position);
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