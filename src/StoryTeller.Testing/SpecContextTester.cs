using System;
using System.Linq;
using System.Threading;
using Xunit;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;
using StoryTeller.Testing.Results;

namespace StoryTeller.Testing
{
    
    public class SpecContextTester
    {
        private SpecContext theContext = new SpecContext(new Specification(), null, new NulloResultObserver(), new StopConditions(),
                new SimpleExecutionContext());


        [Fact]
        public void log_exception_captures_it_in_the_Exceptions_report()
        {
            var ex = new NotImplementedException("No go");

            theContext.Reporting.ReporterFor<ExceptionReport>().Count.ShouldBe(0);
            theContext.LogException("1", ex);

            theContext.Reporting.ReporterFor<ExceptionReport>().Count.ShouldBe(1);

            theContext.Reporting.ReporterFor<ExceptionReport>().ToHtml().ShouldContain("No go");
        }

        [Fact]
        public void log_exception_does_the_counts()
        {
            theContext.LogException("1", new NotImplementedException());

            theContext.Counts.ShouldEqual(0, 0, 1, 0);
        }

        [Fact]
        public void log_exception_will_unwrap_the_exception_message()
        {
            theContext.LogException("1", new StorytellerAssertionException("It is wrong"));
            theContext.Results.OfType<StepResult>().Single().error
                .ShouldBe("It is wrong");
        }

        [Fact]
        public void log_exception_logs_a_result()
        {
            var exception = new NotImplementedException();
            theContext.LogException("1", exception, Stage.setup);

            var result = theContext.Results.Single().ShouldBeOfType<StepResult>();
            result.status.ShouldBe(ResultStatus.error);
            result.error.ShouldBe(exception.ToString());
            result.position.ShouldBe(Stage.setup.ToString());
        }

        [Fact]
        public void wait_is_true_if_the_condition_is_already_true()
        {
            theContext.Wait(() => true, new TimeSpan(0, 0, 0, 0, 500)).ShouldBe(true);
        }

        [Fact]
        public void wait_is_false_if_the_condition_is_never_met()
        {
            theContext.Wait(() => false, new TimeSpan(0, 0, 0, 0, 100), 25).ShouldBe(false);
        }

        [Fact]
        public void puts_the_spec_id_on_result_messages()
        {
            theContext.LogException("1", new NotImplementedException());

            theContext.Results.Last().spec.ShouldBe(theContext.Specification.id);
        }

        [Fact]
        public void writes_contextual_logging_into_results()
        {
            theContext.Reporting.ReporterFor<DivReport>().Add("1");
            theContext.Reporting.ReporterFor<ListReport>().Add("2");

            var results = theContext.FinalizeResults(3);

            results.Reporting.Count().ShouldBe(2);
        }

        [Fact]
        public void stores_the_attempt_number_on_the_finalized_results()
        {
            var results = theContext.FinalizeResults(3);
            results.Attempts.ShouldBe(3);
        }

        [Fact]
        public void stores_whether_there_was_a_critical_exception()
        {
            theContext.HadCriticalException.ShouldBe(false);
            theContext.FinalizeResults(3)
                .HadCriticalException.ShouldBe(false);

            theContext.LogException("1", new StorytellerCriticalException("Boo!"));
            theContext.HadCriticalException.ShouldBe(true);

            theContext.FinalizeResults(3)
                .HadCriticalException.ShouldBe(true);
        }
    }

    
    public class when_testing_for_should_continue
    {
        private SpecContext theContext = new SpecContext(new Specification(), null, new NulloResultObserver(), new StopConditions(),
                new SimpleExecutionContext());
        private CancellationTokenSource theCancellation;



        [Fact]
        public void just_starting_with_default_options()
        {
            theContext.CanContinue().ShouldBe(true);
        }

        [Fact]
        public void stops_with_a_critical_exception_even_if_there_is_no_other_failure()
        {
            theContext.StopConditions.BreakOnExceptions = false;

            theContext.LogException("1", new StorytellerCriticalException());

            theContext.CanContinue().ShouldBe(false);
        }

        [Fact]
        public void stops_with_a_catastropic_exception_even_if_there_is_no_other_failure()
        {
            theContext.StopConditions.BreakOnExceptions = false;

            theContext.LogException("1", new StorytellerCatastrophicException());

            theContext.CanContinue().ShouldBe(false);
        }

        [Fact]
        public void do_not_stop_on_normal_exceptions_if_the_type_is_not_critical()
        {
            theContext.LogException("1", new NotImplementedException());

            theContext.CanContinue().ShouldBe(true);
        }

        [Fact]
        public void stop_on_the_first_exception_if_condition_is_to_do_that()
        {
            theContext.StopConditions.BreakOnExceptions = true;

            theContext.LogException("1", new NotImplementedException());

            theContext.CanContinue().ShouldBe(false);
        }

        [Fact]
        public void stop_on_the_first_wrong_when_stop_conditions_say_so()
        {
            theContext.StopConditions.BreakOnWrongs = true;

            theContext.LogResult(new StepResult("1", ResultStatus.success));
            theContext.CanContinue().ShouldBe(true);

            theContext.LogResult(new StepResult("1", ResultStatus.failed));
            theContext.CanContinue().ShouldBe(false);
        }

        [Fact]
        public void will_not_stop_on_wrong_if_stop_conditions_are_the_defaults()
        {
            theContext.LogResult(new StepResult("1", ResultStatus.failed));
            theContext.CanContinue().ShouldBe(true);
        }
    }
}