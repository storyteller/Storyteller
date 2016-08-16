using Xunit;
using Shouldly;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace StoryTeller.Testing.Results
{
    
    public class CellResultTester
    {
        [Fact]
        public void unwrap_storyteller_assertion_exceptions()
        {
            var ex = new StorytellerAssertionException("Something is wrong");
            CellResult.Error("foo", ex).error.ShouldBe("Something is wrong");
        }

        [Fact]
        public void modify_counts_when_ok()
        {
            var counts = new Counts();
            CellResult.Ok("a").Tabulate(counts);

            counts.ShouldEqual(0, 0, 0, 0);
        }

        [Fact]
        public void modify_counts_when_in_success_state()
        {
            var counts = new Counts();
            CellResult.Success("a").Tabulate(counts);

            counts.ShouldEqual(1, 0, 0, 0);
        }

        [Fact]
        public void modify_counts_when_in_failure_state()
        {
            var counts = new Counts();

            CellResult.Failure("a","foo").Tabulate(counts);

            counts.ShouldEqual(0, 1, 0, 0);
        }

        [Fact]
        public void modify_counts_when_in_error_state()
        {
            var counts = new Counts();

            CellResult.Error("a","bad message").Tabulate(counts);

            counts.ShouldEqual(0, 0, 1, 0);
        }

        [Fact]
        public void modify_counts_when_in_missing_state()
        {
            var counts = new Counts();

            CellResult.Missing("a").Tabulate(counts);

            counts.ShouldEqual(0, 0, 0, 1);
        }

        [Fact]
        public void serialize_status()
        {
            var result = new CellResult("A", ResultStatus.error);

            var json = JsonSerialization.ToJson(result);
            json.ShouldContain("\"status\":\"error\"");
        }
    }
}