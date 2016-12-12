using System;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Engine.Stepthrough
{
    public enum StepthroughAction
    {
        next,
        runToEnd,
        run
    }

    public class StepthroughRequest : ClientMessage
    {
        public StepthroughRequest() : base("stepthrough")
        {
        }

        public StepthroughAction action = StepthroughAction.next;

        public Breakpoint[] breakpoints = new Breakpoint[0];

        public void Apply(IStepthroughExecution execution)
        {
            execution.SetBreakpoints(breakpoints);

            switch (action)
            {
                case StepthroughAction.next:
                    execution.RunNext();
                    break;

                case StepthroughAction.run:
                    execution.RunToBreakpoint();
                    break;

                case StepthroughAction.runToEnd:
                    execution.RunToEnd();
                    break;
            }
        }
    }
}