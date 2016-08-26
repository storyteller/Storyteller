namespace ST.Client
{
    public interface IClientConnector
    {
        string WebSocketsAddress { get; }

        void SendMessageToClient(object message);
    }
}