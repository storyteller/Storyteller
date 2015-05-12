using StoryTeller;

namespace Samples.Fixtures.Actions
{
    // SAMPLE: implicit-action-in-setup
    public class BatchProcessFixture : Fixture
    {
        public BatchProcessFixture()
        {
            Title = "After the batch process finishes";
        }

        public override void SetUp()
        {
           // Force the batch process to execute
        }
    }
    // ENDSAMPLE

    // SAMPLE: explicit-action-in-fixture
    public class ExplicitExecutionFixture : Fixture
    {
        public ExplicitExecutionFixture()
        {
            Title = "Batch Process #1";
        }

        [FormatAs("Start the Batch Process")]
        public void StartTheBatchProcess()
        {
            // explicitly start the batch process here
        }
    }
    // ENDSAMPLE
}