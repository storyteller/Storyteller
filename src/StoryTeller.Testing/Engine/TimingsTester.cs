using System.Linq;
using System.Threading;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class TimingsTester
    {
        [Fact]
        public void perf_record_threshold()
        {
            var record1 = new PerfRecord("grammar", "key1", 100, 0);
            record1.MarkEnd(200);

            record1.PerfViolation.ShouldBeFalse();


            var record2 = new PerfRecord("grammar", "key1", 100, 300);
            record2.MarkEnd(200);

            record2.PerfViolation.ShouldBeFalse();


            var record3 = new PerfRecord("grammar", "key1", 100, 300);
            record3.MarkEnd(500);

            record3.PerfViolation.ShouldBeTrue();

        }

        [Fact]
        public void run_with_zero_threshold()
        {
            using (var timings = new Timings())
            {
                timings.Start(new Specification());

                using (timings.Subject("something", "else", 0))
                {
                    Thread.Sleep(100);
                }

                var records = timings.Finish();

                var record = records.FirstOrDefault(x => x.Subject == "else");

                record.PerfViolation.ShouldBeFalse();
                
            }
        }

        [Fact]
        public void run_with_non_zero_threshold_that_is_not_exceeded()
        {
            using (var timings = new Timings())
            {
                timings.Start(new Specification());

                using (timings.Subject("something", "else", 100))
                {
                }

                var records = timings.Finish();

                var record = records.FirstOrDefault(x => x.Subject == "else");

                record.PerfViolation.ShouldBeFalse();

            }
        }


        [Fact]
        public void run_with_non_zero_threshold_that_is_exceeded()
        {
            using (var timings = new Timings())
            {
                timings.Start(new Specification());

                using (timings.Subject("something", "else", 25))
                {
                    Thread.Sleep(100);
                }

                var records = timings.Finish();

                var record = records.FirstOrDefault(x => x.Subject == "else");

                record.PerfViolation.ShouldBeTrue();
                record.Threshold.ShouldBe(25);

            }
        }
    }
}