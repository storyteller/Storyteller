namespace ST.Client
{
    public interface IClientConnector
    {
        string WebSocketsAddress { get; }
        void Start();

        void SendMessageToClient(object message);
    }
}