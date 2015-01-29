using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IObserver
    {
        void SpecExecutionFinished(ISpecContext context, SpecificationPlan plan);
        void Handle<T>(T message) where T : IResultMessage;
        void FixturesRead(FixtureLibrary library);
        void SpecRequeued(SpecificationPlan plan, ISpecContext context);

        void SpecHandled(string id);
    }
}