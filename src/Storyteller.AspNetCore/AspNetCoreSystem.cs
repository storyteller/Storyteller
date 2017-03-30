using System;
using System.Threading.Tasks;
using Alba;
using Baseline;
using Baseline.Conversion;
using StoryTeller.Engine;
using StoryTeller.Equivalence;

namespace StoryTeller.AspNetCore
{
    public interface IAspNetCoreSystem : ISystem
    {
        ISystemUnderTest System { get; }

        void BeforeAll(ISystemUnderTest sut);

        void AfterEach(ISystemUnderTest sut, ISpecContext context);

        void BeforeEach(ISystemUnderTest sut, ISpecContext context);

        void AfterAll();
    }
    public class AspNetCoreSystem<T> :IAspNetCoreSystem where T : class
    {
        public readonly CellHandling CellHandling = new CellHandling(new EquivalenceChecker(), new Conversions());

        private readonly Task<ISystemUnderTest> _warmup;

        public static void Run(string[] args)
        {
            var system = new AspNetCoreSystem<T>();
            StorytellerAgent.Run(args, system);
        }

        protected AspNetCoreSystem()
        {
            Func<ISystemUnderTest> builder = () => SystemUnderTest.ForStartup<T>();
            _warmup = Task.Factory.StartNew(() =>
            {
                var sut = builder();

                BeforeAll(sut);

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

            BeforeAll(System);

            return new AspNetCoreContext(this);
        }

        public Task Warmup()
        {
            return _warmup;
        }

        public virtual void BeforeAll(ISystemUnderTest sut)
        {
            // Nothing
        }

        public virtual void AfterEach(ISystemUnderTest sut, ISpecContext context)
        {
            // nothing
        }

        public virtual void BeforeEach(ISystemUnderTest sut, ISpecContext context)
        {
            // nothing
        }

        public virtual void AfterAll()
        {
            // nothing
        }

        public class AspNetCoreContext : IExecutionContext
        {
            private readonly IAspNetCoreSystem _parent;

            public AspNetCoreContext(IAspNetCoreSystem parent)
            {
                _parent = parent;
            }

            public void Dispose()
            {
            }

            public void BeforeExecution(ISpecContext context)
            {
                context.State.Store(_parent.System);

                _parent.BeforeEach(_parent.System, context);
            }

            public void AfterExecution(ISpecContext context)
            {
                // TODO -- do logging of the requests here
                _parent.AfterEach(_parent.System, context);
            }

            public S GetService<S>()
            {
                return _parent.System.Services.GetService(typeof(S)).As<S>();
            }
        }

    }
}
