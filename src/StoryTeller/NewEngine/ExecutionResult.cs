using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public enum EndedBy
    {
        Completed,
        Aborted,
        Cancelled,
        TimedOut
    }
    
    public class ExecutionResult : Counts, IReporting
    {
        private readonly IList<StepResult> _results = new List<StepResult>();
        
        [JsonProperty("ended")]
        [JsonConverter(typeof(StringEnumConverter))] 
        public EndedBy Ended { get; set; }

        [JsonProperty("results")] public StepResult[] Results => _results.ToArray();

        [JsonProperty("performance")] public PerfRecord[] Performance { get; private set; } = new PerfRecord[0];

        [JsonProperty("duration")] public long Duration => Timings.Duration;

        [JsonProperty("logging")]
        public HtmlReport[] Reporting { get; private set; } = new HtmlReport[0];

        [JsonProperty("attempts")] public int Attempts = 0;

        [JsonProperty("aborted")] public bool WasAborted = false;

        [JsonProperty("time")] public string time = DateTime.Now.ToString("t");
        
     
        [JsonIgnore]
        public Timings Timings { get; } = new Timings();
        

        private readonly LightweightCache<Type, Report> _reporters 
            = new LightweightCache<Type, Report>(type => Activator.CreateInstance(type).As<Report>());

        private readonly IList<HtmlReport> _reports = new List<HtmlReport>();

        public T ReporterFor<T>() where T : Report, new()
        {
            return _reporters[typeof (T)].As<T>();
        }

        public void Log(string title, string html, string shortTitle = null)
        {
            _reports.Add(new HtmlReport
            {
                html = html,
                title = title,
                count = 1,
                ShortTitle = shortTitle
            });
        }

        public void Log(Report report)
        {
            _reporters[report.GetType()] = report;
        }
        
        

        public void Start(Specification specification)
        {
            _reporters[typeof(DebugReport)].As<DebugReport>().StartListening();
            Timings.Start(specification);
        }

        public void FinalizeResults(int attempts, EndedBy ended)
        {
            Reporting = _reporters.Select(x => new HtmlReport
            {
                html = x.ToHtml(),
                title = x.Title,
                ShortTitle = x.ShortTitle,
                count = x.Count
            }).Union(_reports).ToArray();

            foreach (var disposable in _reporters.GetAll().OfType<IDisposable>())
            {
                disposable.SafeDispose();
            }
            
            Performance = Timings.Finish().ToArray();

            // TODO -- will need to make things fail if this happens
            // Do this differently in V6
            PerformancePolicies.Apply(e => LogException(e, LineFailureMode.Continue), Performance);

            Ended = ended;
            Attempts = attempts;
        }

        public void LogStep(StepResult result, Exception ex = null, LineFailureMode failureMode = LineFailureMode.Continue)
        {
            if (ex != null)
            {
                // TODO -- do something that can "decide" if an exception is critical or catastrophic

                
                result.RecordException(ex);
                LogException(ex, failureMode);
                
            }
            
            result.Tabulate(this);
            _results.Add(result);
        }
        
        public void LogException(Exception ex, LineFailureMode failureMode)
        {
            ReporterFor<ExceptionReport>().Log(ex);
            
            ex = unwrapException(ex);
            var corrected = FailureModeForException(ex, failureMode);

            switch (corrected)
            {
                case LineFailureMode.Catastrophic:
                    CatastrophicException = ex;
                    break;
                
                case LineFailureMode.Critical:
                    HadCriticalException = true;
                    break;
                    
            }
        }

        public static LineFailureMode FailureModeForException(Exception ex, LineFailureMode mode)
        {
            if (mode == LineFailureMode.Catastrophic) return LineFailureMode.Catastrophic;
            if (ex is StorytellerCatastrophicException) return LineFailureMode.Catastrophic;
            if (ex is StorytellerCriticalException) return LineFailureMode.Critical;

            return mode;
        }

        public Exception CatastrophicException { get; private set; }

        public bool HadCriticalException { get; private set; }

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

    }
}
