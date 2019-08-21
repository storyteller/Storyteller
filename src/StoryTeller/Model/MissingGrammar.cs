using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.NewEngine;

namespace StoryTeller.Model
{
    public class MissingGrammar : GrammarModel, IGrammar, IModelWithCells
    {
        private readonly string _message;

        public MissingGrammar(string key) : base("missing")
        {
            _message = "Grammar '{0}' is not implemented".ToFormat(key);
            AddError(new GrammarError {error = _message});
        }

        IExecutionStep IGrammar.CreatePlan(Step step, FixtureLibrary library, bool inTable)
        {
            return new InvalidGrammarStep(new StepValues(step.id), _message);
        }

        public void CreatePlan(ExecutionPlan plan, Step step, FixtureLibrary library, bool inTable = false)
        {
            throw new System.NotImplementedException();
        }

        GrammarModel IGrammar.Compile(Fixture fixture, CellHandling cells)
        {
            return this;
        }

        public Cell[] cells => new Cell[0];

        public string Key { get; set; }
        public override string TitleOrFormat()
        {
            return "MISSING";
        }

        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}
