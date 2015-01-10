using System;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class LinePlan : IExecutionPlan
    {
        private readonly StepValues _values;
        private readonly Action<ISpecContext, StepValues> _action;

        public LinePlan(StepValues values, Action<ISpecContext, StepValues> action)
        {
            _values = values;
            _action = action;
        }

        public void Execute(ISpecContext context)
        {
            _values.DoDelayedConversions(context);

            if (_values.Errors.Any())
            {
                context.LogResults(_values.Errors);
                return;
            }

            try
            {
                _action(context, _values);
                context.LogResult(new StepResult(ResultStatus.ok));
            }
            catch (Exception ex)
            {
                context.LogException(ex);
            }
        }
    }
}