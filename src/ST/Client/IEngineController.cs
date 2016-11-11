using System.Threading.Tasks;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public interface IEngineController
    {
        SystemRecycled LatestSystemRecycled { get; }
        IMessagingHub Messaging { get; }
        void SendJsonMessage(string json);
        void AddListener(object listener);
        Task<SystemRecycled> Recycle();
        void SendMessage<T>(T message);
        ResponseExpression Send<T>(T message);
        void Teardown();
        Task<SystemRecycled> Start();
        void AssertValid();
    }
}