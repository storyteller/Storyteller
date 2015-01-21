using System;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class FactGrammar : IFactGrammar
    {
        private readonly string _label;
        private readonly Func<ISpecContext, bool> _test;

        public FactGrammar(string label, Func<ISpecContext, bool> test)
        {
            _label = label;
            _test = test;
        }

        IExecutionStep IGrammar.CreatePlan(Step step, FixtureLibrary library)
        {
            return new FactPlan(new StepValues(step.Id), this);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            return new Sentence
            {
                format = _label
            };
        }

        public bool PerformTest(StepValues values, ISpecContext context)
        {
            return _test(context);
        }
    }

    public interface IFactGrammar : IGrammar
    {
        bool PerformTest(StepValues values, ISpecContext context);
    }

    public class FactPlan : LineStepBase
    {
        private readonly IFactGrammar _grammar;

        public FactPlan(StepValues values, IFactGrammar grammar) : base(values)
        {
            _grammar = grammar;
        }

        protected override StepResult execute(ISpecContext context)
        {
            var test = _grammar.PerformTest(values, context);
            return new StepResult(values.Id, test ? ResultStatus.success : ResultStatus.failed);
        }
    }
}