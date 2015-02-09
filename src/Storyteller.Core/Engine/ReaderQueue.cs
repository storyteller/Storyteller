using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class ReaderQueue : IReaderQueue
    {
        private readonly IPlanningQueue _planning;
        private readonly BlockingCollection<SpecNode> _collection = new BlockingCollection<SpecNode>(new ConcurrentBag<SpecNode>());
        private Task _readingTask;

        public ReaderQueue(IPlanningQueue planning)
        {
            _planning = planning;
        }

        public void Enqueue(SpecNode node)
        {
            _collection.Add(node);
        }

        public void Enqueue(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(file => Enqueue((SpecNode) file));
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var node in _collection.GetConsumingEnumerable())
                {
                    // TODO -- error handling here
                    var spec = XmlReader.ReadFromFile(node.filename);
                    spec.Id = node.id;

                    _planning.Enqueue(spec);
                }
            });
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
            _readingTask.Dispose();
        }
    }
}