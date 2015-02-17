using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public class ReaderQueue : IReaderQueue
    {
        private readonly IPlanningQueue _planning;
        private readonly BlockingCollection<SpecExecutionRequest> _collection = new BlockingCollection<SpecExecutionRequest>(new ConcurrentBag<SpecExecutionRequest>());
        private Task _readingTask;

        public ReaderQueue(IPlanningQueue planning)
        {
            _planning = planning;
        }

        public void Enqueue(SpecExecutionRequest request)
        {
            _collection.Add(request);
        }


        public void Start()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var request in _collection.GetConsumingEnumerable())
                {
                    if (request.IsCancelled) continue;

                    request.ReadXml();

                    _planning.Enqueue(request);
                }
            });
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
        }
    }
}