using System;

namespace StoryTeller.Engine
{
    // SAMPLE: IExecutionContext
    public interface IExecutionContext : IDisposable
    {
        // AfterExecution is a hook to gather up custom logging
        // or to make custom assertions against the specification
        // execution
        void AfterExecution(ISpecContext context);

        T GetService<T>();
    }
    // ENDSAMPLE
}