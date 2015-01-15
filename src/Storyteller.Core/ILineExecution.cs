namespace Storyteller.Core
{
    public interface ILineExecution : IExecutionStep
    {
        void Execute(ISpecContext context);
    }
}