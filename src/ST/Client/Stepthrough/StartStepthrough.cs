using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Stepthrough
{
    public class StartStepthrough : ClientMessage
    {
        public Specification data;

        public StartStepthrough() : base("start-stepthrough")
        {
        }
    }
}