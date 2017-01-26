using System;
using System.Threading.Tasks;
using Alba;
using Baseline;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Equivalence;

namespace Storyteller.AspNetCore
{
    public class AspNetCoreSystem : ISystem
    {
        public static void Run<T>(string[] args) where T : class
        {
            var system = ForStartup<T>();
            StorytellerAgent.Run(args, system);
        }

        public static AspNetCoreSystem ForStartup<T>() where T : class
        {
            var system = new AspNetCoreSystem();
            system.Startup<T>();

            return system;
        }

        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());

        private Func<ISystemUnderTest> _systemBuilder;
        private ISystemUnderTest _systemUnderTest;
        private Task<ISystemUnderTest> _warmup;

        // TODO -- add one that uses Action<IApplicationBuilder> for more adhoc things

        public void Dispose()
        {
            _systemUnderTest?.Dispose();
        }

        public CellHandling Start()
        {
            if (_systemBuilder == null)
                throw new InvalidOperationException(
                    $"You must call {nameof(Startup)} to declare a Startup type for your application");

            _warmup = Task.Factory.StartNew(() =>
            {
                var sut = _systemBuilder();

                beforeAll(sut);

                return sut;
            });

            return CellHandling;
        }

        public IExecutionContext CreateContext()
        {
            if (_warmup != null)
                _warmup.Wait();
            else if (_systemUnderTest == null)
                _systemUnderTest = _warmup?.Result;

            beforeAll(_systemUnderTest);

            return new AspNetCoreContext(this);
        }

        public Task Warmup()
        {
            return _warmup;
        }

        protected void Startup<T>() where T : class
        {
            _systemBuilder = () => SystemUnderTest.ForStartup<T>().As<ISystemUnderTest>();
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
                context.State.Store(this);

                _parent.beforeEach(_parent._systemUnderTest, context);
            }

            public void AfterExecution(ISpecContext context)
            {
                // TODO -- do logging of the requests here
                _parent.afterEach(_parent._systemUnderTest, context);
            }

            public T GetService<T>()
            {
                return _parent._systemUnderTest.Services.GetService(typeof(T)).As<T>();
            }
        }
    }
}