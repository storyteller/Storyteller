using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing
{
    public class RecordingSpecContext : ISpecContext
    {
        public readonly string Id = Guid.NewGuid().ToString();

        public CancellationTokenSource CancellationTokenSource = new CancellationTokenSource();

        public CancellationToken Cancellation
        {
            get { return CancellationTokenSource.Token; }
        }

        public bool Wait(Func<bool> condition, TimeSpan timeout)
        {
            throw new NotImplementedException();
        }

        public readonly IList<IResultMessage> Results = new List<IResultMessage>();

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

        public void LogResults(IEnumerable<IResultMessage> results)
        {
            results.Each(x => x.id = Id);
            Results.AddRange(results);
        }

        public void LogResult(IResultMessage result)
        {
            result.id = Id;
            Results.Add(result);
        }
    }
}