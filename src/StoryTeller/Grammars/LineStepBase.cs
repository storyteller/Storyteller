using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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
        protected abstract Task<StepResult> executeAsync(ISpecContext context);


        protected abstract bool IsAsync();

        protected abstract long maximumRuntimeInMilliseconds { get; }

        public void Execute(SpecContext context)
        {
            var record = context.Timings.Subject(Type, Subject, maximumRuntimeInMilliseconds);


            Values.DoDelayedConversions(context);

            StepResult result = null;

            if (Values.Errors.Any())
            {
                result = Values.ToConversionErrorResult();
                result.position = Position;

                context.LogResult(result);

                context.Timings.End(record);
                return;
            }


            try
            {
                result = IsAsync() ? executeAsync(context).GetAwaiter().GetResult() : execute(context);

                result.position = Position;

                context.LogResult(result);
            }
            catch (Exception ex)
            {
                context.LogException(Values.id, ex, Position);
            }
            finally
            {
                context.Timings.End(record, result);
            }
            
        }

        public Task ExecuteAsync(SpecContext context, CancellationToken cancellation)
        {
            if (!IsAsync()) return Task.Factory.StartNew(() => Execute(context), cancellation);

            return executeAsync(context).ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    context.LogException(Values.id, t.Exception, Position);
                }
                else
                {
                    var result = t.Result;
                    result.position = Position;

                    context.LogResult(result);
                }

                
            }, cancellation);
        }


        public virtual string Type => "Grammar";

        public abstract string Subject { get; }



        public object Position { get; set; }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            gatherer.Line(this);
        }
    }
}