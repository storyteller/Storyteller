using StoryTeller.Engine;

namespace StoryTeller.Grammars.Importing
{
    public class ImportedExecutionStep : IExecutionStep
    {
        private readonly Fixture _innerFixture;
        private readonly IExecutionStep _inner;

        public ImportedExecutionStep(Fixture innerFixture, IExecutionStep inner)
        {
            _innerFixture = innerFixture;
            _inner = inner;
        }

        public int Count()
        {
            return _inner.Count();
        }

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            _innerFixture.Context = gatherer.CurrentContext;
            _inner.AcceptVisitor(gatherer);
        }
    }
}