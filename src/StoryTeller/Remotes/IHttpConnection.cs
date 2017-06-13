namespace StoryTeller.Remotes
{
    public interface IHttpConnection
    {
        void SendMessage(string json);
    }
}