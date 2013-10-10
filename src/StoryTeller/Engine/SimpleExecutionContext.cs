using System;
using FubuCore;
using FubuCore.Binding;
using FubuCore.Formatting;

namespace StoryTeller.Engine
{
    public class SimpleExecutionContext : IExecutionContext
    {
        public SimpleExecutionContext()
        {
            Services = new InMemoryServiceLocator();
            BindingRegistry = new BindingRegistry();

            var stringifier = new Stringifier();
            Services.Add(stringifier);

            Services.Add(new EquivalenceChecker());
        }

        void IDisposable.Dispose()
        {
            
        }

        IServiceLocator IExecutionContext.Services { get { return Services; } }

        public InMemoryServiceLocator Services { get; private set; }


        public BindingRegistry BindingRegistry { get; private set; }
    }
}