using Baseline;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Engine.Stepthrough
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

            Start(ExecutionMode.breakpoint);

            Finished.Wait(3.Seconds());

            // It's not the Id, just the total number of steps starting w/ 1
            LastProgress.step.ShouldBe(3); 

            LastNextStepMessageReceivedByClient.id.ShouldBe("3");

        }

        [Fact]
        public void run_to_a_subsequent_breakpoint()
        {
            Specification.SetBreakpoint(new Breakpoint("3", null));
            Specification.SetBreakpoint(new Breakpoint("7", null));

            // this would start it running to the next breakpoint
            Start(ExecutionMode.breakpoint);

            Execution.RunToBreakpoint();

            Finished.Wait(3.Seconds());

            LastProgress.step.ShouldBe(7);

            LastNextStepMessageReceivedByClient.id.ShouldBe("7");
        }

        [Fact]
        public void run_to_adjoining_breakpoints()
        {
            Specification.SetBreakpoint(new Breakpoint("6", null));
            Specification.SetBreakpoint(new Breakpoint("7", null));

            // this would start it running to the next breakpoint
            Start(ExecutionMode.breakpoint);

            Execution.RunToBreakpoint();

            Finished.Wait(3.Seconds());

            LastNextStepMessageReceivedByClient.id.ShouldBe("7");
            LastProgress.step.ShouldBe(7);

            
        }
    }
}