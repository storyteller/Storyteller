namespace StoryTeller
{
    public enum StepthroughStyle
    {
        Into,
        Over
    }

    public interface ILineExecution : IExecutionStep
    {
        void Execute(SpecContext context);
        object Position { get; set; }

        string Id { get; }

        StepthroughStyle Stepthrough { get; set; }
    }
}