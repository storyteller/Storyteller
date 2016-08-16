using System;
using System.Collections.Generic;
using System.Threading;
using Baseline;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Stepthrough
{
    public class StepthroughExecutor
    {
        private readonly IExecutionContext _execution;
        private readonly SpecExecutionRequest _request;
        private readonly IUserInterfaceObserver _observer;
        private int _position = -1;
        private readonly IList<ILineExecution> _steps;
        private readonly ManualResetEventSlim _reset = new ManualResetEventSlim(false);
        private readonly SpecContext _context;

        // TODO -- if an error bubbles up, the SpecificationEngine should mark its runner
        //         as Invalid
        public static StepthroughExecutor Start(ISystem system, Specification specification, IResultObserver observer, IUserInterfaceObserver uiObserver, FixtureLibrary library)
        {
            var request = new SpecExecutionRequest(specification, observer);
            request.CreatePlan(library);

            // Got to watch because this can error out
            var execution = system.CreateContext();

            return new StepthroughExecutor(execution, request, uiObserver);
        }

        public StepthroughExecutor(IExecutionContext execution, SpecExecutionRequest request, IUserInterfaceObserver observer)
        {
            _context = new SpecContext(request.Specification, new Timings(), request.Observer, new StopConditions(), execution);

            _execution = execution;
            _request = request;
            _observer = observer;
            var gatherer = new ExecutionStepGatherer(_context);
            _request.Plan.AcceptVisitor(gatherer);

            _steps = gatherer.Lines;


            try
            {
                _execution.BeforeExecution(_context);
            }
            catch (Exception e)
            {
                _context.LogException(_request.Id, e, "BeforeExecution");
            }

            _observer.SendProgress(new SpecProgress(_request.Id, _context.Counts, 0, _steps.Count));
            sendNextStepMessage();
        }

        public SpecContext Context => _context;


        public void WaitUntilFinished()
        {
            _reset.Wait();
        }

        private void moveNext()
        {
            _position++;
        }

        public ILineExecution Current => _position == -1 || _position == _steps.Count ? null : _steps[_position];

        public ILineExecution Next => (_position + 1) >= _steps.Count ? null : _steps[_position + 1];

        private void finish()
        {
            _execution.AfterExecution(_context);
            _request.SpecExecutionFinished(_context.FinalizeResults(1));

            
            _context.SafeDispose();
            _execution.SafeDispose();
            _reset.Set();
        }

        public void Cancel()
        {
            _context.SafeDispose();
            _execution.SafeDispose();
            _reset.Set();
        }

        public void RunNext()
        {
            moveNext();
            if (Current == null)
            {
                finish();
            }
            else
            {
                executeCurrentStep();
                sendNextStepMessage();
            }
        }

        private void executeCurrentStep()
        {
            Current.Execute(_context);
            _observer.SendProgress(new SpecProgress(_request.Id, _context.Counts, _position + 1, _steps.Count));
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
            var matchesBreakpoint = _request.Specification.MatchesBreakpoint(Next.Id, Next.Position);
            return matchesBreakpoint;
        }

        private void sendNextStepMessage()
        {
            _observer.SendToClient(new NextStep(_request.Id, Next));
        }
    }
}