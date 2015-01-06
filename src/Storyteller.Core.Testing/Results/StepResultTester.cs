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

            StepResult.Ok.Modify(counts);
            counts.ShouldEqual(0, 0, 0, 0);

            StepResult.Success.Modify(counts);
            counts.ShouldEqual(1, 0, 0, 0);

            StepResult.Failed.Modify(counts);
            counts.ShouldEqual(1, 1, 0, 0);

            StepResult.Error("bad").Modify(counts);
            counts.ShouldEqual(1, 1, 1, 0);
        }
    }
}