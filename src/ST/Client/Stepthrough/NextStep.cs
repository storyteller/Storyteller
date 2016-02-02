using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Stepthrough
{
    public class NextStep : ClientMessage
    {
        public string id;
        public object position;

        public NextStep(ILineExecution next) : base("next-step")
        {
            id = next.Id;
            position = next.Position;
        }
    }

    public class CancelStepthrough : ClientMessage
    {
        public CancelStepthrough() : base("cancel-stepthrough")
        {
        }
    }

    public class RunToEnd : ClientMessage
    {
        public RunToEnd() : base("run-to-end")
        {
        }
    }

    public class RunNext : ClientMessage
    {
        public RunNext() : base("run-next")
        {
        }
    }

    public class SetBreakpoints : ClientMessage
    {
        public SetBreakpoints() : base("set-breakpoints")
        {
        }

        public Breakpoint[] breakpoints;
    }
}