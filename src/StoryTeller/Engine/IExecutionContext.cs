using System;

namespace StoryTeller.Engine
{
    // SAMPLE: IExecutionContext
    public interface IExecutionContext : IDisposable
    {
        // BeforeExecution() is a hook to potentially
        // set up state or do any kind of custom logging
        void BeforeExecution(ISpecContext context);
        
        // AfterExecution is a hook to gather up custom logging
        // or to make custom assertions against the specification
        // execution
        void AfterExecution(ISpecContext context);

        /// <summary>
        /// Retrieve a service from the running system
        /// by type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        T GetService<T>();
    }
    // ENDSAMPLE
}