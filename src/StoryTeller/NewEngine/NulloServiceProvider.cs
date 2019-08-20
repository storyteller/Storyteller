using System;
using Baseline;

namespace StoryTeller.NewEngine
{
    internal class NulloServiceProvider : IServiceProvider
    {
        public object GetService(Type serviceType)
        {
            return null;
        }
    }

    public class InMemoryServiceProvider : IServiceProvider
    {
        public readonly LightweightCache<Type, object> Services = new LightweightCache<Type, object>(t => null);
        
        public object GetService(Type serviceType)
        {
            return Services[serviceType];
        }

        public void Add<T>(T service)
        {
            Services[typeof(T)] = service;
        }
    }
}
