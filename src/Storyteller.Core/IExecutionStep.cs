using Storyteller.Core.Engine;

namespace Storyteller.Core
{
    public interface IExecutionStep
    {
        int Count();
        void AcceptVisitor(IStepExecutor executor);
    }
}