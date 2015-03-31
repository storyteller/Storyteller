using System;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public class ExecutionRun : IDisposable
    {
        private readonly ISystem _system;
        private readonly Timings _timings;
        private readonly SpecExecutionRequest _request;
        private readonly StopConditions _stopConditions;
        private readonly IExecutionMode _mode;
        private Thread _thread;
        private bool _wasCancelled;
        private bool _finished;
        private ISpecContext _context;
        private Exception _catastrophicException;
        private IExecutionContext _execution;
       
        public ExecutionRun(ISystem system, Timings timings, SpecExecutionRequest request, StopConditions stopConditions, IExecutionMode mode)
        {
            _system = system;
            _timings = timings;
            _request = request;
            _stopConditions = stopConditions;
            _mode = mode;
        }

        public SpecResults Execute()
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
            _finished = true;

            if (_wasCancelled) return null;

            if (_catastrophicException != null) throw _catastrophicException;
            if (_context != null && _context.CatastrophicException != null) throw _context.CatastrophicException;

            

            if (timedout && !_wasCancelled)
            {
                var result = timeoutMessage();

                if (_context == null)
                {
                    var perf = _timings.Finish();

                    return new SpecResults
                    {
                        Counts = new Counts(0, 0, 1, 0),
                        Duration = _timings.Duration,
                        Performance = perf.ToArray(),
                        Attempts = _request.Plan.Attempts,
                        Results = new IResultMessage[] { result},
                        WasAborted = false
                    };
                }


                _context.LogResult(result);
            }

            return _context.FinalizeResults(_request.Plan.Attempts); ;
        }


        private StepResult timeoutMessage()
        {
            var stepResult = new StepResult
            {
                id = _request.Plan.Specification.id,
                Status = ResultStatus.error,
                error = "Timed out in " + _timings.Duration,
                position = Stage.timedout
            };
            return stepResult;
        }

        private void execute(EventWaitHandle reset)
        {
            try
            {
                using (_timings.Subject("Context", "Creation"))
                {
                    _execution = _system.CreateContext();
                }
            }
            catch (Exception e)
            {
                _catastrophicException = e;
                reset.Set();

                return;
            }

            if (_request.IsCancelled) return;

            _context = new SpecContext(_request.Specification, _timings, _request.Observer, _stopConditions, _execution.Services);
            _context.Reporting.StartDebugListening();
            var executor = _mode.BuildExecutor(_request.Plan, _context);

            _request.Plan.AcceptVisitor(executor);

            _execution.AfterExecution(_context);

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
            _request.Cancel();
            _wasCancelled = true;
            _thread.Abort();
        }

        public void Dispose()
        {
            if (_context != null) _context.SafeDispose();
            if (_execution != null) _execution.SafeDispose();
        }
    }
}