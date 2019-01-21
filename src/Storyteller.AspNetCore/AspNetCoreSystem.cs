using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Alba;
using Baseline;
using Baseline.Conversion;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using StoryTeller.Engine;
using StoryTeller.Equivalence;

namespace StoryTeller.AspNetCore
{

    public class AspNetCoreSystem : ISystem, IStartupFilter
    {
        public const string HttpRequestSubject = "Http Request";


        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());
        private ISpecContext _currentContext;

        public AspNetCoreSystem(IWebHostBuilder builder)
        {
            builder.ConfigureServices(_ => _.AddTransient<IStartupFilter>(x => this));
            AlbaSystem = new SystemUnderTest(builder);
        }

        /// <summary>
        /// The underlying Alba wrapper for your ASP.Net Core system
        /// </summary>
        public SystemUnderTest AlbaSystem { get; }

        public void RequestPerformanceThresholdIs(int milliseconds)
        {
            PerformancePolicies.PerfLimit(milliseconds, r => r.Type == HttpRequestSubject);
        }

        public CellHandling Start()
        {
            return CellHandling;
        }

        IExecutionContext ISystem.CreateContext()
        {
            return new AspNetCoreContext(this);
        }

        Task ISystem.Warmup()
        {
            return Task.Factory.StartNew(beforeAll);
        }

        // SAMPLE: AspNetCoreSystem-template-methods
        /// <summary>
        /// Executes once before any specifications are run
        /// </summary>
        protected virtual void beforeAll()
        {
            // Nothing
        }

        /// <summary>
        /// Executes immediately before a specification is executed
        /// </summary>
        /// <param name="sut"></param>
        /// <param name="context"></param>
        protected virtual void beforeEach(ISpecContext context)
        {
            // nothing
        }

        /// <summary>
        /// Executes immediately after a specification is executed
        /// </summary>
        /// <param name="sut"></param>
        /// <param name="context"></param>
        protected virtual void afterEach(ISpecContext context)
        {
            // nothing
        }
        // ENDSAMPLE



        Action<IApplicationBuilder> IStartupFilter.Configure(Action<IApplicationBuilder> inner)
        {
            return builder =>
            {
                // Add some wrapping middleware here
                builder.Use(next =>
                {
                    return async context =>
                    {
                        if (_currentContext == null)
                        {
                            await next(context).ConfigureAwait(false);
                        }
                        else
                        {
                            var perf = _currentContext.Timings.Subject(HttpRequestSubject, context.Request.PathBase);

                            await next(context).ConfigureAwait(false);

                            _currentContext.Timings.End(perf);

                            _currentContext.Reporting.ReporterFor<HttpRequestReport>()
                                .Record(context, perf);
                        }

                        
                    };
                });

                inner(builder);
            };
        }

        public class AspNetCoreContext : IExecutionContext
        {
            private readonly AspNetCoreSystem _parent;

            public AspNetCoreContext(AspNetCoreSystem parent)
            {
                _parent = parent;
            }

            public void Dispose()
            {
            }

            public void BeforeExecution(ISpecContext context)
            {
                context.State.Store(_parent);
                _parent._currentContext = context;

                _parent.beforeEach(context);
            }

            public void AfterExecution(ISpecContext context)
            {
                _parent.afterEach(context);
            }

            public T GetService<T>()
            {
                return _parent.AlbaSystem.Services.GetService(typeof(T)).As<T>();
            }
        }


        public void Dispose()
        {
            _currentContext?.Dispose();
        }
    }
}
