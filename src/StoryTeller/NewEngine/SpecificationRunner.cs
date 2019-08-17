using System;
using System.Threading.Tasks;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    // Make a separate one for stepthrough vs batch vs UI
    public interface ISpecificationObserver
    {
        void Starting(ExecutionPlan plan);

        void Completed(ExecutionPlan plan, LineExecution line, StepResult result);
        void Finished(ExecutionPlan plan, SpecResults specResults);
    }


    // Keep this pretty stupid
    public class SpecificationRunner
    {
        private readonly ISpecificationObserver _observer;
        private readonly IProject _project;
        private readonly ISystemUnderTest _system;

        public SpecificationRunner(IProject project, ISystemUnderTest system, ISpecificationObserver observer)
        {
            _project = project;
            _system = system;
            _observer = observer;
        }


        public async Task<SpecResults> Execute(ExecutionPlan plan)
        {
            _observer.Starting(plan);

            /* TODOs
             
             1. Try/Catch around the creation of the context. If it fails, the running is invalid.
                Return a results for that problem
                
             2. Check if the runner is in an invalid state. If so, bail out
             
             3. Start a timings object
             4. Create a timings object for creating the context
             5. If no steps at all in the execution plan, log an exception about the spec
                not being real
                
             
             6. Need to redirect the debug and trace output to the context
             7. Do a timeout where you start a parallel task and wait both
             
             8. Build the results
                a. check for a catastropic exception
                b. mark if the spec completed
                c. timings.Finish()
                d. log the final result
                
            9. cancel the context
            10. Finalize the results
             */


            var cancellation = plan.Context.Cancellation;
            var context = plan.Context;
            
            // Need to check if the context itself is invalid before going on
            foreach (var line in plan.Lines)
            {
                // This is going to be it. All smarts in the new ExecutionContext
                if (cancellation.IsCancellationRequested) break;

                // TODO -- trap exceptions inside of line itself
                // TODO -- if line captures a critical or catastrophic exception,
                // kill the spec
                var result = await line.Execute(context);
                
                
                _observer.Completed(plan, line, result);
            }


            _observer.Finished(plan, new SpecResults());
            throw new NotImplementedException();
        }
    }
}
