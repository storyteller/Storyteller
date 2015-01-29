using System;
using FubuCore;

namespace Storyteller.Core.Engine
{
    public interface IExecutionContext : IDisposable
    {
        IServiceLocator Services { get; }
    }
}