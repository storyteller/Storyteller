using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Model
{
    public class ErrorGrammar : GrammarModel, IGrammar, IExecutionPlan
    {
        private readonly string _message;

        public ErrorGrammar(string error) : base("error")
        {
            _message = error;
            errors.Add(new GrammarError{error = error});
        }

        public IExecutionPlan CreatePlan(Step step)
        {
            return this;
        }

        GrammarModel IGrammar.Compile(Conversions conversions)
        {
            return this;
        }

        void IExecutionPlan.Execute(ISpecContext context)
        {
            var result = new StepResult(ResultStatus.error)
            {
                error = "Grammar '{0}' had an error:".ToFormat(key) + "\n" + _message
            };

            context.LogResult(result);
        }

       
    }
}