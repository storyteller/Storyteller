using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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
        private readonly State _state = new State();
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
            _state.As<IDisposable>().Dispose();
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

        public State State => _state;


        public void LogResult<T>(T result) where T : IResultMessage
        {
            if (_latched) return;

            if (result.id.IsEmpty())
            {
                throw new ArgumentOutOfRangeException(nameof(result), "The id of the result cannot be empty");
            }

            result.spec = Specification.id;

            _resultObserver.Handle(result);
            result.Tabulate(Counts);
            Results.Add(result);
        }

        public void LogException(string id, Exception ex, object position = null)
        {
            Reporting.ReporterFor<ExceptionReport>().Log(ex);

            if (ex.InnerException is StorytellerCriticalException)
            {
                ex = ex.InnerException;
            }

            if (ex.InnerException is StorytellerCatastrophicException)
            {
                ex = ex.InnerException;
            }

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
                    });
                    return;
                }
            }

            CatastrophicException = ex as StorytellerCatastrophicException;

            string errorMessage = null;
            if (ex is StorytellerAssertionException)
            {
                errorMessage = ex.Message;
            }
            else if (ex.InnerException is StorytellerAssertionException)
            {
                errorMessage = ex.InnerException.Message;
            }
            else
            {
                errorMessage = ex.ToString();
            }

            LogResult(new StepResult(id, ResultStatus.error) {error = errorMessage, position = position});
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
    }


}