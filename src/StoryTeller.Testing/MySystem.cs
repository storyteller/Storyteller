using System.Threading.Tasks;
using StoryTeller.Engine;

namespace StoryTeller.Testing
{
    // SAMPLE: custom-system-using-SimpleSystem
    public class MySystem : SimpleSystem
    {
        protected override void configureCellHandling(CellHandling handling)
        {
            // Allows you to apply customizations to CellHandling
            
            
        }
        
        

        public override void BeforeEach(SimpleExecutionContext execution, ISpecContext context)
        {
            // Executes before each specification run
        }

        public override void AfterEach(ISpecContext context)
        {
            // Executes after each specification run
            // Handy for state cleanup
        }

        public override Task Warmup()
        {
            // do any necessary bootstrapping work to get
            // your system ready to use
            return Task.CompletedTask;
        }

        public override void Dispose()
        {
            // any kind of system cleanup when Storyteller is shutting down
        }
    }
    // ENDSAMPLE
}