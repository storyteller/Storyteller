namespace StoryTeller.Grammars
{
    public interface IEmbeddedSpecContext<T> : ISpecContext
        where T : Fixture, new()
    {
        T Fixture { get; }
    }
}