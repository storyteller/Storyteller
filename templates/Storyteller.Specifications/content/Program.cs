using System;
using StoryTeller;
using StoryTeller.Engine;
using System.Threading.Tasks;

namespace StorytellerSpecs
{
    internal class Program : StoryTeller.Engine.SimpleSystem
    {
        public static int Main(string[] args)
        {
            return StorytellerAgent.Run<Program>(args);
        }

        protected override void configureCellHandling(CellHandling handling)
        {
            // Allows you to apply customizations to CellHandling, register
            // custom equality checks, custom type converters, register
            // system level data lists
        }

        public override void BeforeEach(SimpleExecutionContext execution, ISpecContext context)
        {
            // Executes before each specification run
            // Handy for setting up expected state or cleaning
            // up state left over from previous tests
        }

        public override void AfterEach(ISpecContext context)
        {
            // Executes after each specification run
            // Handy for state cleanup
        }

        public override Task Warmup()
        {
            // do any necessary bootstrapping work to get
            // your system ready to use before the first specification
            // runs
            return Task.CompletedTask;
        }

        public override void Dispose()
        {
            // any kind of system cleanup when Storyteller is shutting down
        }
    }
}