using System;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public class LineExecution 
    {
        public static LineExecution BeforeSpecification(ISystemUnderTest system, Specification specification)
        {
            return new LineExecution((context, result) => system.BeforeExecution(context), Stage.before, specification.id)
            {
                FailureMode = LineFailureMode.Catastrophic
            };
        }
        
        public static LineExecution AfterSpecification(ISystemUnderTest system, Specification specification)
        {
            return new LineExecution((context, result) => system.AfterExecution(context), Stage.before, specification.id)
            {
                FailureMode = LineFailureMode.Catastrophic
            };
        }

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

            FailureMode = LineFailureMode.Critical;
        }

        public LineExecution(LineExecutionDelegate execution, StepValues values)
        {
            Execution = execution;
            Values = values;
            Position = values.Order;
            Id = values.id;
        }

        private LineExecution(LineExecutionDelegate execution, object position, string id)
        {
            Execution = execution;
            Position = position;
            Id = id;
        }


        public LineExecutionDelegate Execution { get; }

        public object Position { get; }

        public string Id { get; }
        
        public StepValues Values { get; }

        public string PerfType { get; set; } = "Grammar";
        public string PerfSubject { get; set; } = "Key";

        public LineFailureMode FailureMode { get; private set; } = LineFailureMode.Continue;

        public async Task Execute(ExecutionContext context)
        {
            using (context.Timings.Record(PerfType, PerfSubject))
            {
                var result = new StepResult(Id, Position);

                try
                {
                    await Execution(context, result);
                    context.Result.LogStep(result);
                }
                catch (Exception e)
                {
                    context.Result.LogStep(result, e, FailureMode);
                }
            }

        }
    }
}
