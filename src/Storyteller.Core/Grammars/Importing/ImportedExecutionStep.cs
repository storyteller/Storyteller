using Storyteller.Core.Engine;

namespace Storyteller.Core.Grammars.Importing
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

        public void AcceptVisitor(IStepExecutor executor)
        {
            _innerFixture.Context = executor.CurrentContext;
            _inner.AcceptVisitor(executor);
        }
    }
}