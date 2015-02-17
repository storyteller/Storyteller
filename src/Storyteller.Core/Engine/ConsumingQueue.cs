using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public class ConsumingQueue : IDisposable, IConsumingQueue
    {
        private readonly BlockingCollection<SpecExecutionRequest> _collection =
            new BlockingCollection<SpecExecutionRequest>(new ConcurrentBag<SpecExecutionRequest>());

        private Task _readingTask;
        private readonly Action<SpecExecutionRequest> _handler;

        public ConsumingQueue(Action<SpecExecutionRequest> handler)
        {
            _handler = handler;
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
        }


        public void Enqueue(SpecExecutionRequest plan)
        {
            _collection.Add(plan);
        }

        private void runSpecs()
        {
            foreach (var request in _collection.GetConsumingEnumerable())
            {
                if (request.IsCancelled) continue;


                _handler(request);
            }
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(runSpecs);
        }
    }
}