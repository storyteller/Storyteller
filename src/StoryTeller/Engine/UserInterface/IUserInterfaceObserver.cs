using StoryTeller.Engine.Stepthrough;
using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public interface IUserInterfaceObserver 
    {
        void SendProgress(SpecProgress progress);
        void SendToClient(ClientMessage message);

        void SendNextStep(NextStep next);
        SpecProgress LastProgress { get; }
        NextStep NextStep { get; }
    }
}