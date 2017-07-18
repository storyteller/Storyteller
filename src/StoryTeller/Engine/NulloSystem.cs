using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Baseline;

namespace StoryTeller.Engine
{
    public abstract class SimpleSystem : ISystem
    {
        public virtual void Dispose()
        {
        }

        public CellHandling Start()
        {
            var handling = CellHandling.Basic();
            configureCellHandling(handling);

            return handling;
        }

        /// <summary>
        /// Template method you can override to provide CellHandling
        /// customizations
        /// </summary>
        /// <param name="handling"></param>
        protected virtual void configureCellHandling(CellHandling handling)
        {
            // Nothing
        }

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext(this);
        }

        public IRunExecutionContext CreateRunExecutionContext()
        {
            return null;
        }

        /// <summary>
        /// Executes before every single specification run
        /// </summary>
        /// <param name="execution"></param>
        /// <param name="context"></param>
        public virtual void BeforeEach(SimpleExecutionContext execution, ISpecContext context)
        {
            // Nothing
        }

        /// <summary>
        /// Executes immediately after each specification run.
        /// </summary>
        /// <param name="context"></param>
        public virtual void AfterEach(ISpecContext context)
        {
            // Nothing
        }

        /// <summary>
        /// Starts up the application in a background thread.
        /// Returns a Task.CompletedTask by default.
        /// </summary>
        /// <returns></returns>
        public virtual Task Warmup()
        {
            return Task.CompletedTask;
        }
    }


    public class NulloSystem : ISystem
    {

        private readonly LightweightCache<Type, object> _services = new LightweightCache<Type, object>();

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext(_services);
        }

        public IRunExecutionContext CreateRunExecutionContext()
        {
            return null;
        }

        public void Register<T>(T service)
        {
            _services[typeof(T)] = service;
        }

        public Task Recycle()
        {
            return Task.FromResult("recycled");
        }

        public CellHandling Start()
        {
            return CellHandling.Basic();
        }

        public void Dispose()
        {
        }

        public Task Warmup()
        {
            return Task.FromResult(string.Empty);
        }
    }

    public class SimpleExecutionContext : IExecutionContext
    {
        private readonly SimpleSystem _system;
        private readonly LightweightCache<Type, object> _services;

        public SimpleExecutionContext()
        {
            _services = new LightweightCache<Type, object>();
        }

        public void Register<T>(T service)
        {
            _services[typeof(T)] = service;
        }

        internal SimpleExecutionContext(LightweightCache<Type, object> services)
        {
            _services = services;
        }

        public SimpleExecutionContext(SimpleSystem system)
        {
            _system = system;
        }

        void IDisposable.Dispose()
        {
        }

        public T GetService<T>()
        {
            return (T) _services[typeof(T)];
        }

        public void AfterExecution(ISpecContext context)
        {
            _system?.AfterEach(context);
        }

        public void BeforeExecution(ISpecContext context)
        {
            _system?.BeforeEach(this, context);
        }
    }
}