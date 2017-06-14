namespace StoryTeller.Remotes
{
    public interface ISocketConnection
    {
        void SendMessage(string json);
    }
}