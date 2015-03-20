using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine.UserInterface
{
    public interface IUserInterfaceObserver 
    {
        void SendProgress(SpecProgress progress);
        void SpecStarted(SpecificationPlan plan);
        void SpecQueued(SpecNode nodes);
        void SendToClient(object message);
    }
}