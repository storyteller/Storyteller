using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing.ST.Stepthrough
{
    
    public class stepthrough_to_break_points_Tests : StepthroughContext
    {
        public stepthrough_to_break_points_Tests()
        {
            TheSpecIs(@"
=> Sentence#0
* JustGo#1
* JustGo#2
* JustGo#3
* JustGo#4
* JustGo#5
* JustGo#6
* JustGo#7
* JustGo#8
* JustGo#9
");
        }


        [Fact]
        public void can_run_to_a_breakpoint_for_the_first_one()
        {
            Specification.SetBreakpoint(new Breakpoint("3", null));
            Specification.SetBreakpoint(new Breakpoint("7", null));

            Executor.RunToBreakpoint();

            // It's not the Id, just the total number of steps starting w/ 1
            LastProgress.step.ShouldBe(3); 

            LastNextStepMessageReceivedByClient.id.ShouldBe("3");

        }

        [Fact]
        public void run_to_a_subsequent_breakpoint()
        {
            Specification.SetBreakpoint(new Breakpoint("3", null));
            Specification.SetBreakpoint(new Breakpoint("7", null));

            Executor.RunToBreakpoint();
            Executor.RunToBreakpoint();

            LastProgress.step.ShouldBe(7);

            LastNextStepMessageReceivedByClient.id.ShouldBe("7");
        }

        [Fact]
        public void run_to_adjoining_breakpoints()
        {
            Specification.SetBreakpoint(new Breakpoint("6", null));
            Specification.SetBreakpoint(new Breakpoint("7", null));

            Executor.RunToBreakpoint();
            Executor.RunToBreakpoint();

            LastNextStepMessageReceivedByClient.id.ShouldBe("7");
            LastProgress.step.ShouldBe(7);

            
        }
    }
}