using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Model
{
    public class MissingGrammar : GrammarModel, IGrammar, IModelWithCells
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
            return new InvalidGrammarStep(new StepValues(step.Id), _message);
        }

        GrammarModel IGrammar.Compile(CellHandling cells)
        {
            return this;
        }

        public Cell[] cells
        {
            get { return new Cell[0]; }
        }
    }
}