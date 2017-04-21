using System;
using System.Collections.Generic;
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

    public class AspNetCoreSystem : SystemUnderTest, ISystem, IStartupFilter
    {
        public const string HttpRequestSubject = "Http Request";

        public static void Run<T>(string[] args) where T : class
        {
            var system = new AspNetCoreSystem();
            system.UseStartup<T>();

            StorytellerAgent.Run(args, system);
        }



        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());
        private ISpecContext _currentContext;

        public AspNetCoreSystem()
        {
            ConfigureServices(_ => _.AddTransient<IStartupFilter>(x => this));
        }

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
            return Task.Factory.StartNew(() =>
            {
                Bootstrap();
                beforeAll();
            });
        }

        protected virtual void beforeAll()
        {
            // Nothing
        }

        protected virtual void afterEach(ISystemUnderTest sut, ISpecContext context)
        {
            // nothing
        }

        protected virtual void beforeEach(ISystemUnderTest sut, ISpecContext context)
        {
            _currentContext = context;
            // nothing
        }

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

                _parent.beforeEach(_parent, context);
            }

            public void AfterExecution(ISpecContext context)
            {
                _parent.afterEach(_parent, context);
            }

            public T GetService<T>()
            {
                return _parent.Services.GetService(typeof(T)).As<T>();
            }
        }



        
    }
}
