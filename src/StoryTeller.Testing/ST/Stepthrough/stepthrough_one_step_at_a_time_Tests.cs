using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars;
using StoryTeller.Model;
using StoryTeller.Results;
using ST.Client.Stepthrough;

namespace StoryTeller.Testing.ST.Stepthrough
{
    
    public class stepthrough_one_step_at_a_time_Tests : StepthroughContext
    {
        public stepthrough_one_step_at_a_time_Tests()
        {
            TheSpecIs(@"
=> Sentence#0
* JustGo#1
* JustGo#2
* JustGo#3
* JustGo#4
* JustGo#5
");
        }



        [Fact]
        public void can_gather_up_the_lines()
        {
            var gatherer = new ExecutionStepGatherer(Executor.Context);
            var plan = Specification.CreatePlan(TestingContext.Library);
            plan.AcceptVisitor(gatherer);

            gatherer.Lines.Count.ShouldBe(7);

            gatherer.Lines[0].ShouldBeOfType<SilentAction>();

            gatherer.Lines[1].ShouldBeOfType<LineStep>();
            gatherer.Lines[2].ShouldBeOfType<LineStep>();
            gatherer.Lines[3].ShouldBeOfType<LineStep>();
            gatherer.Lines[4].ShouldBeOfType<LineStep>();
            gatherer.Lines[5].ShouldBeOfType<LineStep>();

            gatherer.Lines.Last().ShouldBeOfType<SilentAction>();
        }

        [Fact]
        public void the_initial_progress()
        {
            // Initial progress
            LastProgress.counts.ShouldEqual(0, 0, 0, 0);
            LastProgress.step.ShouldBe(0);
            LastProgress.total.ShouldBe(7); // 5 steps, plus silent actions for setup/teardown
            LastProgress.id.ShouldBe(Specification.id);
        }

        [Fact]
        public void sends_the_next_step_message_to_the_beginning()
        {
            var next = LastNextStepMessageReceivedByClient;
            next.ShouldNotBeNull();

            next.id.ShouldBe("0");
            next.position.ShouldBe(Stage.setup);
        }

        [Fact]
        public void run_next_from_the_beginning()
        {
            Executor.RunNext();

            LastNextStepMessageReceivedByClient.id.ShouldBe("1");

            LastProgress.counts.ShouldEqual(0, 0, 0, 0);
            LastProgress.step.ShouldBe(1);
            LastProgress.total.ShouldBe(7); // 5 steps, plus silent actions for setup/teardown
            LastProgress.id.ShouldBe(Specification.id);
        }

        [Fact]
        public void run_to_end_even_with_breakpoints()
        {
            Specification.SetBreakpoint(new Breakpoint("2", null));

            Executor.RunToEnd();

            LastProgress.total.ShouldBe(7);

            TheFinalResults.ShouldNotBeNull();
            TheFinalResults.Results.Length.ShouldBe(7);

            Executor.Next.ShouldBeNull();
        }
    }
}