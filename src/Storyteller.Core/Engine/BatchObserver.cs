using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine
{
    public class BatchObserver : IObserver
    {
        private readonly IDictionary<string, bool> _finished = new Dictionary<string, bool>();
        private TaskCompletionSource<bool> _task;

        public Task Watch(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(x => _finished.Add(x.id, false));
            _task = new TaskCompletionSource<bool>();

            return _task.Task;
        }

        public void SpecExecutionFinished(ISpecContext context, SpecificationPlan plan)
        {
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
        }

        public void FixturesRead(FixtureLibrary library)
        {
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
        }

        public void SpecHandled(string id)
        {
            _finished[id] = true;

            if (_finished.Values.All(x => x)) _task.SetResult(true);
        }
    }
}