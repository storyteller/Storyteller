namespace StoryTeller.Remotes.Messaging
{
    public interface IRemoteListener
    {
        void Send(string json);
    }
}