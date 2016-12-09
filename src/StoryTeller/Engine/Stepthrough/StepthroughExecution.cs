using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Engine.Stepthrough
{
    public class StepthroughExecution : SpecExecution, IStepthroughExecution
    {
        private readonly IUserInterfaceObserver _observer;
        private readonly IExecutionObserver _executionObserver;
        private int _position = -1;
        private IList<ILineExecution> _steps;

        private readonly TaskCompletionSource<bool> _completion = new TaskCompletionSource<bool>();
        private readonly TaskCompletionSource<bool> _hasStarted = new TaskCompletionSource<bool>();

        public StepthroughExecution(SpecExecutionRequest request, StopConditions stopConditions, IUserInterfaceObserver observer, IExecutionObserver executionObserver) : base(request, stopConditions, new InstrumentedLogger(observer))
        {
            _observer = observer;
            _executionObserver = executionObserver;
        }

        protected override Task setupTimeout()
        {
            // Need this to do nothing
            return new Task(() => {});
        }

        public SpecContext Context { get; private set; }

        public Task HasStarted => _hasStarted.Task;

        protected override Task executeSteps(SpecContext context, IList<ILineExecution> lines, CancellationToken token)
        {
            _steps = lines;
            Context = context;

            _observer.SendProgress(new SpecProgress(Context.Specification.id, Context.Counts, 0, _steps.Count));

            _executionObserver.SpecStarted(Request);

            if (Request.Mode == ExecutionMode.stepthrough)
            {
                sendNextStepMessage();
            }
            else if (Request.Mode == ExecutionMode.breakpoint)
            {
                RunToBreakpoint();
            }
            else
            {
                return base.executeSteps(context, lines, token);
            }

            _hasStarted.SetResult(true);

            return _completion.Task;
        }

        public override void Cancel()
        {
            base.Cancel();

            _completion.TrySetResult(true);
        }

        private void moveNext()
        {
            _position++;
        }

        public Task Completed => _completion.Task;

        public ILineExecution Current => _position == -1 || _position == _steps.Count ? null : _steps[_position];

        public ILineExecution Next => (_position + 1) >= _steps.Count ? null : _steps[_position + 1];

        public void RunNext()
        {
            moveNext();
            if (Current == null)
            {
                finish();
                return;
            }
            else
            {
                executeCurrentStep();
                sendNextStepMessage();
            }

            if (_position == _steps.Count - 1)
            {
                finish();
                return;
            }

            if (Current != null && Current.Stepthrough == StepthroughStyle.Over)
            {
                RunNext();
            }
        }

        private void finish()
        {
            _completion.SetResult(true);
        }

        private void executeCurrentStep()
        {
            Current.Execute(Context);
            _observer.SendProgress(new SpecProgress(Request.Id, Context.Counts, _position + 1, _steps.Count));
        }

        public void RunToEnd()
        {
            while (Next != null)
            {
                moveNext();
                executeCurrentStep();
            }

            finish();
        }

        public void RunToBreakpoint()
        {
            if (isAtBreakpoint())
            {
                moveNext();
                executeCurrentStep();

                if (!isAtBreakpoint())
                {
                    RunToBreakpoint();
                }
                else
                {
                    sendNextOrFinishedMessage();
                }

                return;
            }

            while (Next != null && !isAtBreakpoint())
            {
                moveNext();
                executeCurrentStep();
            }

            sendNextOrFinishedMessage();
        }

        public void SetBreakpoints(Breakpoint[] breakpoints)
        {
            Request.Specification.Breakpoints = breakpoints;
        }



        private void sendNextOrFinishedMessage()
        {
            if (Next == null)
            {
                finish();
            }
            else
            {
                sendNextStepMessage();
            }
        }

        private bool isAtBreakpoint()
        {
            if (Next == null) return false;

            return Request.Specification.MatchesBreakpoint(Next.Id, Next.Position);
        }

        private void sendNextStepMessage()
        {
            var next = Next;

            if (next != null)
            {
                _observer.SendNextStep(new NextStep(Request.Id, next));
            }
        }

        public StepthroughState State()
        {
            return new StepthroughState
            {
                next = _observer.NextStep,
                progress = _observer.LastProgress,
                results = Context?.Results.ToArray() ?? new IResultMessage[0]
            };
        }
    }
}