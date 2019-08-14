using System;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    
    public class LineExecution 
    {
        public LineExecution(Fixture fixture, Section section, Stage stage)
        {
            Id = section.id;
            Position = stage;

            switch (stage)
            {
                // TODO -- should be async all the way down
                case Stage.setup:
                    Execution = (c, r) =>
                    {
                        fixture.SetUp();
                        return Task.CompletedTask;
                    };
                    break;
                
                case Stage.teardown:
                    Execution = (c, r) =>
                    {
                        // TODO -- should be async all the way down
                        fixture.TearDown();
                        return Task.CompletedTask;
                    };
                    break;
                
                default:
                    throw new ArgumentOutOfRangeException(nameof(stage), $"{stage} is not supported, only {nameof(Stage.setup)} or {nameof(Stage.teardown)}");
            }
        }

        public LineExecution(LineExecutionDelegate execution, StepValues values)
        {
            Execution = execution;
            Values = values;
            Position = values.Order;
            Id = values.id;
        }
        
        

        public LineExecutionDelegate Execution { get; }

        public object Position { get; }

        public string Id { get; }
        
        public StepValues Values { get; }

        public Task<StepResult> Execute(IExecutionContext context)
        {
            /*
             * TODOS
             * 1. Do the timings thing
             * 2. Create a SpecResult
             * 3. Trap exceptions
             * 4. Log exceptions
             * 5. Log any step results
             */
            
            throw new NotImplementedException();
        }
    }
}
