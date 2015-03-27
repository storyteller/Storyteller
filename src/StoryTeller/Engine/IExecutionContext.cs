using System;
using FubuCore;

namespace StoryTeller.Engine
{
    public interface IExecutionContext : IDisposable
    {
        IServiceLocator Services { get; }
        void AfterExecution(ISpecContext context);
    }
}