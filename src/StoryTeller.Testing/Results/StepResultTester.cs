using System;
using Xunit;
using Shouldly;
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
    }
}