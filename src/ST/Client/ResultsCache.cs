using System.Collections.Generic;
using System.Linq;
using FubuCore.Util;
using StoryTeller.Messages;

namespace ST.Client
{
    public class ResultsCache
    {
        private readonly Cache<string, Queue<SpecExecutionCompleted>> _results =
            new Cache<string, Queue<SpecExecutionCompleted>>(_ => new Queue<SpecExecutionCompleted>());


        public void Store(SpecExecutionCompleted result)
        {
            var queue = _results[result.Id];
            queue.Enqueue(result);

            while (queue.Count > 5)
            {
                queue.Dequeue();
            }
        }

        public IEnumerable<SpecExecutionCompleted> ResultsFor(string id)
        {
            return _results[id].ToArray().OrderByDescending(x => x.Time).ToArray();
        }

        public SpecExecutionCompleted LastResultFor(string id)
        {
            return ResultsFor(id).FirstOrDefault();
        }

        public void ClearAll()
        {
            _results.ClearAll();
        }
    }
}