using System.Threading.Tasks;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public interface IRemoteController
    {
        string WebSocketAddress { get; set; }
        SystemRecycled LatestSystemRecycled { get; }
        IMessagingHub Messaging { get; }
        void SendJsonMessage(string json);
        void AddListener(object listener);
        Task<SystemRecycled> Recycle();
        void SendMessage<T>(T message);
        RemoteController.ResponseExpression Send<T>(T message);
        void Teardown();
        Task<SystemRecycled> Start();
        void AssertValid();
    }
}