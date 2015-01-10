using System;
using System.Collections.Generic;
using FubuCore;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IExecutionObserver
    {
        void Handle<T>(T message);
    }

    public class NulloExecutionObserver : IExecutionObserver
    {
        public void Handle<T>(T message)
        {
            // Nothing
        }
    }

    public class SpecContext : ISpecContext
    {
        private readonly IExecutionObserver _observer;

        public static SpecContext Basic()
        {
            return new SpecContext(new NulloExecutionObserver());
        }

        public static SpecContext ForTesting()
        {
            var context = Basic();
            context.Nodes.Push(new Specification { Id = Guid.NewGuid().ToString() });

            return context;
        }

        public readonly Stack<Node> Nodes = new Stack<Node>();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();

        public SpecContext(IExecutionObserver observer)
        {
            _observer = observer;
            
        }

        public bool IsCancelled { get; set; }

        public bool Wait(Func<bool> condition, TimeSpan timeout)
        {
            throw new NotImplementedException();
        }

        public void LogResults(IEnumerable<CellResult> results)
        {
            results.Each(x => LogResult(x));
        }

        public void LogResult<T>(T result) where T : IResultMessage
        {
            result.id = Nodes.Peek().Id;
            Results.Add(result);
        }

        public void LogException(Exception ex, Stage stage = Stage.body)
        {
            LogResult(new StepResult(ResultStatus.error) {error = ex.ToString(), stage = stage});
        }

        public void Push(Node node)
        {
            if (node.Id.IsEmpty()) throw new ArgumentOutOfRangeException("node must have a non-empty id");
            Nodes.Push(node);
        }

        public void Pop()
        {
            Nodes.Pop();
        }
    }
}