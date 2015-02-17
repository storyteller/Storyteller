using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine.UserInterface
{
    public interface IUserInterfaceObserver : IResultObserver
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
        void SpecQueued(SpecNode nodes);
        void SpecExecutionFinished(SpecNode node, Counts counts);
    }
}