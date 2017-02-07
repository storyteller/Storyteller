using System;

namespace StoryTeller
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class PerfLimitAttribute : Attribute
    {
        public long MaximumRuntimeInMilliseconds { get; }

        public PerfLimitAttribute(long maximumRuntimeInMilliseconds)
        {
            MaximumRuntimeInMilliseconds = maximumRuntimeInMilliseconds;
        }
    }
}