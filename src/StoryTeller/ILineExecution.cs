using System;
using System.Collections;
using System.Threading;
using System.Threading.Tasks;

namespace StoryTeller
{
    public interface ILineExecution : IExecutionStep
    {
        void Execute(SpecContext context);

        Task ExecuteAsync(SpecContext context, CancellationToken cancellation);

        object Position { get; set; }

        string Id { get; }
    }
}