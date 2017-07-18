using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public interface IRunExecutionContext
    {
        void BeforeRun(Specification[] specifications);
        void AfterRun(BatchRecord[] results);
    }
}
