using System;
using System.Linq;
using System.Web.Caching;
using FubuCore;
using FubuCore.Util;
using HtmlTags;

namespace Storyteller.Core.Results
{
    public interface IReporter
    {
        HtmlTag ToHtml();
        string Title { get; }
    }

    public class HtmlReport
    {
        public string html;
        public string title;
    }

    public class ContextualLogging
    {
        private readonly Cache<Type, IReporter> _reporters 
            = new Cache<Type, IReporter>(type => Activator.CreateInstance(type).As<IReporter>());

        public T ReporterFor<T>() where T : IReporter, new()
        {
            return _reporters[typeof (T)].As<T>();
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
    }
}
