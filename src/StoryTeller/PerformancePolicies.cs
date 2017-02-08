using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Results;

namespace StoryTeller
{
    public static class PerformancePolicies
    {
        private static readonly IList<ThresholdRule> _rules = new List<ThresholdRule>();

        public static void ClearAll()
        {
            _rules.Clear();
        }

        public static void Apply(SpecContext context, PerfRecord[] records)
        {
            foreach (var rule in _rules)
            {
                rule.MarkViolations(records);
            }

            if (records.Any(x => x.PerfViolation))
            {
                context.LogException(null, new PerformanceLimitViolationException(records.Where(x => x.PerfViolation).ToArray()), null);
            }
        }

        public static void PerfLimit(long maximumRuntimeInMilliseconds, Func<PerfRecord, bool> filter)
        {
            var rule = new ThresholdRule(maximumRuntimeInMilliseconds, filter);
            _rules.Add(rule);
        }

        public static void PerfLimitBySubject(long maximumRuntimeInMilliseconds, string subject)
        {
            PerfLimit(maximumRuntimeInMilliseconds, r => r.Subject.EqualsIgnoreCase(subject));
        }





        public class ThresholdRule
        {
            public ThresholdRule(long threshold, Func<PerfRecord, bool> filter)
            {
                Threshold = threshold;
                Filter = filter;
            }

            public readonly long Threshold;
            public readonly Func<PerfRecord, bool> Filter;


            public void MarkViolations(PerfRecord[] records)
            {
                foreach (var record in records.Where(Filter).Where(x => x.Duration > Threshold))
                {
                    record.Threshold = Threshold;
                };

            }
        }
    }

    public class PerformanceLimitViolationException : StorytellerFailureException
    {
        public static string ToMessage(PerfRecord[] records)
        {
            var writer = new StringWriter();
            writer.WriteLine("**Performance Threshold Violations Detected**");
            foreach (var record in records)
            {
                writer.WriteLine("* " + record);
            }

            return writer.ToString();
        }

        public PerformanceLimitViolationException(PerfRecord[] records) : base(ToMessage(records), ErrorDisplay.markdown)
        {
        }
    }
}