using StoryTeller.Model;

namespace StoryTeller.Grammars.Importing
{
    public class ImportedGrammar : IGrammar
    {
        private readonly Fixture _innerFixture;
        private readonly IGrammar _inner;

        public ImportedGrammar(Fixture innerFixture, IGrammar inner)
        {
            _innerFixture = innerFixture;
            _inner = inner;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            var innerPlan = _inner.CreatePlan(step, library);
            return new ImportedExecutionStep(_innerFixture, innerPlan);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            // TODO -- write a UT to pin this behavior down
            // This is important to get the right lists, *use* the lists
            // from the inner fixture here.
            return _inner.Compile(_innerFixture, cells);
        }

        public string Key { get; set; }
        public bool IsHidden { get; set; }
        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}