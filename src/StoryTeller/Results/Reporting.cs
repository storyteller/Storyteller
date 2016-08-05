using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;


namespace StoryTeller.Results
{
    // SAMPLE: IReporting
    public interface IReporting
    {
        /// <summary>
        /// Fetch or create a custom IReporter of type T
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        T ReporterFor<T>() where T : Report, new();

        /// <summary>
        /// Log custom html to the results report
        /// </summary>
        /// <param name="title"></param>
        /// <param name="html"></param>
        void Log(string title, string html, string shortTitle = null);

        /// <summary>
        /// Explicitly add a new IReporter to the
        /// running context
        /// </summary>
        /// <param name="report"></param>
        void Log(Report report);
    }
    // ENDSAMPLE

    public class Reporting : IDisposable, IReporting
    {
        private readonly Cache<Type, Report> _reporters 
            = new Cache<Type, Report>(type => Activator.CreateInstance(type).As<Report>());

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

        public void StartDebugListening()
        {
            ReporterFor<DebugReport>().StartListening();
        }

        public HtmlReport[] GenerateReports()
        {
            return _reporters.Select(x =>
            {
                return new HtmlReport
                {
                    html = x.ToHtml(),
                    title = x.Title,
                    ShortTitle = x.ShortTitle,
                    count = x.Count
                };
            }).Union(_reports).ToArray();
        }

        public void Dispose()
        {
            _reporters.OfType<IDisposable>().Each(x => x.Dispose());
        }
    }
}