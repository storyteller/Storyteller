using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class BatchWatcher
    {
        private readonly IDictionary<string, BatchRecord> _results = new Dictionary<string, BatchRecord>();
        private readonly TaskCompletionSource<IEnumerable<BatchRecord>> _task;

        public BatchWatcher(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(x => _results.Add(x.id, new BatchRecord{header = x}));
            _task = new TaskCompletionSource<IEnumerable<BatchRecord>>();
        }

        public Task<IEnumerable<BatchRecord>>  Task
        {
            get { return _task.Task; }
        }
        
        public void SpecHandled(SpecificationPlan plan, ISpecContext context)
        {
            var record = _results[plan.Specification.Id];
            record.results = context.FinalizeResults(plan.Attempts);
            record.specification = plan.Specification;

            if (IsCompleted()) _task.SetResult(_results.Values.ToArray());
        }
         

        public bool IsCompleted()
        {
            return _results.Values.All(x => x.HasResults());
        }
    }
}