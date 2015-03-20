namespace StoryTeller.Engine
{
    public interface IStepExecutor
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);

        ISpecContext CurrentContext { get; }
    }
}