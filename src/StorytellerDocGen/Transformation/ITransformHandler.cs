using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public interface ITransformHandler
    {
        string Key { get; }
        string Transform(Topic current, string data);
    }
}