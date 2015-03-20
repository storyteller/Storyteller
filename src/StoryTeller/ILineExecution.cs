namespace StoryTeller
{
    public interface ILineExecution : IExecutionStep
    {
        void Execute(ISpecContext context);
        object Position { get; set; }
    }
}