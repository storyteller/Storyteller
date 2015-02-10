using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;

namespace Storyteller.Core.Engine.UserInterface
{
    public interface IUserInterfaceObserver : IObserver
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
    }
}