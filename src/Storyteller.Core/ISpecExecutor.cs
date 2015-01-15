namespace Storyteller.Core
{
    public interface ISpecExecutor
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);
    }
}