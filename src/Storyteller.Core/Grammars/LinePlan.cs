using System;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class LineStep : ILineExecution
    {
        private readonly StepValues _values;
        private readonly ILineGrammar _grammar;

        public LineStep(StepValues values, ILineGrammar grammar)
        {
            _values = values;
            _grammar = grammar;
        }

        public void Execute(ISpecContext context)
        {
            _values.DoDelayedConversions(context);

            if (_values.Errors.Any())
            {
                // TODO -- will need to care about position when we do Paragraph's
                var result = new StepResult(_values.Id, ResultStatus.ok)
                {
                    cells = _values.Errors.ToArray()
                };
                context.LogResult(result);

                return;
            }

            try
            {
                var cellResults = _grammar.Execute(_values, context);

                var result = new StepResult(_values.Id, ResultStatus.ok)
                {
                    cells = cellResults.ToArray()
                };

                context.LogResult(result);
            }
            catch (Exception ex)
            {
                context.LogException(_values.Id, ex);
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