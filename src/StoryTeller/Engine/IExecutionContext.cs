using System;

namespace StoryTeller.Engine
{
    // SAMPLE: IExecutionContext
    public interface IExecutionContext : IDisposable
    {
        void AfterExecution(ISpecContext context);
        T GetService<T>();
    }
    // ENDSAMPLE
}