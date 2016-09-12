namespace ST.Client
{
    public interface IRemoteController
    {
        string WebSocketAddress { get; set; }
        void SendJsonMessage(string json);
        void AddListener(object listener);
        void Recycle();
        void SendMessage<T>(T message);
        RemoteController.ResponseExpression Send<T>(T message);
    }
}