using System;
using System.Linq;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public abstract class LineStepBase : ILineExecution
    {
        public StepValues Values { get; }

        public string Id => Values.id;

        protected LineStepBase(StepValues values)
        {
            Values = values;
        }

        protected abstract StepResult execute(ISpecContext context);

        public void Execute(SpecContext context)
        {
            using (context.Timings.Subject(Type, Subject))
            {
                Values.DoDelayedConversions(context);

                if (Values.Errors.Any())
                {
                    var result = Values.ToConversionErrorResult();
                    result.position = Position;

                    context.LogResult(result);

                    return;
                }

                try
                {
                    var result = execute(context);

                    result.position = Position;

                    context.LogResult(result);
                }
                catch (Exception ex)
                {
                    context.LogException(Values.id, ex, Position);
                }
            }
        }



        public virtual string Type
        {
            get { return "Grammar"; }
        }

        public abstract string Subject { get; }



        public object Position { get; set; }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(IStepExecutor executor)
        {
            executor.Line(this);
        }
    }
}