using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Engine.Stepthrough
{
    public class NextStep : ClientMessage
    {
        public string id;
        public object position;
        public string spec;

        public NextStep(string spec, ILineExecution next) : base("next-step")
        {
            id = next.Id;
            position = next.Position;
            this.spec = spec;
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

        public string id;

        public Breakpoint[] breakpoints;
    }
}