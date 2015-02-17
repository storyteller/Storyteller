using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine.UserInterface
{
    public interface IUserInterfaceObserver : IObserver
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
        void SpecQueued(SpecNode nodes);
    }
}