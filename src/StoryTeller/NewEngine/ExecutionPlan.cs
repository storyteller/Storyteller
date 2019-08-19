using System.Collections.Generic;
using System.Threading.Tasks;
using Baseline.Dates;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public class ExecutionPlan
    {
        private readonly ISpecificationObserver _observer;
        private EndedBy? _ended;
        private ISystemUnderTest _system;


        public ExecutionPlan(ISystemUnderTest system, Specification specification, ISpecificationObserver observer)
        {
            _system = system;
            _observer = observer;
            // TODO -- go plan it all out, build out the Lines list, do the conversion
            Context = new ExecutionContext(system, specification);
            
            // Also does the conversion
        }
        
        
        // specific methods for adding a line grammar, paragraph as table line, section setup,
        // fixture teardown


        public ExecutionContext Context { get; }

        public List<LineExecution> Lines { get; } = new List<LineExecution>();
        public Specification Specification => Context.Specification;
        
        public int Attempts { get; set; }
        
        public bool IsRunning { get; private set; }



        public void Cancel()
        {
            _ended = EndedBy.Cancelled;
            Context.Cancel();
        }

        public Task<ExecutionResult> Execute()
        {
            // TODO -- need to add a timeout too
            // TODO -- bail out quickly if there are no steps in the specification
            
            // TODO -- track the timeout here too
            Context.Start(60.Seconds());
            var execution = Task.Factory.StartNew(execute, Context.Cancellation);


            return execution.Unwrap();
        }

        private async Task<ExecutionResult> execute()
        {
            foreach (var line in Lines)
            {
                if (Context.ShouldAbort())
                {
                    _ended = EndedBy.Cancelled;
                    Context.Cancel();
                    break;
                }
                
                if (Context.Cancellation.IsCancellationRequested) break;

                await line.Execute(Context);
            }


            var after = LineExecution.AfterSpecification(_system, Specification);
            await after.Execute(Context);
            
            return Context.FinalizeResults(Attempts, _ended ?? EndedBy.Completed);
        }


    }
}
