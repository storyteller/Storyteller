namespace Storyteller.Core.Remotes.Messaging
{
    public interface IRemoteListener
    {
        void Send(string json);
    }
}