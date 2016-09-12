using System.Threading.Tasks;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface IRemoteController
    {
        string WebSocketAddress { get; set; }
        void SendJsonMessage(string json);
        void AddListener(object listener);
        Task<SystemRecycled> Recycle();
        void SendMessage<T>(T message);
        RemoteController.ResponseExpression Send<T>(T message);
    }
}