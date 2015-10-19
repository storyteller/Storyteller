using System;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars
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

        public string Key { get; set; }

        IExecutionStep IGrammar.CreatePlan(Step step, FixtureLibrary library)
        {
            return new FactPlan(new StepValues(step.id), this);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return new Sentence
            {
                format = _label,
                cells = new Cell[0]
            };
        }

        public bool PerformTest(StepValues values, ISpecContext context)
        {
            return _test(context);
        }

        public bool IsHidden { get; set; }
    }

    public interface IFactGrammar : IGrammar
    {
        bool PerformTest(StepValues values, ISpecContext context);
    }

    public class FactPlan : LineStepBase, IWithValues
    {
        private readonly IFactGrammar _grammar;

        public FactPlan(StepValues values, IFactGrammar grammar) : base(values)
        {
            _grammar = grammar;
        }

        public override string Subject
        {
            get { return _grammar.Key; }
        }

        protected override StepResult execute(ISpecContext context)
        {
            var test = _grammar.PerformTest(Values, context);
            return new StepResult(Values.id, test ? ResultStatus.success : ResultStatus.failed);
        }
    }
}