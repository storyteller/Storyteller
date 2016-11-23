using StoryTeller.Model;

namespace StoryTeller.Engine.Stepthrough
{
    public interface IStepthroughExecution
    {
        void Cancel();
        ILineExecution Current { get; }
        ILineExecution Next { get; }
        void RunNext();
        void RunToEnd();
        void RunToBreakpoint();

        void SetBreakpoints(Breakpoint[] breakpoints);
    }
}