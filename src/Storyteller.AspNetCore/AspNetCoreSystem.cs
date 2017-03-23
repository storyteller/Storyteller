using System;
using System.Threading.Tasks;
using Alba;
using Baseline;
using Baseline.Conversion;
using StoryTeller.Engine;
using StoryTeller.Equivalence;

namespace StoryTeller.AspNetCore
{
    public class AspNetCoreSystem<T> : AspNetCoreSystem where T : class
    {
        public AspNetCoreSystem() : base(() => buildSystem())
        {
        }

        // TODO -- figure out how to be able to modify the app
        // defined by the Startup class like we could do w/ FubuMVC/Serenity
        // think extra middleware, replace services w/ stubs, extra logging
        protected static ISystemUnderTest buildSystem()
        {
            return SystemUnderTest.ForStartup<T>();
        }
    }

    public class AspNetCoreSystem : ISystem
    {
        public static void Run<T>(string[] args) where T : class
        {
            var system = new AspNetCoreSystem(() => SystemUnderTest.ForStartup<T>());
            StorytellerAgent.Run(args, system);
        }



        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());

        private readonly Task<ISystemUnderTest> _warmup;

        protected AspNetCoreSystem(Func<ISystemUnderTest> builder)
        {
            _warmup = Task.Factory.StartNew(() =>
            {
                var sut = builder();

                beforeAll(sut);

                return sut;
            });
        }

        // TODO -- add one that uses Action<IApplicationBuilder> for more adhoc things

        public ISystemUnderTest System => _warmup.Result;

        public void Dispose()
        {
            System.Dispose();
        }

        public CellHandling Start()
        {
            return CellHandling;
        }

        public IExecutionContext CreateContext()
        {
            _warmup?.Wait();

            beforeAll(System);

            return new AspNetCoreContext(this);
        }

        public Task Warmup()
        {
            return _warmup;
        }

        protected virtual void beforeAll(ISystemUnderTest sut)
        {
            // Nothing
        }

        protected virtual void afterEach(ISystemUnderTest sut, ISpecContext context)
        {
            // nothing
        }

        protected virtual void beforeEach(ISystemUnderTest sut, ISpecContext context)
        {
            // nothing
        }

        protected virtual void afterAll()
        {
            // nothing
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
                context.State.Store(_parent.System);

                _parent.beforeEach(_parent.System, context);
            }

            public void AfterExecution(ISpecContext context)
            {
                // TODO -- do logging of the requests here
                _parent.afterEach(_parent.System, context);
            }

            public T GetService<T>()
            {
                return _parent.System.Services.GetService(typeof(T)).As<T>();
            }
        }

        
    }
}
