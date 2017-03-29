using System.Threading.Tasks;
using StoryTeller.Engine;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class CompositeSystemTester
    {
        readonly StubSystem theInnerSystem = new StubSystem();
        private CompositeSystem theSystem;

        public CompositeSystemTester()
        {
            var handling = theInnerSystem.Start();
            theSystem = new CompositeSystem(theInnerSystem, handling);
        }

        [Fact]
        public async Task warmup_starts_the_inner_and_all_of_the_extensions()
        {
            await theSystem.Warmup();

            theInnerSystem.WasStarted.ShouldBeTrue();
            theInnerSystem.Extension1.WasStarted.ShouldBeTrue();
            theInnerSystem.Extension2.WasStarted.ShouldBeTrue();
        }

        [Fact]
        public void dispose_disposes_the_inner_and_all_the_extensions()
        {
            theSystem.Dispose();

            theInnerSystem.WasDisposed.ShouldBeTrue();
            theInnerSystem.Extension1.WasDisposed.ShouldBeTrue();
            theInnerSystem.Extension2.WasDisposed.ShouldBeTrue();
        }

        [Fact]
        public void every_extension_and_the_inner_system_on_before_execution()
        {
            var specContext = SpecContext.Basic();

            var execution = theSystem.CreateContext();

            execution.BeforeExecution(specContext);

            theInnerSystem.LastBeforeEach.ShouldBeTheSameAs(specContext);
            theInnerSystem.Extension1.LastBeforeEach.ShouldBeTheSameAs(specContext);
            theInnerSystem.Extension2.LastBeforeEach.ShouldBeTheSameAs(specContext);
        }

        [Fact]
        public void every_extension_and_the_inner_system_are_called_on_after_extension()
        {
            var specContext = SpecContext.Basic();

            var execution = theSystem.CreateContext();

            execution.AfterExecution(specContext);

            theInnerSystem.LastAfterEach.ShouldBeTheSameAs(specContext);
            theInnerSystem.Extension1.LastAfterEach.ShouldBeTheSameAs(specContext);
            theInnerSystem.Extension2.LastAfterEach.ShouldBeTheSameAs(specContext);
        }
    }

    public class StubSystem : SimpleSystem
    {
        public readonly StubExtension1 Extension1 = new StubExtension1();
        public readonly StubExtension1 Extension2 = new StubExtension2();

        protected override void configureCellHandling(CellHandling handling)
        {
            handling.Extensions.Add(Extension1);
            handling.Extensions.Add(Extension2);
        }

        public override void Dispose()
        {
            WasDisposed = true;
        }

        public bool WasDisposed { get; set; }

        public override void BeforeEach(SimpleExecutionContext execution, ISpecContext context)
        {
            LastBeforeEach = context;
        }

        public ISpecContext LastBeforeEach { get; set; }

        public override void AfterEach(ISpecContext context)
        {
            LastAfterEach = context;
        }

        public ISpecContext LastAfterEach { get; set; }

        public override Task Warmup()
        {
            return Task.Factory.StartNew(() =>
            {
                WasStarted = true;
            });
        }

        public bool WasStarted { get; set; }
    }

    public class StubExtension1 : IExtension
    {
        public void Dispose()
        {
            WasDisposed = true;
        }

        public bool WasDisposed { get; set; }

        public Task Start()
        {
            return Task.Factory.StartNew(() =>
            {
                WasStarted = true;
            });
        }

        public bool WasStarted { get; set; }

        public void BeforeEach(ISpecContext context)
        {
            LastBeforeEach = context;
        }

        public ISpecContext LastBeforeEach { get; set; }

        public void AfterEach(ISpecContext context)
        {
            LastAfterEach = context;
        }

        public ISpecContext LastAfterEach { get; set; }
    }

    public class StubExtension2 : StubExtension1 { }
}