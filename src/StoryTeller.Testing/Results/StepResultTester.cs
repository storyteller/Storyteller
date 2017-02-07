using System;
using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace StoryTeller.Testing.Results
{
    
    public class StepResultTester
    {
        [Fact]
        public void modify_increments()
        {
            var counts = new Counts();

            new StepResult("1", ResultStatus.ok).Tabulate(counts);
            counts.ShouldEqual(0, 0, 0, 0);

            new StepResult("1", ResultStatus.success).Tabulate(counts);
            counts.ShouldEqual(1, 0, 0, 0);

            new StepResult("1", ResultStatus.failed).Tabulate(counts);
            counts.ShouldEqual(1, 1, 0, 0);

            new StepResult("1", new NotImplementedException()).Tabulate(counts);
            counts.ShouldEqual(1, 1, 1, 0);
        }

        [Fact]
        public void default_position_is_null()
        {
            new StepResult("1", ResultStatus.error).position
                .ShouldBeNull();
        }

        [Fact]
        public void modify_increments_with_cell_results()
        {
            var result = new StepResult("foo", ResultStatus.ok)
            {
                cells = new[]
                {
                    CellResult.Error("a", "bad!"),
                    CellResult.Error("b", "worse!"),
                    CellResult.Success("c"),
                    CellResult.Failure("d", "different"),
                    CellResult.Failure("e", "different"),
                    CellResult.Failure("f", "different"),
                }
            };

            var counts = new Counts();
            result.Tabulate(counts);

            counts.ShouldEqual(1, 3, 2, 0);
        }

        [Fact]
        public void serialize_status()
        {
            var result = new StepResult("foo", ResultStatus.ok)
            {
                cells = new[]
                {
                    CellResult.Error("a", "bad!"),
                    CellResult.Error("b", "worse!"),
                    CellResult.Success("c"),
                    CellResult.Failure("d", "different"),
                    CellResult.Failure("e", "different"),
                    CellResult.Failure("f", "different"),
                }
            };

            var json = JsonSerialization.ToCleanJson(result);
            json.ShouldContain("\"status\":\"ok\"");
        }


        [Fact]
        public void mark_performance_happy_path()
        {
            var record = new PerfRecord("something", "something", 0, 100);
            record.MarkEnd(50);

            var result = new StepResult("foo", ResultStatus.ok);

            result.MarkPerformance(record);

            result.duration.ShouldBe(record.Duration);
            result.status.ShouldBe(ResultStatus.ok);
        }

        [Fact]
        public void mark_performance_threshold_record()
        {
            var record = new PerfRecord("something", "something", 0, 100);
            record.MarkEnd(200);

            var result = new StepResult("foo", ResultStatus.ok);

            result.MarkPerformance(record);

            result.status.ShouldBe(ResultStatus.error);
            result.error.ShouldBe("**Performance threshold violation**: actual 200 > max 100");
            result.errorDisplay = ErrorDisplay.markdown;
            
        }


    }
}