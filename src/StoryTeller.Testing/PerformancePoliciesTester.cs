using System.Linq;
using Shouldly;
using StoryTeller.Engine;
using Xunit;

namespace StoryTeller.Testing
{
    public class PerformancePoliciesTester
    {
        public PerformancePoliciesTester()
        {
            PerformancePolicies.ClearAll();
        }

        [Fact]
        public void apply_simple_check()
        {
            var records = new PerfRecord[]
            {
                new PerfRecord("Grammar", "One", 0, 0), 
                new PerfRecord("Grammar", "Two", 0, 0), 
                new PerfRecord("Grammar", "Three", 0, 0), 
                new PerfRecord("Request", "One", 0, 0), 
                new PerfRecord("Request", "Two", 0, 0), 
                new PerfRecord("Request", "Three", 0, 0), 
                new PerfRecord("Request", "One", 0, 0), 
                new PerfRecord("Request", "Two", 0, 0), 
            };

            PerformancePolicies.PerfLimit(25, r => r.Subject == "One");

            records[2].MarkEnd(10);
            records[3].MarkEnd(50);

            var context = SpecContext.Basic();
            PerformancePolicies.Apply(e => context.LogException(null, e, null), records);

            records.Where(x => x.PerfViolation).ShouldHaveTheSameElementsAs(records[3]);

            context.Counts.Exceptions.ShouldBe(1);
        }

        [Fact]
        public void apply_simple_check_no_failures()
        {
            var records = new PerfRecord[]
            {
                new PerfRecord("Grammar", "One", 0, 0),
                new PerfRecord("Grammar", "Two", 0, 0),
                new PerfRecord("Grammar", "Three", 0, 0),
                new PerfRecord("Request", "One", 0, 0),
                new PerfRecord("Request", "Two", 0, 0),
                new PerfRecord("Request", "Three", 0, 0),
                new PerfRecord("Request", "One", 0, 0),
                new PerfRecord("Request", "Two", 0, 0),
            };

            PerformancePolicies.PerfLimit(25, r => r.Subject == "One");

            records[2].MarkEnd(10);
            records[3].MarkEnd(10);

            var context = SpecContext.Basic();
            PerformancePolicies.Apply(e => context.LogException(null, e, null), records);

            records.Any(x => x.PerfViolation).ShouldBeFalse();

            context.Counts.Exceptions.ShouldBe(0);
        }


    }
}
