using System;
using System.Linq;
using System.Threading;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class SpecContextTester
    {
        private RecordingExecutionObserver theObserver;
        private SpecContext theContext;

        [SetUp]
        public void SetUp()
        {
            theObserver = new RecordingExecutionObserver();
            theContext = new SpecContext(theObserver, new CancellationToken());

            theContext.Push(new Specification{Id = Guid.NewGuid().ToString()});
        }

        [Test]
        public void log_exception_does_the_counts()
        {
            theContext.LogException(new NotImplementedException());

            theContext.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Test]
        public void log_exception_logs_a_result()
        {
            var exception = new NotImplementedException();
            theContext.LogException(exception, Stage.setup);

            var result = theObserver.Messages.Single().ShouldBeOfType<StepResult>();
            result.status.ShouldEqual(ResultStatus.error);
            result.error.ShouldEqual(exception.ToString());
            result.stage.ShouldEqual(Stage.setup);
        }
    }

    [TestFixture]
    public class when_testing_for_should_continue
    {
        private SpecContext theContext;
        private CancellationTokenSource theCancellation;

        [SetUp]
        public void SetUp()
        {
            theCancellation = new CancellationTokenSource();
            theContext = new SpecContext(new NulloExecutionObserver(), theCancellation.Token);
            theContext.Push(new Specification{Id = Guid.NewGuid().ToString()});
        }

        [Test]
        public void just_starting_with_default_options()
        {
            theContext.CanContinue().ShouldBeTrue();
        }

        [Test]
        public void stops_with_a_critical_exception_even_if_there_is_no_other_failure()
        {
            theContext.StopConditions.BreakOnExceptions = false;

            theContext.LogException(new StorytellerCriticalException());

            theContext.CanContinue().ShouldBeFalse();
        }

        [Test]
        public void stops_with_a_catastropic_exception_even_if_there_is_no_other_failure()
        {
            theContext.StopConditions.BreakOnExceptions = false;

            theContext.LogException(new StorytellerCatastrophicException());

            theContext.CanContinue().ShouldBeFalse();
        }

        [Test]
        public void stops_when_the_cancellation_token_has_been_cancelled()
        {
            theCancellation.Cancel();

            theContext.CanContinue().ShouldBeFalse();
        }

        [Test]
        public void do_not_stop_on_normal_exceptions_if_the_type_is_not_critical()
        {
            theContext.LogException(new NotImplementedException());

            theContext.CanContinue().ShouldBeTrue();
        }

        [Test]
        public void stop_on_the_first_exception_if_condition_is_to_do_that()
        {
            theContext.StopConditions.BreakOnExceptions = true;

            theContext.LogException(new NotImplementedException());

            theContext.CanContinue().ShouldBeFalse();
        }

        [Test]
        public void stop_on_the_first_wrong_when_stop_conditions_say_so()
        {
            theContext.StopConditions.BreakOnWrongs = true;

            theContext.LogResult(new StepResult(ResultStatus.success));
            theContext.CanContinue().ShouldBeTrue();

            theContext.LogResult(new StepResult(ResultStatus.failed));
            theContext.CanContinue().ShouldBeFalse();
        }

        [Test]
        public void will_not_stop_on_wrong_if_stop_conditions_are_the_defaults()
        {

            theContext.LogResult(new StepResult(ResultStatus.failed));
            theContext.CanContinue().ShouldBeTrue();
        }
    }
}