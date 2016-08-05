using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Grammars;

namespace StoryTeller.Model
{
    public class MissingGrammar : GrammarModel, IGrammar, IModelWithCells
    {
        private readonly string _key;
        private readonly string _message;

        public MissingGrammar(string key) : base("missing")
        {
            _message = "Grammar '{0}' is not implemented".ToFormat(key);
            AddError(new GrammarError {error = _message});
        }

        IExecutionStep IGrammar.CreatePlan(Step step, FixtureLibrary library)
        {
            return new InvalidGrammarStep(new StepValues(step.id), _message);
        }

        GrammarModel IGrammar.Compile(Fixture fixture, CellHandling cells)
        {
            return this;
        }

        public Cell[] cells
        {
            get { return new Cell[0]; }
        }

        public string Key { get; set; }
        public bool IsHidden { get; set; }
    }
}