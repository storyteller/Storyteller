using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Results
{
    [TestFixture]
    public class StepResultTester
    {
        [Test]
        public void modify_increments()
        {
            var counts = new Counts();

            new StepResult(ResultStatus.ok).Modify(counts);
            counts.ShouldEqual(0, 0, 0, 0);

            new StepResult(ResultStatus.success).Modify(counts);
            counts.ShouldEqual(1, 0, 0, 0);

            new StepResult(ResultStatus.failed).Modify(counts);
            counts.ShouldEqual(1, 1, 0, 0);

            StepResult.Error("bad").Modify(counts);
            counts.ShouldEqual(1, 1, 1, 0);
        }
    }
}