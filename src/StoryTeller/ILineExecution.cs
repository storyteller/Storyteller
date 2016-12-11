using System;
using System.Collections;

namespace StoryTeller
{
    public interface ILineExecution : IExecutionStep
    {
        void Execute(SpecContext context);
        object Position { get; set; }

        string Id { get; }
    }
}