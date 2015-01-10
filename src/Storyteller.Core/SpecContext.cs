using System;
using System.Collections.Generic;
using FubuCore;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class SpecContext : ISpecContext
    {
        public readonly string Id = Guid.NewGuid().ToString();
        public readonly Stack<Node> Nodes = new Stack<Node>();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();

        public SpecContext()
        {
            Nodes.Push(new Specification {Id = Id});
        }

        public bool IsCancelled { get; set; }

        public bool Wait(Func<bool> condition, TimeSpan timeout)
        {
            throw new NotImplementedException();
        }

        public void LogResults(IEnumerable<IResultMessage> results)
        {
            results.Each(x => x.id = Id);
            Results.AddRange(results);
        }

        public void LogResult(IResultMessage result)
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