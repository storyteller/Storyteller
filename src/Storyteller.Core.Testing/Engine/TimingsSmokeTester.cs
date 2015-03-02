using System.Collections.Generic;
using System.Linq;
using System.Threading;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class TimingsSmokeTester
    {
        [Test]
        public void record_data()
        {
            var spec = new Specification
            {
                Name = "Some Name"
            };

            var timings = new Timings(spec);
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