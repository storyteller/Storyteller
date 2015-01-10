using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing
{
    public class RecordingSpecContext : ISpecContext
    {
        public readonly string Id = Guid.NewGuid().ToString();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        public bool IsCancelled { get; set; }

        public RecordingSpecContext()
        {
            Nodes.Push(new Specification{Id = Id});
        }

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

        public readonly Stack<Node> Nodes = new Stack<Node>(); 

        public void Push(Node node)
        {
            if (node.Id.IsEmpty()) throw new ArgumentOutOfRangeException("node must have a non-empty id");
            Nodes.Push(node);
        }

        public void Pop()
        {
            Nodes.Pop();
        }

        public void AssertTheOnlyResultIs(IResultMessage expectation)
        {
            expectation.id = Id;

            if (Results.Count == 0)
            {
                Assert.Fail("No results were captured");
            }

            if (Results.Count > 1)
            {
                Assert.Fail("Multiple results were captured: " + Results.Select(x => x.ToString()).Join(", "));
            }

            Results.Single().ShouldEqual(expectation);
        }
    }
}