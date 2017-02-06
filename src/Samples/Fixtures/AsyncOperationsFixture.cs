using System.Threading.Tasks;
using StoryTeller;

namespace Samples.Fixtures
{
    // SAMPLE: AsyncOperationsFixture
    public class AsyncOperationsFixture : Fixture
    {
        [FormatAs("Perform a task asynchronously")]
        public Task PerformTask()
        {
            // do something with a method that returns a Task
            return Task.CompletedTask;
        }

        [FormatAs("The current name should be {name}")]
        public Task<string> CheckName()
        {
            // Use an ansynchronous method
            return Task.FromResult("Jeremy");
        }

        [FormatAs("This condition should be true")]
        public Task<bool> IsConditionTrue()
        {
            // Use an asynchronous result
            return Task.FromResult(true);
        }

    }
    // ENDSAMPLE
}