using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Threading;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller
{
    public class SpecContext : ISpecContext
    {
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        private readonly IResultObserver _resultObserver;
        private readonly IExecutionContext _execution;
        private readonly Timings _timings;
        private bool _latched;

        public SpecContext(Specification specification, Timings timings, IResultObserver observer, StopConditions stopConditions, IExecutionContext execution)
        {
            Counts = new Counts();
            Specification = specification;
            _resultObserver = observer;
            _execution = execution;
            StopConditions = stopConditions;

            _timings = timings ?? new Timings();

            Reporting = new Reporting();
        }

        public StopConditions StopConditions { get; }
        public IReporting Reporting { get; }

        public SpecResults FinalizeResults(int attempts)
        {
            var performance = _timings.Finish().ToArray();

            PerformancePolicies.Apply(this, performance);

            return new SpecResults
            {
                Counts = Counts,
                Results = Results.ToArray(),
                Performance = performance,
                Duration = _timings.Duration,
                Reporting = Reporting.As<Reporting>().GenerateReports(),
                Attempts = attempts,
                HadCriticalException = HadCriticalException
            };
        }

        public void Dispose()
        {
            _latched = true;
            Reporting.As<IDisposable>().Dispose();
            State.As<IDisposable>().Dispose();
        }

        public Timings Timings => _timings;

        public Specification Specification { get; }

        public Counts Counts { get; }

        public bool CanContinue()
        {
            if (HadCriticalException || CatastrophicException != null)
                return false;

            return StopConditions.CanContinue(Counts);
        }

        public StorytellerCatastrophicException CatastrophicException { get; private set; }

        public bool HadCriticalException { get; private set; }

        // TODO -- this needs to use the CancellationToken
        // TODO -- make this async all the way
        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            if (condition()) return true;

            var clock = new Stopwatch();
            clock.Start();

            try
            {
                while (clock.Elapsed < timeout)
                {
                    Thread.Sleep(millisecondPolling);

                    if (condition()) return true;
                }

                return false;
            }
            finally
            {
                clock.Stop();
            }
        }

        public T Service<T>()
        {
            return _execution.GetService<T>();
        }

        public State State { get; } = new State();


        public void LogResult<T>(T result, PerfRecord record) where T : IResultMessage
        {
            if (_latched) return;

            if (record != null) Timings.End(record, result);

            if (result.id.IsEmpty())
            {
                throw new ArgumentOutOfRangeException(nameof(result), "The id of the result cannot be empty");
            }

            result.spec = Specification.id;

            _resultObserver.Handle(result);
            result.Tabulate(Counts);
            Results.Add(result);
        }

        

        public void LogException(string id, Exception ex, PerfRecord record, object position = null)
        {
            if (id.IsEmpty())
            {
                id = Specification.id;
                position = Stage.context;
            }

            Reporting.ReporterFor<ExceptionReport>().Log(ex);

            ex = unwrapException(ex);

            if (ex is StorytellerCriticalException)
            {
                HadCriticalException = true;

                // TODO -- hokey. Watch if this becomes a pattern
                if (ex.InnerException is MissingFixtureException)
                {
                    LogResult(new StepResult(id, ResultStatus.invalid)
                    {
                        error = ex.InnerException.Message,
                        position = position
                    }, record);
                    return;
                }
            }

            CatastrophicException = ex as StorytellerCatastrophicException;

            var result = new StepResult(id, ResultStatus.error) {position = position};
            result.error = ExceptionFormatting.ToDisplayMessage(ex, out result.errorDisplay);

            LogResult(result, record);
        }

        private static Exception unwrapException(Exception ex)
        {
            if (ex is TargetInvocationException)
            {
                ex = ex.InnerException;
            }

            if (ex.InnerException is StorytellerFailureException)
            {
                return ex.InnerException;
            }

            return ex;
        }


        public static SpecContext Basic()
        {
            return new SpecContext(new Specification(), null, new NulloResultObserver(), new StopConditions(), new SimpleExecutionContext());
        }

        public static SpecContext ForTesting()
        {
            SpecContext context = Basic();

            return context;
        }

        public void Cancel()
        {
            StopConditions.Cancel();
        }
    }


}