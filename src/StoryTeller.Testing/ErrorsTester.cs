using System;
using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class ErrorsTester
    {
        [Test]
        public void capture_error_on_the_second_frame()
        {
            var errors = new StepResults();
            errors.MoveFrame();
            errors.CaptureException("anything");

            errors.MoveFirst();
            errors.HasErrors().ShouldBeFalse();

            errors.MoveFrame();
            errors.HasErrors().ShouldBeTrue();
        }

        [Test]
        public void capture_error_on_third_frame()
        {
            var errors = new StepResults();
            errors.MoveFrame();
            errors.MoveFrame();
            errors.CaptureException("anything");

            errors.MoveFirst();
            errors.HasErrors().ShouldBeFalse();

            errors.MoveFrame();
            errors.HasErrors().ShouldBeFalse();

            errors.MoveFrame();
            errors.HasErrors().ShouldBeTrue();
        }


        [Test]
        public void capture_exception_text()
        {
            var errors = new StepResults();
            errors.CaptureException(new NotImplementedException().ToString());

            errors.ExceptionText.ShouldContain("NotImplementedException");
        }

        [Test]
        public void capture_exception_with_frame()
        {
            var errors = new StepResults();
            errors.CaptureException("anything");

            errors.MoveFrame();

            errors.HasErrors().ShouldBeFalse();
            errors.ExceptionText.ShouldBeEmpty();
        }

        [Test]
        public void capturing_an_exception_means_that_has_errors_should_be_true()
        {
            var errors = new StepResults();
            errors.HasErrors().ShouldBeFalse();

            errors.CaptureException(new NotImplementedException().ToString());
            errors.HasErrors().ShouldBeTrue();
        }

        [Test]
        public void clear_will_clear_out_the_frame_errors()
        {
            var errors = new StepResults();
            errors.MoveFrame();
            errors.MoveFrame();
            errors.CaptureException("anything");

            errors.Clear();

            errors.MoveFirst();
            errors.MoveFrame();
            errors.MoveFrame();
            errors.HasErrors().ShouldBeFalse();
        }

        [Test]
        public void mark_as_exception()
        {
            var errors = new StepResults();
            errors.MarkFormatFailure("key1");
            errors.MarkMissingValue("key2");

            errors.IsInException("key1").ShouldBeTrue();
            errors.IsInException("key2").ShouldBeTrue();
            errors.IsInException("key3").ShouldBeFalse();
        }

        [Test]
        public void mark_as_failure()
        {
            var errors = new StepResults();
            errors.MarkFailure("key1");

            errors.IsFailure("key1").ShouldBeTrue();
            errors.IsFailure("key2").ShouldBeFalse();
        }

        [Test]
        public void marking_a_missing_value_should_set_HasErrors_to_true()
        {
            var errors = new StepResults();
            errors.HasErrors().ShouldBeFalse();

            errors.MarkMissingValue("a");

            errors.HasErrors().ShouldBeTrue();
        }

        [Test]
        public void MarkMissingStep()
        {
            var errors = new StepResults();
            errors.MarkMissingValue("a");

            errors.ExceptionText.ShouldEqual("\"a\" is not defined.");

            errors.MarkMissingValue("b");
            errors.ExceptionText.ShouldEqual("\"a\" is not defined.\n\"b\" is not defined.");
        }

        [Test]
        public void reset_clears_exception()
        {
            var errors = new StepResults();
            errors.MarkFormatFailure("key1");

            errors.Clear();

            errors.IsInException("key1").ShouldBeFalse();
        }

        [Test]
        public void reset_clears_exception_text_and_has_errors()
        {
            var errors = new StepResults();
            errors.MarkMissingValue("a");
            errors.Clear();

            errors.HasErrors().ShouldBeFalse();
            errors.ExceptionText.ShouldBeEmpty();

            errors.CaptureException(new NotImplementedException().ToString());

            errors.Clear();

            errors.HasErrors().ShouldBeFalse();
            errors.ExceptionText.ShouldBeEmpty();
        }

        [Test]
        public void reset_clears_failure_keys()
        {
            var errors = new StepResults();
            errors.MarkFailure("key1");

            errors.Clear();

            errors.IsInException("key1").ShouldBeFalse();
        }
    }
}