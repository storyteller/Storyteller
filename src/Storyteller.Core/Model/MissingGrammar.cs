using System;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Model
{
    public class MissingGrammar : GrammarModel, IGrammar
    {
        private readonly string _key;
        private readonly string _message;

        public MissingGrammar(string key) : base("missing")
        {
            _message = "Grammar '{0}' is not implemented".ToFormat(key);
            errors.Add(new GrammarError {error = _message});
        }

        IExecutionStep IGrammar.CreatePlan(Step step, FixtureLibrary library)
        {
            return new InvalidGrammarStep(step.Id, _message);
        }

        GrammarModel IGrammar.Compile(Conversions conversions)
        {
            return this;
        }
    }
}