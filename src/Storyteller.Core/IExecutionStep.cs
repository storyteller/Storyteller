namespace Storyteller.Core
{
    public interface IExecutionStep
    {
        int Count();
        void AcceptVisitor(ISpecExecutor executor);
    }
}