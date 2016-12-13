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

    }
}