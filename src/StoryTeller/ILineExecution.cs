using System;
using System.Collections;
using System.Threading;
using System.Threading.Tasks;

namespace StoryTeller
{
    [Obsolete("Goes away in v6")]
    public interface ILineExecution : IExecutionStep
    {
        void Execute(SpecContext context);

        Task ExecuteAsync(SpecContext context, CancellationToken cancellation);

        object Position { get; set; }

        string Id { get; }
    }
}
