using System;
using System.Threading;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public class ExecutionRun
    {
        private readonly SpecificationPlan _plan;
        private readonly ISpecContext _context;
        private readonly IStepExecutor _executor;
        private readonly TimeSpan _timeout;
        private Thread _thread;
        private bool _wasCancelled;
        private bool _finished;

        public ExecutionRun(SpecificationPlan plan, ISpecContext context, IStepExecutor executor, TimeSpan timeout)
        {
            _plan = plan;
            _context = context;
            _executor = executor;
            _timeout = timeout;
        }

        public void Start()
        {
            var reset = new ManualResetEvent(false);

            _thread = new Thread(() =>
            {
                try
                {
                    _plan.AcceptVisitor(_executor);
                    reset.Set();
                }
                catch (ThreadAbortException)
                {
                    // Do nothing here, you catch this down below
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }) {Name = "StoryTeller-Test-Execution"};

            _thread.Start();

            var timedout = !reset.WaitOne(_timeout);
            if (timedout && !_wasCancelled)
            {
                _context.LogResult(new StepResult
                {
                    id = _plan.Specification.id,
                    Status = ResultStatus.error,
                    error = "Timed out in " + _context.Timings.Duration,
                    position = Stage.timedout
                });
            }

            _finished = true;
        }

        public ExecutionRun(SpecificationPlan plan)
        {
            _plan = plan;
        }

        public SpecificationPlan Plan
        {
            get { return _plan; }
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