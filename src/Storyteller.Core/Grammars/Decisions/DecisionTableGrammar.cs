using Storyteller.Core.Grammars.Tables;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Decisions
{
    public abstract class DecisionTableGrammar : IGrammar, IBeforeAndAfter
    {
        private readonly TableGrammar _inner;

        public DecisionTableGrammar(string label)
        {
            _inner = new TableGrammar(new TableLineGrammar(this))
                .Titled(label).LeafName("table");
        }

        public string Key { get; set; }

        void IBeforeAndAfter.BeforeLine()
        {
            beforeLine();
        }

        void IBeforeAndAfter.AfterLine()
        {
            afterLine();
        }

        protected virtual void beforeLine()
        {
        }

        protected virtual void afterLine()
        {
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            return _inner.CreatePlan(step, library);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return _inner.Compile(fixture, cells);
        }
    }
}