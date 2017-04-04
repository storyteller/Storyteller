using System;
using System.Threading.Tasks;
using Alba;
using Baseline;
using Baseline.Conversion;
using StoryTeller.Engine;
using StoryTeller.Equivalence;

namespace StoryTeller.AspNetCore
{

    public class AspNetCoreSystem : ISystem
    {
        public static void Run<T>(string[] args) where T : class
        {
            var system = new AspNetCoreSystem();
            system.System.UseStartup<T>();

            StorytellerAgent.Run(args, system);
        }



        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());
        public readonly SystemUnderTest System = new SystemUnderTest();


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
            beforeAll(System);

            return new AspNetCoreContext(this);
        }

        public Task Warmup()
        {
            return Task.Factory.StartNew(() =>
            {
                System.Bootstrap();
            });
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
