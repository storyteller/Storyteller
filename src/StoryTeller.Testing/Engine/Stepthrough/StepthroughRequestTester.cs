using NSubstitute;
using StoryTeller.Engine.Stepthrough;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Engine.Stepthrough
{
    public class StepthroughRequestTester
    {
        private readonly IStepthroughExecution theExecution = Substitute.For<IStepthroughExecution>();

        [Fact]
        public void run_next()
        {
            new StepthroughRequest
            {
                action = StepthroughAction.next
            }.Apply(theExecution);

            theExecution.Received().RunNext();
        }

        [Fact]
        public void run_to_end()
        {
            new StepthroughRequest
            {
                action = StepthroughAction.runToEnd
            }.Apply(theExecution);

            theExecution.Received().RunToEnd();
        }

        [Fact]
        public void run()
        {
            new StepthroughRequest
            {
                action = StepthroughAction.run
            }.Apply(theExecution);

            theExecution.Received().RunToBreakpoint();
        }

        [Fact]
        public void stop()
        {
            new StepthroughRequest
            {
                action = StepthroughAction.stop
            }.Apply(theExecution);

            theExecution.Received().Cancel();
        }

        [Fact]
        public void applies_breakpoints()
        {
            var request = new StepthroughRequest
            {
                action = StepthroughAction.stop,
                breakpoints = new Breakpoint[] {new Breakpoint(), new Breakpoint()}
            };

            request.Apply(theExecution);

            theExecution.Received().SetBreakpoints(request.breakpoints);
        }
    }
}