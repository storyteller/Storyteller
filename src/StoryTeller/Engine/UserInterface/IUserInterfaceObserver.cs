using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public interface IUserInterfaceObserver 
    {
        void SendProgress(SpecProgress progress);
        void SendToClient(ClientMessage message);
    }
}