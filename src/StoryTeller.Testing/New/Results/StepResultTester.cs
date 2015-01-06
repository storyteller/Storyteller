using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.New.Results;

namespace StoryTeller.Testing.New.Results
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