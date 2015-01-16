namespace Storyteller.Core.Engine
{
    public interface ISpecExecutor
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);
    }
}