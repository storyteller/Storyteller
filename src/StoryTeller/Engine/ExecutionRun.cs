using System;
using System.Threading;
using FubuCore;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public class ExecutionRun
    {
        private readonly IExecutionContext _execution;
        private readonly Timings _timings;
        private readonly SpecExecutionRequest _request;
        private readonly StopConditions _stopConditions;
        private readonly IExecutionMode _mode;
        private Thread _thread;
        private bool _wasCancelled;
        private bool _finished;
        private ISpecContext _context;

        public ExecutionRun(IExecutionContext execution, Timings timings, SpecExecutionRequest request, StopConditions stopConditions, IExecutionMode mode)
        {
            _execution = execution;
            _timings = timings;
            _request = request;
            _stopConditions = stopConditions;
            _mode = mode;
        }

        public ISpecContext Execute()
        {
            var reset = new ManualResetEvent(false);

            _thread = new Thread(() =>
            {
                try
                {
                    execute(reset);
                }
                catch (ThreadAbortException)
                {
                    // nothing, it's handled below
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }) {Name = "StoryTeller-Test-Execution"};

            _thread.Start();

            var timedout = !reset.WaitOne(_stopConditions.TimeoutInSeconds.Seconds());
            if (timedout && !_wasCancelled)
            {
                if (_context != null)
                {
                    _context.LogResult(new StepResult
                    {
                        id = _request.Plan.Specification.id,
                        Status = ResultStatus.error,
                        error = "Timed out in " + _context.Timings.Duration,
                        position = Stage.timedout
                    });
                }
            }

            _finished = true;

            return _context;
        }

        private void execute(EventWaitHandle reset)
        {
            _context = new SpecContext(_request.Specification, _timings, _request.Observer, _stopConditions, _execution.Services);
            _context.Reporting.StartDebugListening();
            var executor = _mode.BuildExecutor(_request.Plan, _context);

            _request.Plan.AcceptVisitor(executor);

            reset.Set();
        }

        public SpecExecutionRequest Request
        {
            get { return _request; }
        }

        public bool Finished
        {
            get { return _finished; }
        }

        public bool WasCancelled
        {
            get { return _wasCancelled; }
        }

        public void Cancel()
        {
            _wasCancelled = true;
            _thread.Abort();
        }
    }
}