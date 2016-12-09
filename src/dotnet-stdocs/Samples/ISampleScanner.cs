namespace StorytellerDocGen.Samples
{
    public interface ISampleScanner
    {
        string Language { get; }
        string Extension { get; }
        string DetermineName(string line);
        bool IsAtEnd(string line);
    }
}