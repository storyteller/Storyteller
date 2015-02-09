using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class BatchWatcher
    {
        private readonly IDictionary<string, SpecResult> _results = new Dictionary<string, SpecResult>();
        private readonly TaskCompletionSource<IEnumerable<SpecResult>> _task;

        public BatchWatcher(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(x => _results.Add(x.id, new SpecResult{node = x}));
            _task = new TaskCompletionSource<IEnumerable<SpecResult>>();
        }

        public Task<IEnumerable<SpecResult>>  Task
        {
            get { return _task.Task; }
        }
        
        public void SpecHandled(SpecificationPlan plan, ISpecContext context)
        {
            _results[plan.Specification.Id].counts = context.Counts;

            if (IsCompleted()) _task.SetResult(_results.Values.ToArray());
        }
         

        public bool IsCompleted()
        {
            return _results.Values.All(x => x.counts != null);
        }
    }
}