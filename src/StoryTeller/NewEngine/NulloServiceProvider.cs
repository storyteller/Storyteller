using System;

namespace StoryTeller.NewEngine
{
    internal class NulloServiceProvider : IServiceProvider
    {
        public object GetService(Type serviceType)
        {
            return null;
        }
    }
}