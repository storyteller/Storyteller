using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Grammars;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine
{
    public class BatchWatcher
    {
        private readonly IDictionary<string, BatchRecord> _records = new Dictionary<string, BatchRecord>();
        private readonly TaskCompletionSource<IEnumerable<BatchRecord>> _task;

        public BatchWatcher(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(x => _records.Add(x.id, new BatchRecord{header = x}));
            _task = new TaskCompletionSource<IEnumerable<BatchRecord>>();
        }

        public Task<IEnumerable<BatchRecord>>  Task
        {
            get { return _task.Task; }
        }
        
        public void SpecHandled(SpecificationPlan plan, SpecResults specResults)
        {
            var record = _records[plan.Specification.Id];
            record.results = specResults;
            record.specification = plan.Specification;

            if (IsCompleted()) _task.SetResult(_records.Values.ToArray());
        }
         

        public bool IsCompleted()
        {
            return _records.Values.All(x => x.HasResults());
        }
    }
}