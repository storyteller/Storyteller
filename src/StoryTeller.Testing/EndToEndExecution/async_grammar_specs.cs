using System.Threading.Tasks;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.EndToEndExecution
{
    public class async_grammar_specs : SpecRunningContext
    {
        [Fact]
        public void check_simple_fact_async()
        {
            execute(@"
Name: Test Run
=> Async
* CheckSimple#1: text=right
* CheckSimple#2: text=wrong
");

            Step("1").Cell("text").Succeeded();
            Step("2").Cell("text").FailedWithActual("right");
        }

        [Fact]
        public void execute_async_action()
        {
            execute(@"
Name: Test Run
=> Async
* SetText: text=right
* CheckContext#1: text=right
* CheckContext#2: text=wrong
");

            Step("1").Cell("text").Succeeded();
            Step("2").Cell("text").FailedWithActual("right");
        }

        [Fact]
        public void execute_async_facts()
        {
            execute(@"
Name: Test Run
=> Async
* IsTrue#1
* IsFalse#2
");

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }
    }

    public class AsyncFixture : Fixture
    {
        public AsyncFixture()
        {
            this["CheckContext"] = Check("text", c => c.State.Retrieve<string>("text"));
        }

        [FormatAs("The text should be {text}")]
        public Task<string> CheckSimple()
        {
            return Task.FromResult("right");
        }

        [FormatAs("Set the text, asynchronously")]
        public Task SetText(string text)
        {
            Context.State.Store("text", text);

            return Task.CompletedTask;
        }

        public Task<bool> IsTrue()
        {
            return Task.FromResult(true);
        }

        public Task<bool> IsFalse()
        {
            return Task.FromResult(false);
        }
    }
}