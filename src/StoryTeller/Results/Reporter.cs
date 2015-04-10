using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuCore.Util;

namespace StoryTeller.Results
{
    public class Reporter : IDisposable
    {
        private readonly Cache<Type, IReporter> _reporters 
            = new Cache<Type, IReporter>(type => Activator.CreateInstance(type).As<IReporter>());

        private readonly IList<HtmlReport> _reports = new List<HtmlReport>(); 

        public T ReporterFor<T>() where T : IReporter, new()
        {
            return _reporters[typeof (T)].As<T>();
        }

        public void Log(string title, string html)
        {
            _reports.Add(new HtmlReport
            {
                html = html,
                title = title
            });
        }

        public void Log(IReporter reporter)
        {
            _reporters[reporter.GetType()] = reporter;
        }

        public void StartDebugListening()
        {
            ReporterFor<DebugReporter>().StartListening();
        }

        public HtmlReport[] GenerateReports()
        {
            return _reporters.Select(x =>
            {
                return new HtmlReport
                {
                    html = x.ToHtml(),
                    title = x.Title
                };
            }).Union(_reports).ToArray();
        }

        public void Dispose()
        {
            _reporters.OfType<IDisposable>().Each(x => x.Dispose());
        }
    }
}