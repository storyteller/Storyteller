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

        public LineExecution(Node node, Stage stage, LineExecutionDelegate action)
        {
            Id = node.id;
            Position = stage;
            Action = action;
            
            // TODO -- do this better
            PerfSubject = node.GetType().Name;
            
            // TODO -- Do this better
            PerfType = node.GetType().Name;
        }

        private LineExecution(LineExecutionDelegate action, object position, string id)
        {
            Action = action;
            Position = position;
            Id = id;
        }
        
        public LineExecution(Step step, LineExecutionDelegate action)
        {
            Action = action;
            Id = step.id;

            PerfSubject = step.Key;
            PerfType = "Grammar";
        }


        public LineExecutionDelegate Action { get; }

        public object Position { get; }

        public string Id { get; }
        

        public string PerfType { get; set; } = "Grammar";
        public string PerfSubject { get; set; } = "Key";

        public LineFailureMode FailureMode { get; set; } = LineFailureMode.Continue;

        public async Task Execute(ExecutionContext context)
        {
            using (context.Timings.Record(PerfType, PerfSubject))
            {
                var result = new StepResult(Id, Position);

                try
                {
                    await Action(context, result);
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
