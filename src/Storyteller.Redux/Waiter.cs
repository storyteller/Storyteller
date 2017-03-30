using System.Collections.Generic;
using System.Threading.Tasks;

namespace Storyteller.Redux
{
    public class Waiter
    {
        private readonly IList<Waiter> _collection;
        private readonly TaskCompletionSource<int> _source = new TaskCompletionSource<int>();

        public Waiter(int startingVersion, IList<Waiter> collection)
        {
            StartingVersion = startingVersion;
            _collection = collection;
        }

        public int StartingVersion { get; }

        public Task<int> Task => _source.Task;

        public void Finish(int version)
        {
            if (version > StartingVersion && !_source.Task.IsCompleted)
            {
                _source.SetResult(version);
                _collection.Remove(this);
            }
        }
    }
}