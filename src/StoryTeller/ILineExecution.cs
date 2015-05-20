namespace StoryTeller
{
    public interface ILineExecution : IExecutionStep
    {
        void Execute(SpecContext context);
        object Position { get; set; }
    }
}