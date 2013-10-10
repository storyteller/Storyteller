using System;
using FubuCore;
using FubuCore.Binding;

namespace StoryTeller.Engine
{
    public interface IExecutionContext : IDisposable
    {
        IServiceLocator Services { get; }
        BindingRegistry BindingRegistry { get; }
    }
}