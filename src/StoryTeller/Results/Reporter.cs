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

        public T ReporterFor<T>() where T : IReporter, new()
        {
            return _reporters[typeof (T)].As<T>();
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
                    html = x.ToHtml().ToString(),
                    title = x.Title
                };
            }).ToArray();
        }

        public void Dispose()
        {
            _reporters.OfType<IDisposable>().Each(x => x.Dispose());
        }
    }
}