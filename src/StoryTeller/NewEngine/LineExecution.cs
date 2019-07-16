using System;
using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller
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
    }
}