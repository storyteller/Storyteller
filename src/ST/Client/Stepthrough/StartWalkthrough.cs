using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Stepthrough
{
    public class StartWalkthrough : ClientMessage
    {
        public Specification data;
        public bool run_to_breakpoint;

        public StartWalkthrough() : base("start-walkthrough")
        {
        }
    }
}