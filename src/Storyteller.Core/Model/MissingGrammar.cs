using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Model
{
    public class MissingGrammar : GrammarModel, IGrammar, IExecutionPlan
    {
        private readonly string _key;
        private readonly string _message;

        public MissingGrammar(string key) : base("missing")
        {
            _message = "Grammar '{0}' is not implemented".ToFormat(key);
            errors.Add(new GrammarError{error = _message});
        }

        IExecutionPlan IGrammar.CreatePlan(Step step)
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
                error = _message
            };

            context.LogResult(result);
        }
    }
}