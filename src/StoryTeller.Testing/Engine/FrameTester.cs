using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class FrameTester
    {
        [Test]
        public void collapse_with_no_child_does_nothing_and_does_not_blow_up()
        {
            var frame = new Frame();
            frame.Collapse();
        }

        [Test]
        public void collapse_with_a_single_child_brings_in_the_exception_text_and_removes_the_child()
        {
            var frame = new Frame();
            frame.Next().AppendException("some bad exception");

            frame.Collapse();

            frame.HasErrors().ShouldBeTrue();
            frame.ExceptionText.ShouldEqual("some bad exception");
        }

        [Test]
        public void collapse_with_a_hierarchy()
        {
            var result = new StepResults();
            result.MoveFrame();
            result.MoveFrame();
            result.MoveFrame();
            result.CaptureException("bad");
            result.MoveFrame();
            result.MoveFrame();
            result.CaptureException("worse");

            result.Collapse();

            result.HasErrors().ShouldBeTrue();
            result.ExceptionText.ShouldContain("bad");
            result.ExceptionText.ShouldContain("worse");
        }

        [Test]
        public void collapse_is_idempotent()
        {
            var result = new StepResults();
            result.MoveFrame();
            result.MoveFrame();
            result.MoveFrame();
            result.CaptureException("bad");

            result.Collapse();
            result.Collapse();
            result.Collapse();

            result.ExceptionText.ShouldEqual("bad");
        }
    }
}