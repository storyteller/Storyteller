using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    
    public class TimingsSmokeTester
    {
        [Fact]
        public void record_data()
        {
            var spec = new Specification
            {
                name = "Some Name"
            };

            var timings = new Timings();
            timings.Start(spec);
            using (timings.Subject("Fixture.Setup", "Math"))
            {
                using (timings.Subject("Grammar", "Adding"))
                {
                    using (timings.Subject("Fixture.Teardown", "Math"))
                    {
                        Thread.Sleep(100);
                    }
                }
            }

            var records = timings.Finish();

            records.Select(x => x.Subject).ShouldHaveTheSameElementsAs("Some Name", "Math", "Adding", "Math");

            records.Each(x => x.Duration.ShouldBeGreaterThan(0));
        }
    }
}