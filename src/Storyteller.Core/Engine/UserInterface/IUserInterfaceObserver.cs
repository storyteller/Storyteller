using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine.UserInterface
{
    public interface IUserInterfaceObserver 
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
        void SpecQueued(SpecNode nodes);
        void SendToClient(object o);
    }
}